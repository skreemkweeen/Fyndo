"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Sparkles,
  Filter,
  MoreHorizontal,
  Package,
} from "lucide-react";
import { AddProductModal } from "../../components/AddProductModal";

type ProductType = "physical" | "digital" | "service";

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  type: ProductType;
  price: number;
  stock: number | "Unlimited";
  status: "active" | "draft" | "archived";
}

const mockInventory: InventoryItem[] = [
  {
    id: "1",
    name: "Vanilla Noir 50ml",
    sku: "VN-50-PH",
    type: "physical",
    price: 185.0,
    stock: 42,
    status: "active",
  },
  {
    id: "2",
    name: "Vanilla Noir Discovery Set",
    sku: "VN-DS-PH",
    type: "physical",
    price: 45.0,
    stock: 112,
    status: "active",
  },
  {
    id: "3",
    name: "Brand Identity Consultation",
    sku: "SVC-BID-01",
    type: "service",
    price: 1500.0,
    stock: "Unlimited",
    status: "active",
  },
  {
    id: "4",
    name: "Element UX Component Library",
    sku: "DIG-EL-UI",
    type: "digital",
    price: 99.0,
    stock: "Unlimited",
    status: "active",
  },
  {
    id: "5",
    name: "Oud Supreme 100ml",
    sku: "OS-100-PH",
    type: "physical",
    price: 240.0,
    stock: 0,
    status: "draft",
  },
];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-10 max-w-7xl mx-auto h-screen flex flex-col">
      <header className="mb-8 flex justify-between items-end shrink-0">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white mb-2">
            Inventory Management
          </h1>
          <p className="text-neutral-400 text-sm">
            Manage physical goods, digital assets, and services.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-2 rounded-xl font-medium text-sm hover:bg-indigo-500/20 transition-colors flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> AI Auto-Draft
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-black px-4 py-2 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </div>
      </header>

      {isModalOpen && <AddProductModal onClose={() => setIsModalOpen(false)} />}

      <div className="bg-neutral-900 border border-white/10 rounded-2xl flex flex-col flex-1 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-neutral-900/50">
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Search by name or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <button className="p-2 border border-white/10 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-black/40 text-neutral-400 sticky top-0 z-10 backdrop-blur-md">
              <tr>
                <th className="px-6 py-3 font-medium">Product Name</th>
                <th className="px-6 py-3 font-medium">SKU</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Price</th>
                <th className="px-6 py-3 font-medium">Stock</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockInventory.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center shrink-0">
                        <Package className="w-5 h-5 text-neutral-500" />
                      </div>
                      <span className="font-medium text-white">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-neutral-400 font-mono text-xs">
                    {item.sku}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 text-xs font-medium capitalize border border-white/10">
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    {item.stock === "Unlimited" ? (
                      <span className="text-neutral-500 font-mono text-xs">
                        ∞
                      </span>
                    ) : item.stock === 0 ? (
                      <span className="text-red-400 font-medium text-xs">
                        Out of stock
                      </span>
                    ) : (
                      <span className="text-neutral-300">{item.stock}</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${item.status === "active" ? "bg-emerald-500" : "bg-neutral-600"}`}
                      />
                      <span className="text-neutral-400 capitalize">
                        {item.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-neutral-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
