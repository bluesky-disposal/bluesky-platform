import { supabaseAdmin } from "@/lib/supabase";

export async function getCustomerByUserId(userId) {
  const { data, error } = await supabaseAdmin
    .from("customers")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) throw new Error("Customer not found");
  return data;
}

export async function updateCustomerProfile(userId, updates) {
  const { data, error } = await supabaseAdmin
    .from("customers")
    .update(updates)
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw new Error("Failed to update profile");
  return data;
}

export async function createCustomerAddress(customerId, address) {
  if (address.is_default) {
    await supabaseAdmin
      .from("customer_addresses")
      .update({ is_default: false })
      .eq("customer_id", customerId);
  }

  const { data, error } = await supabaseAdmin
    .from("customer_addresses")
    .insert({ ...address, customer_id: customerId })
    .select()
    .single();

  if (error) throw new Error("Failed to add address");
  return data;
}

export async function getCustomerAddresses(customerId) {
  const { data, error } = await supabaseAdmin
    .from("customer_addresses")
    .select("*")
    .eq("customer_id", customerId)
    .order("created_at", { ascending: false });

  if (error) throw new Error("Failed to fetch addresses");
  return data;
}
