"use client";

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  name: string;
  feedback: string;
}

interface ScrollableTestimonialsProps {
  testimonials: Testimonial[];
}

export function ScrollableTestimonials({ testimonials }: ScrollableTestimonialsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showViewMore, setShowViewMore] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: scrollContainerRef.current.scrollLeft + 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative pr-16"> {/* Added right padding */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="flex-none w-96"
            style={{ scrollSnapAlign: 'start' }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
      
      {showViewMore && (
        <div className="absolute -right-8 top-0 bottom-0 flex items-center"> {/* Adjusted position */}
          <div className="h-full w-32 bg-gradient-to-l from-black to-transparent" />
          <Button
            className="absolute -right-8 bg-[#FF7300] hover:bg-[#FF7300]/90"
            onClick={handleScroll}
          >
            View More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
