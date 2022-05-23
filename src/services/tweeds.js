import { client, checkError } from './client.js';
import { getUser } from './user.js';

export async function addItem(item) {
  const user = await getUser();
  console.log(user);

  const data = await client.from('tweeds').insert({
    content: item,
    email: user.email,
  });

  return checkError(data);
}
