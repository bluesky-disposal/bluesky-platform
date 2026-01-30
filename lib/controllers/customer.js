import {
  getCustomerByUserId,
  updateCustomerProfile,
  createCustomerAddress,
  getCustomerAddresses,
} from "@/lib/models/customer";

export async function getProfileController(user) {
  return await getCustomerByUserId(user.id);
}

export async function updateProfileController(user, body) {
  const allowedFields = ["first_name", "last_name", "phone", "company_name"];
  const updates = Object.fromEntries(
    Object.entries(body).filter(([key]) => allowedFields.includes(key)),
  );

  return await updateCustomerProfile(user.id, updates);
}

export async function addAddressController(user, body) {
  const customer = await getCustomerByUserId(user.id);

  return await createCustomerAddress(customer.id, {
    address_line1: body.address_line1,
    city: body.city,
    state: body.state,
    zip: body.zip,
    is_default: body.is_default || false,
  });
}

export async function listAddressesController(user) {
  const customer = await getCustomerByUserId(user.id);
  return await getCustomerAddresses(customer.id);
}
