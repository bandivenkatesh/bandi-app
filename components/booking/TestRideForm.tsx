"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { bookings } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

interface TestRideFormProps {
  preselectedModel?: string;
}

export function TestRideForm({ preselectedModel }: TestRideFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData(e.currentTarget);
      const booking = {
        user_id: 'temp-user-id', // Replace with actual user ID from auth
        bike_id: formData.get('bikeModel') as string,
        booking_date: formData.get('date') as string,
        time_slot: formData.get('timeSlot') as string,
        status: 'pending' as const
      };

      await bookings.create(booking);
      router.push('/booking-confirmation');
    } catch (err) {
      setError('Failed to book test ride. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-200">
          Select Bike Model
        </label>
        <select
          name="bikeModel"
          defaultValue={preselectedModel}
          className="mt-1 block w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          required
        >
          <option value="">Select a model</option>
          <option value="model1">Model 1</option>
          <option value="model2">Model 2</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200">
          Select Date
        </label>
        <input
          type="date"
          name="date"
          className="mt-1 block w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200">
          Select Time Slot
        </label>
        <select
          name="timeSlot"
          className="mt-1 block w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600"
          required
        >
          <option value="">Select a time slot</option>
          <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
          <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
        </select>
      </div>

      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      <Button
        type="submit"
        className="w-full bg-[#FF7300] hover:bg-[#FF7300]/90"
        disabled={loading}
      >
        {loading ? 'Booking...' : 'Book Test Ride'}
      </Button>
    </form>
  );
}