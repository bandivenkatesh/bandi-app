"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { bikes } from '@/data/bikes';
import { useToast } from '@/hooks/use-toast';

interface TestRideFormProps {
  preselectedModel?: string;
}

export function TestRideForm({ preselectedModel }: TestRideFormProps) {
  const [selectedModel, setSelectedModel] = useState(preselectedModel || '');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Test Ride Scheduled!",
      description: "We'll send you a confirmation email shortly.",
    });

    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-200">Select Model</label>
        <Select
          value={selectedModel}
          onValueChange={setSelectedModel}
          required
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a bike" />
          </SelectTrigger>
          <SelectContent>
            {bikes.map((bike) => (
              <SelectItem key={bike.id} value={bike.id}>
                {bike.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-200">Select Date</label>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#FF7300] hover:bg-[#FF7300]/90"
        disabled={loading}
      >
        {loading ? "Scheduling..." : "Schedule Test Ride"}
      </Button>
    </motion.form>
  );
}