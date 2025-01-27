"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, Send } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center justify-center overflow-hidden py-24">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            style={{ 
              y: "-10%",
              willChange: "transform"
            }}
            className="w-full h-[120%] object-cover transform-gpu"
          >
            <Image
              src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80"
              alt="Superbike Hero"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The New Generation of
            <motion.span 
              className="text-[#FF7300] block animate-float"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Superbike Experience
            </motion.span>
          </motion.h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the thrill of riding the most advanced superbikes with our seamless booking platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="gradient"
              className="relative"
            >
              Explore Models
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/book-test-ride">
              <Button
                size="lg"
                variant="outline"
                className="border-[#FF7300] text-[#FF7300] hover:bg-[#FF7300] hover:text-white"
              >
                Book a Test Ride
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}