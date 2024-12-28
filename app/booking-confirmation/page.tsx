"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen pt-20 bg-black text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto px-4 py-12 text-center"
      >
        <CheckCircle className="w-16 h-16 text-[#FF7300] mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-gray-400 mb-8">
          Thank you for booking a test ride. We will contact you shortly with further details.
        </p>
        <Link href="/">
          <Button className="bg-[#FF7300] hover:bg-[#FF7300]/90">
            Return Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
