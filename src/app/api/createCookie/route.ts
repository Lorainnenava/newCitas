'use server';
import { cookies } from 'next/headers';

/**
 * Función para crear una cookie
 */
export async function handler(token?: string) {
    const cookieStore = cookies();
    try {
        if (token) {
            cookieStore.set({
                name: 'my-token',
                value: token,
                httpOnly: true,
                path: '/',
            });
            return true;
        }
    } catch (error) {
        throw error;
    }
}
