import { createClient } from '@supabase/supabase-js';

// Validate environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

try {
  // Validate URL
  new URL(supabaseUrl);
} catch (error) {
  throw new Error('Invalid Supabase URL format');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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