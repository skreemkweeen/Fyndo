"use client";

import { useState } from "react";
import { X, UploadCloud, File, Image as ImageIcon } from "lucide-react";

interface AddProductModalProps {
  onClose: () => void;
}

export function AddProductModal({ onClose }: AddProductModalProps) {
  const [productType, setProductType] = useState<
    "physical" | "digital" | "service"
  >("physical");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-neutral-900/50">
          <h2 className="text-xl font-bold text-white tracking-tight">
            Add New Product
          </h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Product Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(["physical", "digital", "service"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setProductType(type)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    productType === type
                      ? "bg-white text-black border-white"
                      : "bg-black/50 text-neutral-400 border-white/10 hover:bg-white/5 hover:border-white/20"
                  }`}
                >
                  <span className="capitalize">{type}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Product Details
            </label>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Product Name"
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Price ($)"
                  className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                />
                <input
                  type="text"
                  placeholder="SKU (Optional)"
                  className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>
            </div>
          </div>

          {productType === "digital" && (
            <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-5">
              <label className="block text-sm font-medium text-indigo-300 mb-3 flex items-center gap-2">
                <File className="w-4 h-4" /> Digital Goods Payload
              </label>
              <p className="text-xs text-indigo-300/70 mb-4">
                Upload the secure file that buyers will receive upon purchase.
                Links are securely signed and time-limited by Fyndo Vault.
              </p>

              <div className="border-2 border-dashed border-indigo-500/20 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-indigo-500/5 hover:border-indigo-500/40 transition-all">
                <UploadCloud className="w-8 h-8 text-indigo-400 mb-3" />
                <span className="text-sm font-medium text-indigo-200">
                  Click to upload payload
                </span>
                <span className="text-xs text-indigo-400/60 mt-1">
                  ZIP, PDF, MP3 up to 2GB
                </span>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Cover Image
            </label>
            <div className="border-2 border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/5 transition-all">
              <ImageIcon className="w-6 h-6 text-neutral-500 mb-2" />
              <span className="text-sm font-medium text-neutral-400">
                Upload primary visual
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-white/10 bg-neutral-900/50 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-medium text-sm text-neutral-300 hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button className="px-5 py-2.5 rounded-xl font-medium text-sm bg-white text-black hover:bg-neutral-200 transition-colors">
            Publish Product
          </button>
        </div>
      </div>
    </div>
  );
}
