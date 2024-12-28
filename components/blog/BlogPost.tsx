"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogPostProps {
  title: string;
  content: string;
  date: string;
  imageUrl: string;
  author: string;
}

const BlogPost = ({ title, content, date, imageUrl, author }: BlogPostProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mb-8"
    >
      <Card className="overflow-hidden bg-gray-800/50 border-gray-700">
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm">{formatDate(date)}</span>
            <span className="text-[#FF7300] text-sm">{author}</span>
          </div>
          <CardTitle className="text-2xl text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogPost;
