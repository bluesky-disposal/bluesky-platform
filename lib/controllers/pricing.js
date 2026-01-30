import { getDumpsters, getStartingFromPrice } from "../models/pricing";
import { getZipDetails } from "../models/zip_code";

export async function listDumpsters() {
  return await getDumpsters();
}

export async function getZipPricingContext(zip) {
  const zipData = await getZipDetails(zip);

  if (!zipData) {
    throw new Error("Service not available for this ZIP code");
  }

  return {
    zip: zipData.zip,
    city: zipData.city,
    county: {
      id: zipData.counties.id,
      name: zipData.counties.name,
      state: zipData.counties.state,
    },
    coordinates: {
      lat: zipData.lat,
      lng: zipData.lng,
    },
  };
}

export async function getStartingFromPricing() {
  const startingFrom = await getStartingFromPrice();

  return {
    starting_from: startingFrom,
  };
}
