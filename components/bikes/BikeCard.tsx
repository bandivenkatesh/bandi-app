"use client";

import { BikeModel } from '@/types/bike';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface BikeCardProps {
  bike: BikeModel;
}

export function BikeCard({ bike }: BikeCardProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-black/50 border border-[#FF7300]/20 group"
    >
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={bike.image}
          alt={bike.name}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{bike.name}</h3>
          <p className="text-[#FF7300] font-mono">
            Starting at ${bike.price.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          {Object.entries(bike.specs).map(([key, value]) => (
            <div key={key} className="text-gray-300">
              <span className="text-[#FF7300]/70 uppercase font-mono">{key}: </span>
              {value}
            </div>
          ))}
        </div>
        <p className="text-gray-400">{bike.description}</p>
        <div className="flex gap-2">
          <Button
            onClick={() => router.push(`/models/${bike.id}`)}
            className="flex-1 bg-[#FF7300] hover:bg-[#FF7300]/90"
          >
            View Details
          </Button>
          <Button
            onClick={() => router.push(`/book-test-ride?model=${bike.id}`)}
            variant="outline"
            className="flex-1 border-[#FF7300] text-[#FF7300] hover:bg-[#FF7300] hover:text-white"
          >
            Book Test Ride
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}