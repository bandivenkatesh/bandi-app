"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  feedback: string;
}

function TestimonialCard({ name, feedback }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      }}
    >
      <Card className="max-w-md bg-gray-800 text-white shadow-lg hover:shadow-[#FF7300]/20 transition-all duration-300 will-change-transform">
        <CardHeader>
          <CardTitle className="text-[#FF7300] animate-glow">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="italic">{feedback}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default TestimonialCard;
