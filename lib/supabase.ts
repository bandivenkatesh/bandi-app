import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
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