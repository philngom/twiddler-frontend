import { client, checkError } from './client.js';
import { getUser } from './user.js';

export async function addItem(item) {
  const user = await getUser();

  const data = await client.from('tweeds').insert({
    content: item,
    email: user.email,
  });

  return checkError(data);
}

export async function fetchAllTweeds() {
  const data = await client.from('tweeds').select();

  return checkError(data);
}
