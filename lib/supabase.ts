import { createClient } from '@supabase/supabase-js';
import { Bike, TestRideBooking, UserProfile } from './supabase-types';

// Validate environment variables
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error('Missing environment variables for Supabase configuration')
  console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  {
    auth: {
      persistSession: false
    }
  }
);

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function submitContactMessage(data: ContactMessage) {
  const { error } = await supabase
    .from('contact_messages')
    .insert([data]);
  
  if (error) throw error;
  return { success: true };
}

// Auth APIs
export const auth = {
  signUp: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  getSession: async () => {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
    return session;
  }
};

// Bikes APIs
export const bikes = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('bikes')
      .select('*');
    if (error) throw error;
    return data as Bike[];
  },

  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('bikes')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data as Bike;
  },

  getAvailable: async (date: string, timeSlot: string) => {
    const { data, error } = await supabase
      .from('bikes')
      .select('*')
      .eq('available', true)
      .not('id', 'in', (
        supabase
          .from('test_ride_bookings')
          .select('bike_id')
          .eq('booking_date', date)
          .eq('time_slot', timeSlot)
          .eq('status', 'confirmed')
      ));
    if (error) throw error;
    return data as Bike[];
  }
};

// Test Ride Booking APIs
export const bookings = {
  create: async (booking: Omit<TestRideBooking, 'id' | 'created_at'>) => {
    const { data, error } = await supabase
      .from('test_ride_bookings')
      .insert([booking])
      .select()
      .single();
    if (error) throw error;
    return data as TestRideBooking;
  },

  getUserBookings: async (userId: string) => {
    const { data, error } = await supabase
      .from('test_ride_bookings')
      .select(`
        *,
        bikes (*)
      `)
      .eq('user_id', userId)
      .order('booking_date', { ascending: true });
    if (error) throw error;
    return data;
  },

  update: async (id: string, updates: Partial<TestRideBooking>) => {
    const { data, error } = await supabase
      .from('test_ride_bookings')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as TestRideBooking;
  }
};

// User Profile APIs
export const profiles = {
  get: async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (error) throw error;
    return data as UserProfile;
  },

  update: async (userId: string, updates: Partial<UserProfile>) => {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();
    if (error) throw error;
    return data as UserProfile;
  },

  uploadAvatar: async (userId: string, file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/avatar.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(fileName, file, { upsert: true });
    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('avatars')
      .getPublicUrl(fileName);

    return profiles.update(userId, { avatar_url: publicUrl });
  }
};
