import { cookies } from 'next/headers';

/**
 * Función para obtener la sesión
 */
export async function GET(request: Request, res: Response) {
    const cookieStore = cookies();
    const token = cookieStore.get('my-token');
    try {
        if (token) {
            const res = await fetch(
                `${process.env.BASE_URL}/usuario/userSession`,
                {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        authorization: token?.value,
                    },
                }
            );
            if (!res.ok) {
                cookieStore.delete('my-token');
                throw new Error('La sesión ha expirado');
            }

            const data = await res.json();
            return Response.json({ data });
        }
    } catch (error) {
        return Response.json({
            message: error,
        });
    }
}
