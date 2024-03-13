'use server';

import { cookies } from 'next/headers';

/**
 * Función para obtener la sesión
 */
export async function handler() {
    const cookieStore = cookies();
    const token = cookieStore.get('my-token')?.value;

    if (token) {
        const response = await fetch(`http://localhost:5000/session`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                authorization: 'Bearer ' + token,
            },
        });

        console.log(response, 'eeeee');
        if (response.status === 401) {
            cookieStore.delete('my-token');
        }

        const data = await response.json();

        return Response.json(data);
    }
}
