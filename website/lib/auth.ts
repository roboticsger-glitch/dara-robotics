import { createClient } from "@/lib/supabase/server";

export async function getAdminUser() {
  const supabase = await createClient();
  if (!supabase) return null;
  const { error: claimsError } = await supabase.auth.getClaims();
  if (claimsError) return null;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const allowed = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  if (!allowed || user.email?.toLowerCase() !== allowed) return null;
  return user;
}
