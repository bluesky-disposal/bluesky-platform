import { createClient } from "@supabase/supabase-js";

export function getUserFromRequest(req) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) throw new Error("Unauthorized");

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { global: { headers: { Authorization: `Bearer ${token}` } } },
  );

  return supabase.auth.getUser().then(({ data }) => {
    if (!data.user) throw new Error("Unauthorized");
    return data.user;
  });
}
