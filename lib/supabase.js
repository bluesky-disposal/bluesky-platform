import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) throw new Error("SUPABASE_URL missing");
if (!anonKey) throw new Error("SUPABASE_ANON_KEY missing");
if (!serviceRoleKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY missing");

export const supabaseAnon = createClient(supabaseUrl, anonKey);

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
