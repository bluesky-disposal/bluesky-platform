import { supabaseAnon } from "../supabase";
import { createUserRow, getUserById } from "../models/user";

export async function register({ email, password }) {
  const { data, error } = await supabaseAnon.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  if (!data?.user) throw new Error("User creation failed");

  await createUserRow({
    id: data.user.id,
    email: data.user.email,
  });

  return data.user;
}

export async function login({ email, password }) {
  const { data, error } = await supabaseAnon.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}

export async function me(accessToken) {
  const { data, error } = await supabaseAnon.auth.getUser(accessToken);
  if (error) throw error;

  return await getUserById(data.user.id);
}
