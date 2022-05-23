import { client, getUser, checkError } from './client.js';

export async function addItem(item) {
  // const user = await getUser();

  const data = await client.from('tweeds').insert({
    content: item,
  });

  return checkError(data);
}
