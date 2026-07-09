-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Profiles Table
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'buyer' NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone."
  ON profiles FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile."
  ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile."
  ON profiles FOR UPDATE USING (auth.uid() = id);

-- Stores Table
CREATE TABLE stores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  custom_domain TEXT UNIQUE,
  theme_config JSONB DEFAULT '{}'::jsonb NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
ALTER TABLE stores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Stores are viewable by everyone."
  ON stores FOR SELECT USING (true);

CREATE POLICY "Owners can insert their own store."
  ON stores FOR INSERT WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Owners can update their own store."
  ON stores FOR UPDATE USING (auth.uid() = owner_id);

-- Products Table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  sale_type TEXT DEFAULT 'fixed' NOT NULL,
  inventory_count INTEGER DEFAULT 0 NOT NULL,
  images JSONB DEFAULT '[]'::jsonb NOT NULL,
  embedding vector(1536),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are viewable by everyone."
  ON products FOR SELECT USING (true);

CREATE POLICY "Store owners can insert products."
  ON products FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM stores WHERE id = products.store_id AND owner_id = auth.uid())
  );

CREATE POLICY "Store owners can update products."
  ON products FOR UPDATE USING (
    EXISTS (SELECT 1 FROM stores WHERE id = products.store_id AND owner_id = auth.uid())
  );

-- Follows Table
CREATE TABLE follows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  follower_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  following_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(follower_id, following_id)
);
ALTER TABLE follows ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Follows are viewable by everyone."
  ON follows FOR SELECT USING (true);

CREATE POLICY "Users can follow others."
  ON follows FOR INSERT WITH CHECK (auth.uid() = follower_id);

CREATE POLICY "Users can unfollow."
  ON follows FOR DELETE USING (auth.uid() = follower_id);

-- Collections Table
CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  is_private BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public collections are viewable by everyone."
  ON collections FOR SELECT USING (is_private = false OR auth.uid() = owner_id);

CREATE POLICY "Users can manage their collections."
  ON collections FOR ALL USING (auth.uid() = owner_id);

-- Collection Items
CREATE TABLE collection_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_id UUID REFERENCES collections(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(collection_id, product_id)
);
ALTER TABLE collection_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Collection items follow collection visibility."
  ON collection_items FOR SELECT USING (
    EXISTS (SELECT 1 FROM collections WHERE id = collection_items.collection_id AND (is_private = false OR owner_id = auth.uid()))
  );

CREATE POLICY "Users can manage items in their collections."
  ON collection_items FOR ALL USING (
    EXISTS (SELECT 1 FROM collections WHERE id = collection_items.collection_id AND owner_id = auth.uid())
  );
