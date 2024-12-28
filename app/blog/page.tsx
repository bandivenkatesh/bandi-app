"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Lazy load blog posts after initial render
const BlogPost = dynamic(() => import('@/components/blog/BlogPost'), {
  loading: () => <div className="animate-pulse bg-gray-800 h-96 rounded-lg"></div>
});

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Superbikes",
    content: "Explore the fascinating journey of superbikes from their inception to modern-day technological marvels...",
    date: "2024-01-15",
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80",
    author: "John Rider"
  },
  {
    id: 2,
    title: "Mastering the Track: Pro Tips",
    content: "Learn essential techniques and strategies from professional riders to improve your track performance...",
    date: "2024-01-20",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80",
    author: "Sarah Speed"
  },
  // Add more blog posts as needed
];

export default function BlogPage() {
  const [posts] = useState(blogPosts);

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Latest from Our Blog
        </motion.h1>
        <div className="space-y-8">
          {posts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
