'use server';
import { cookies } from 'next/headers';

/**
 * Función para loguear el usuario
 */
export async function PATCH(request: Request, res: Response) {
    const cookieStore = cookies();

    try {
        const dataForm = await request.json();
        const response = await fetch('http://localhost:8000/usuario', {
            method: 'PATCH',
            body: JSON.stringify(dataForm),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response?.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        cookieStore.set({
            name: 'my-token',
            value: data?.token,
            httpOnly: true,
            path: '/',
        });
        return Response.json({ data });
    } catch (error) {
        return Response.json({
            message: error,
            success: false,
        });
    }
}
