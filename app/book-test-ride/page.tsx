"use client";

import { useSearchParams } from 'next/navigation';
import { TestRideForm } from '@/components/booking/TestRideForm';
import { motion } from 'framer-motion';

export default function BookTestRidePage() {
  const searchParams = useSearchParams();
  const modelId = searchParams.get('model');

  return (
    <div className="min-h-screen pt-20 bg-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Book a Test Ride</h1>
        <p className="text-gray-400 mb-8">Schedule your test ride today and experience the thrill of our superbikes.</p>
        <div className="bg-gray-900/50 border border-[#FF7300]/20 p-6 rounded-lg shadow-xl">
          <TestRideForm preselectedModel={modelId || undefined} />
        </div>
      </motion.div>
    </div>
  );
}