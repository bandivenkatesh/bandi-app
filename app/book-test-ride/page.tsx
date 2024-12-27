"use client";

import { useSearchParams } from 'next/navigation';
import { TestRideForm } from '@/components/booking/TestRideForm';

export default function BookTestRidePage() {
  const searchParams = useSearchParams();
  const modelId = searchParams.get('model');

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Book a Test Ride</h1>
        <div className="bg-black/50 border border-[#FF7300]/20 p-6">
          <TestRideForm preselectedModel={modelId || undefined} />
        </div>
      </div>
    </div>
  );
}