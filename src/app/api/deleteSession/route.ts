import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

/**
 * Función para borrar sesion del usuario
 */
export async function DELETE() {
    const cookieStore = cookies();
    try {
        const token = cookieStore.get('my-token');
        if (token) {
            const response = await fetch(
                `${process.env.BASE_URL}/session/delete`,
                {
                    method: 'DELETE',
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
            return NextResponse.json(data);
        }
    } catch (error) {
        throw error;
    }
}
