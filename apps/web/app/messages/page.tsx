"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Image as ImageIcon, Tag, Search, Info } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Mock Data
const CONVERSATIONS = [
  {
    id: "1",
    name: "Ninth Note Official",
    lastMessage: "Yes, the new fragrance is available.",
    unread: 2,
    avatar: "N",
  },
  {
    id: "2",
    name: "Element UX Studio",
    lastMessage: "Sent an offer for the poster.",
    unread: 0,
    avatar: "E",
  },
];

const INITIAL_MESSAGES = [
  {
    id: "m1",
    sender: "other",
    text: "Are you open to offers on the Vintage Lamp?",
    time: "10:24 AM",
  },
  {
    id: "m2",
    sender: "me",
    text: "Yes, what were you thinking?",
    time: "10:26 AM",
  },
  {
    id: "m3",
    sender: "other",
    text: "Would you take $120?",
    time: "10:28 AM",
    offer: {
      id: "o1",
      amount: 120,
      status: "pending",
      product: "Vintage Industrial Lamp",
    },
  },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [activeChat, setActiveChat] = useState(CONVERSATIONS[0]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMsg = {
      id: Date.now().toString(),
      sender: "me",
      text: inputValue,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMsg]);
    setInputValue("");
  };

  return (
    <div className="flex h-screen bg-neutral-50 text-neutral-900 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-80 border-r border-neutral-200 bg-white flex flex-col shrink-0">
        <div className="p-6 border-b border-neutral-200">
          <h1 className="text-2xl font-black tracking-tight mb-4">Messages</h1>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-neutral-100 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {CONVERSATIONS.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`p-4 border-b border-neutral-100 cursor-pointer transition-colors flex items-center gap-3 ${activeChat.id === chat.id ? "bg-neutral-50" : "hover:bg-neutral-50/50"}`}
            >
              <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold shrink-0">
                {chat.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-sm truncate">{chat.name}</h3>
                  <span className="text-[10px] font-medium text-neutral-400">
                    10:28 AM
                  </span>
                </div>
                <p className="text-xs text-neutral-500 truncate">
                  {chat.lastMessage}
                </p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col bg-white/50 relative">
        {/* Header */}
        <header className="h-20 border-b border-neutral-200 bg-white flex items-center justify-between px-8 shrink-0 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">
              {activeChat.avatar}
            </div>
            <div>
              <h2 className="font-bold text-lg">{activeChat.name}</h2>
              <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />{" "}
                Active now
              </p>
            </div>
          </div>
          <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
            <Info className="w-5 h-5 text-neutral-400" />
          </button>
        </header>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                layout
                className={`flex flex-col ${msg.sender === "me" ? "items-end" : "items-start"}`}
              >
                <div className="flex items-end gap-2 max-w-[70%]">
                  {msg.sender === "other" && (
                    <div className="w-6 h-6 rounded-full bg-neutral-200 shrink-0 mb-1" />
                  )}

                  <div
                    className={`group relative flex flex-col ${msg.sender === "me" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`px-5 py-3 rounded-2xl text-sm shadow-sm ${msg.sender === "me" ? "bg-neutral-900 text-white rounded-br-sm" : "bg-white border border-neutral-200 text-neutral-900 rounded-bl-sm"}`}
                    >
                      {msg.text}
                    </div>

                    {/* Interactive Offer Card */}
                    {msg.offer && (
                      <div className="mt-2 w-72 bg-white border border-neutral-200 rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3 border-b border-neutral-100 pb-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                            Binding Offer
                          </span>
                          <span className="font-mono text-lg font-black">
                            ${msg.offer.amount}
                          </span>
                        </div>
                        <p className="text-sm font-medium mb-4">
                          {msg.offer.product}
                        </p>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-neutral-900 text-white text-xs font-bold py-2 rounded-lg hover:bg-neutral-800 transition-colors">
                            Accept
                          </button>
                          <button className="flex-1 bg-neutral-100 text-neutral-600 text-xs font-bold py-2 rounded-lg hover:bg-neutral-200 transition-colors">
                            Decline
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-neutral-400 mt-1 px-8">
                  {msg.time}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-neutral-200">
          <div className="max-w-4xl mx-auto flex items-end gap-3 bg-neutral-50 border border-neutral-200 p-2 rounded-3xl focus-within:ring-2 focus-within:ring-black/5 focus-within:border-neutral-300 transition-all">
            <button className="p-2.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200 rounded-full transition-colors shrink-0">
              <ImageIcon className="w-5 h-5" />
            </button>
            <button className="p-2.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200 rounded-full transition-colors shrink-0">
              <Tag className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message or send an offer..."
              className="flex-1 bg-transparent border-none focus:outline-none text-sm py-2.5"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="p-2.5 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center mt-3">
            <span className="text-[10px] text-neutral-400 font-medium">
              Offers are securely processed via Stripe Connect Escrow.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
