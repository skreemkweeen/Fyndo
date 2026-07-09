"use client";

import { useState } from "react";
import { Monitor, Moon, Sun, Save, Check, Type, Palette } from "lucide-react";

export default function StorefrontBuilderPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [primaryColor, setPrimaryColor] = useState("#ffffff");
  const [fontFamily, setFontFamily] = useState("Inter");
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Editor Panel */}
      <div className="w-80 bg-neutral-900 border-r border-white/10 flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-lg font-bold text-white">Storefront Settings</h2>
          <p className="text-xs text-neutral-400 mt-1">
            Configure your `theme_config` JSON.
          </p>
        </div>

        <div className="p-6 flex-1 overflow-y-auto space-y-8">
          {/* Mode Toggle */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
              <Monitor className="w-4 h-4" /> Default Mode
            </label>
            <div className="flex bg-black/50 p-1 rounded-xl border border-white/5">
              <button
                onClick={() => setTheme("dark")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm rounded-lg transition-all ${theme === "dark" ? "bg-neutral-800 text-white shadow-sm" : "text-neutral-500 hover:text-white"}`}
              >
                <Moon className="w-4 h-4" /> Dark
              </button>
              <button
                onClick={() => setTheme("light")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm rounded-lg transition-all ${theme === "light" ? "bg-white text-black shadow-sm" : "text-neutral-500 hover:text-white"}`}
              >
                <Sun className="w-4 h-4" /> Light
              </button>
            </div>
          </div>

          {/* Color Scheme */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
              <Palette className="w-4 h-4" /> Primary Brand Color
            </label>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full border-4 border-black shadow-md cursor-pointer ring-2 ring-white/10 transition-transform hover:scale-105"
                style={{ backgroundColor: primaryColor }}
              />
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm font-mono text-white flex-1 focus:outline-none focus:border-white/30"
              />
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
              <Type className="w-4 h-4" /> Typography
            </label>
            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 appearance-none"
            >
              <option value="Inter">Inter (Default)</option>
              <option value="Helvetica Neue">Helvetica Neue (Editorial)</option>
              <option value="Playfair Display">
                Playfair Display (Luxury)
              </option>
              <option value="JetBrains Mono">JetBrains Mono (Technical)</option>
            </select>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-neutral-900/50 backdrop-blur-md">
          <button
            onClick={handleSave}
            className="w-full bg-white text-black py-2.5 rounded-xl font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
          >
            {isSaving ? (
              <Check className="w-4 h-4" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {isSaving ? "Published" : "Publish to Storefront"}
          </button>
        </div>
      </div>

      {/* Live Preview Area */}
      <div
        className={`flex-1 p-8 transition-colors duration-500 flex items-center justify-center ${theme === "dark" ? "bg-black" : "bg-neutral-100"}`}
      >
        {/* Preview Frame */}
        <div
          className="w-full max-w-4xl h-[800px] border border-neutral-500/20 rounded-t-3xl shadow-2xl overflow-hidden flex flex-col relative transition-colors duration-500"
          style={{ backgroundColor: theme === "dark" ? "#0a0a0a" : "#ffffff" }}
        >
          {/* Browser Chrome */}
          <div
            className={`h-12 border-b flex items-center px-4 gap-2 transition-colors duration-500 ${theme === "dark" ? "border-neutral-800 bg-neutral-900/50" : "border-neutral-200 bg-neutral-100/50"}`}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div
              className={`mx-auto text-xs px-3 py-1 rounded-md opacity-50 font-medium ${theme === "dark" ? "bg-black text-white" : "bg-white text-black shadow-sm"}`}
            >
              fyndo.co/ninth-note
            </div>
          </div>

          {/* Actual Store Preview Content */}
          <div className="flex-1 overflow-y-auto" style={{ fontFamily }}>
            {/* Hero Section */}
            <div className="h-[400px] w-full flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-neutral-500/10" />
              <div className="relative z-10 text-center p-8">
                <h1
                  className={`text-6xl font-black tracking-tighter mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}
                >
                  NINTH NOTE
                </h1>
                <p
                  className={`text-lg mb-8 max-w-md mx-auto ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  Extrait de Parfum. Olfactory luxury from the void.
                </p>
                <button
                  className="px-8 py-3 rounded-full font-medium text-sm transition-all shadow-lg hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: primaryColor,
                    color: theme === "dark" ? "#000" : "#fff",
                  }}
                >
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Products Grid Preview */}
            <div className="p-12">
              <div className="grid grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <div
                      className={`aspect-square w-full rounded-2xl mb-4 transition-colors ${theme === "dark" ? "bg-neutral-900" : "bg-neutral-100"}`}
                    />
                    <h3
                      className={`font-bold mb-1 ${theme === "dark" ? "text-white" : "text-black"}`}
                    >
                      Product {i}
                    </h3>
                    <p
                      className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}
                    >
                      $185.00
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
