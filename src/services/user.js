import { client, checkError } from './client.js';

const getUser = async () => {
  return client.auth.user();
};

const signInUser = async (email, password) => {
  const { user, error } = await client.auth.signIn({ email, password });

  if (error) throw error;
  console.log(user);
  return user;
};

const signInUser = async (email, password) => {
  const { user, error } = await client.auth.signUp({ email, password });

  if (error) throw error;
  console.log(user);
  return user;
};

const signInUser = async (email, password) => {
  return client.auth.signOut();
};
