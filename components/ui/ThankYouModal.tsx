"use client";

import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ 
                type: "spring",
                duration: 0.5,
                bounce: 0.3
              }}
              className="pointer-events-auto"
            >
              <Card className="relative w-[90vw] max-w-md mx-4 bg-gray-800/95 border-gray-700 shadow-xl">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 text-gray-400 hover:text-white hover:bg-gray-700"
                  onClick={onClose}
                >
                  <X className="h-4 w-4" />
                </Button>
                
                <CardHeader className="pt-8 pb-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      delay: 0.1,
                      duration: 0.7,
                      bounce: 0.5
                    }}
                    className="flex justify-center mb-4"
                  >
                    <CheckCircle2 className="h-12 w-12 text-[#FF7300]" />
                  </motion.div>
                  <CardTitle className="text-center">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl text-[#FF7300]"
                    >
                      Thank You!
                    </motion.span>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white text-center"
                  >
                    Your message has been sent successfully. We appreciate your feedback and will get back to you soon!
                  </motion.p>
                </CardContent>

                <CardFooter className="flex justify-center pb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      className="bg-[#FF7300] hover:bg-[#FF7300]/90 min-w-[100px]"
                      onClick={onClose}
                      asChild
                    >
                      <Link href="/book-test-ride">
                        Book Now
                      </Link>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
