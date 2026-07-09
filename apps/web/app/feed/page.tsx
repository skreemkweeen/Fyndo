"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

export default function FeedPage() {
  const POSTS = [
    {
      id: "p1",
      author: "Ninth Note Official",
      avatar: "N",
      time: "2 hours ago",
      content:
        "The essence of midnight. Introducing 'Vanilla Noir', a limited drop exploring the darker notes of Madagascar vanilla, paired with smoked oud and black pepper. Pre-orders open tonight.",
      media: "/placeholder-perfume.jpg",
      mediaType: "image",
      likes: 1242,
      comments: 89,
    },
    {
      id: "p2",
      author: "Element UX Studio",
      avatar: "E",
      time: "5 hours ago",
      content:
        "Exploring brutally minimalist interfaces for high-density trading platforms. Here's a sneak peek at the typography system we're shipping next month.",
      media: null,
      mediaType: null,
      likes: 432,
      comments: 12,
    },
    {
      id: "p3",
      author: "Vektor Archives",
      avatar: "V",
      time: "12 hours ago",
      content:
        "Behind the scenes: Crafting the new titanium casing. Notice the micro-bevels.",
      media: "/placeholder-video.mp4",
      mediaType: "video",
      likes: 890,
      comments: 45,
    },
    {
      id: "p4",
      author: "Soundscapes & Co.",
      avatar: "S",
      time: "1 day ago",
      content:
        "Listen to the raw analog warmth of the new synthesizer module. Pure vintage tone.",
      media: "/placeholder-audio.mp3",
      mediaType: "audio",
      likes: 567,
      comments: 23,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 flex justify-center py-12">
      <div className="w-full max-w-2xl px-6">
        <header className="mb-12">
          <h1 className="text-3xl font-black tracking-tight text-neutral-900 mb-2">
            Discovery Feed
          </h1>
          <p className="text-neutral-500 font-medium">
            Updates, drops, and stories from creators you follow.
          </p>
        </header>

        <div className="space-y-12">
          {POSTS.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">
                    {post.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">
                      {post.author}
                    </h3>
                    <p className="text-xs font-medium text-neutral-400">
                      {post.time}
                    </p>
                  </div>
                </div>
                <button className="text-neutral-400 hover:text-neutral-900 transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {post.media && post.mediaType === "image" && (
                <div className="w-full aspect-[4/3] bg-neutral-100 flex items-center justify-center border-y border-neutral-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-neutral-50 opacity-50" />
                  <span className="text-neutral-400 font-medium text-sm z-10">
                    [ Rich Media Placeholder ]
                  </span>
                </div>
              )}

              {post.media && post.mediaType === "video" && (
                <div className="w-full aspect-[4/3] bg-black flex items-center justify-center border-y border-neutral-900 relative overflow-hidden">
                  <video
                    src={post.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <span className="text-white/50 font-medium text-sm z-10">
                    [ Video Placeholder ]
                  </span>
                </div>
              )}

              {post.media && post.mediaType === "audio" && (
                <div className="w-full p-6 bg-neutral-900 border-y border-neutral-800 text-white flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm tracking-wide">
                      Voice Memo
                    </span>
                    <span className="text-xs text-neutral-400">0:45</span>
                  </div>
                  <div className="h-12 bg-neutral-800 rounded-full flex items-center px-4 overflow-hidden relative">
                    {/* Mock waveform */}
                    <div className="flex gap-1 items-end h-6 opacity-50">
                      {[...Array(30)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-white rounded-t-sm"
                          style={{
                            height: `${Math.max(20, Math.random() * 100)}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="p-6">
                <p className="text-neutral-700 leading-relaxed text-[15px] mb-6">
                  {post.content}
                </p>
                <div className="flex items-center gap-6 text-neutral-500">
                  <button className="flex items-center gap-2 hover:text-red-500 transition-colors group">
                    <Heart className="w-5 h-5 group-hover:fill-red-500" />
                    <span className="text-sm font-bold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-neutral-900 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-bold">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-neutral-900 transition-colors ml-auto">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
