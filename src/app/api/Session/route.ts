import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

/**
 * Función para obtener la sesión
 */
export async function GET(request: Request, res: Response) {
    const cookieStore = cookies();
    const token = cookieStore.get('my-token');
    try {
        if (token) {
            const res = await fetch(`${process.env.BASE_URL}/session`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    authorization: token?.value,
                },
            });
            if (!res.ok) {
                cookieStore.delete('my-token');
                throw new Error('La sesión ha expirado');
            }

            const data = await res.json();
            return NextResponse.json(data); 
        }
    } catch (error) {
        return NextResponse.json(error);
    }
}
