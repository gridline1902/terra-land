import { createClient } from "@supabase/supabase-js";

const supabaseUrl='https://bhsmtnffavewprbernpc.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
