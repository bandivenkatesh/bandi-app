"use client";

import { motion } from "framer-motion";

interface TabSelectorProps {
  isSignUp: boolean;
  onToggle: (value: boolean) => void;
}

export function TabSelector({ isSignUp, onToggle }: TabSelectorProps) {
  return (
    <div className="flex border-b border-[#FF7300]/20 mb-8">
      <button
        onClick={() => onToggle(false)}
        className={`flex-1 py-3 font-mono uppercase relative ${
          !isSignUp ? "text-[#FF7300]" : "text-[#FF7300]/50"
        }`}
      >
        Initialize Login
        {!isSignUp && (
          <motion.div
            layoutId="tab-indicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7300]"
            initial={false}
          />
        )}
      </button>
      <button
        onClick={() => onToggle(true)}
        className={`flex-1 py-3 font-mono uppercase relative ${
          isSignUp ? "text-[#FF7300]" : "text-[#FF7300]/50"
        }`}
      >
        New Terminal
        {isSignUp && (
          <motion.div
            layoutId="tab-indicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF7300]"
            initial={false}
          />
        )}
      </button>
    </div>
  );
}