"use client";

import { motion } from 'framer-motion';
import { bikes } from '@/data/bikes';
import { BikeCard } from '@/components/bikes/BikeCard';

export default function ModelsPage() {
  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Our Models</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our range of high-performance motorcycles designed for the most
            demanding riders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>
      </div>
    </div>
  );
}