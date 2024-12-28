import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

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