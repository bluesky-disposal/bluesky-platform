import { supabaseAnon } from "@/lib/supabase";

export async function calculateQuote({
  zip_code,
  dumpster_size_id,
  dumpster_type_id,
  rental_days,
  estimated_weight_tons,
}) {
  // 1️⃣ Get county from ZIP
  const { data: zipData, error: zipError } = await supabaseAnon
    .from("zip_codes")
    .select("county_id")
    .eq("zip_code", zip_code)
    .single();

  if (zipError || !zipData) {
    throw new Error("Service not available in this ZIP code");
  }

  // 2️⃣ Get pricing rule
  const { data: rule, error: ruleError } = await supabaseAnon
    .from("pricing_rules")
    .select("*")
    .eq("county_id", zipData.county_id)
    .eq("dumpster_size_id", dumpster_size_id)
    .eq("dumpster_type_id", dumpster_type_id)
    .single();

  if (ruleError || !rule) {
    throw new Error("Pricing not set for selected dumpster in this area");
  }

  const basePrice = Number(rule.base_price);
  const shippingPrice = Number(rule.shipping_price || 0);
  const includedDays = rule.included_days || 0;
  const extraDayPrice = Number(rule.extra_day_price || 0);
  const includedTons = Number(rule.included_tons || 0);
  const extraTonPrice = Number(rule.extra_ton_price || 0);

  const extraDays = Math.max(0, rental_days - includedDays);
  const extraDaysCost = extraDays * extraDayPrice;

  const extraTons = Math.max(0, estimated_weight_tons - includedTons);
  const extraWeightCost = extraTons * extraTonPrice;

  const total = basePrice + shippingPrice + extraDaysCost + extraWeightCost;

  return {
    base_price: basePrice,
    shipping_fee: shippingPrice,
    included_days: includedDays,
    included_tons: includedTons,
    extra_days_fee: extraDaysCost,
    extra_weight_fee: extraWeightCost,
    total_price: total,
    currency: "USD",
  };
}
