import { client, checkError } from './client.js';

export const getUser = async () => {
  return client.auth.user();
};

export const signIn = async (email, password) => {
  const { user, error } = await client.auth.signIn({ email, password });

  if (error) throw error;
  console.log(user);
  return user;
};

export const signUp = async (email, password) => {
  const { user, error } = await client.auth.signUp({ email, password });

  if (error) throw error;
  console.log(user);
  return user;
};

export const signOut = async (email, password) => {
  return client.auth.signOut();
};
