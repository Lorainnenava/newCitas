'use server';
import { cookies } from 'next/headers';

/**
 * Función para borrar sesion del usuario
 */
export async function POST() {
    const cookieStore = cookies();
    try {
        const token = cookieStore.get('my-token');
        if (token) {
            const response = await fetch(
                `${process.env.BASE_URL}/usuario/deleteSession`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: token.value,
                    },
                }
            );
            if (!response?.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            cookieStore.delete('my-token');
            return Response.json({ data });
        }
    } catch (error) {
        return Response.json({
            message: error,
            success: false,
        });
    }
}
