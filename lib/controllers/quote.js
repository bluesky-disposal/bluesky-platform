import { calculateQuote } from "@/lib/models/quote";

export async function createQuoteController(body) {
  const {
    zip_code,
    dumpster_size_id,
    dumpster_type_id,
    rental_days,
    estimated_weight_tons,
  } = body;

  if (
    !zip_code ||
    !dumpster_size_id ||
    !dumpster_type_id ||
    rental_days == null ||
    estimated_weight_tons == null
  ) {
    throw new Error("Missing required fields");
  }

  return await calculateQuote({
    zip_code,
    dumpster_size_id,
    dumpster_type_id,
    rental_days,
    estimated_weight_tons,
  });
}
