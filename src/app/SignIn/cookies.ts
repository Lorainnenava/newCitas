import { cookies } from 'next/headers';

export const myToken = cookies().has('my-token');
