export interface Bike {
  id: string;
  name: string;
  description: string;
  image_url: string;
  price_per_day: number;
  available: boolean;
  specifications: {
    engine: string;
    power: string;
    torque: string;
    weight: string;
  };
}

export interface TestRideBooking {
  id?: string;
  user_id: string;
  bike_id: string;
  booking_date: string;
  time_slot: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  phone_number: string;
  license_number: string;
  avatar_url?: string;
}
