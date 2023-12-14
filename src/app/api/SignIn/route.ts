import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Función para loguear el usuario
 */
export async function PATCH(request: NextRequest, res: NextResponse) {
    const cookieStore = cookies();
    const dataForm = await request.json();
    try {
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
        return NextResponse.json(data);
    } catch (error) {
        throw error
    }
}
