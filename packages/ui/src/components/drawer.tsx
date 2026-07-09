"use client";

import { motion, AnimatePresence } from "framer-motion";

export function Drawer({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bottom-0 left-0 right-0 z-50 h-[85vh] bg-background/80 backdrop-blur-2xl border-t border-border rounded-t-[2rem] p-6 shadow-2xl"
          >
            <div className="mx-auto w-12 h-1.5 rounded-full bg-muted mb-8" />
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
