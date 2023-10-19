'use client';
import Loading from '@/common/loading/Loading';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import getData from './getData';

/**
 * Función para proteger las rutas
 */
export const ProtectRoutes = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const router = useRouter();
    const [sessionDeleted, setSessionDeleted] = useState(false);
    const { data: session, status } = useSession({ required: true });
    const expiresTime = Date.now() < Number(session?.expires) * 1000;

    /**
     * useEffect para verificar si el usuario tiene una sesión
     */
    useEffect(() => {
        const checkAuthentication = async () => {
            const token = localStorage.getItem('auth');
            try {
                if (token) {
                    if (JSON.parse(token)) {
                        const data = await getData(JSON.parse(token));
                        console.log(data);
                    }
                } else {
                    return null;
                }

                if (
                    (status !== 'authenticated' &&
                        status !== 'loading' &&
                        !session &&
                        !sessionDeleted) ||
                    expiresTime
                ) {
                    router.push('/SignIn');
                    console.log('Debes iniciar sesión');
                }
            } catch (error) {
                console.log(error);
                localStorage.clear();
                setSessionDeleted(true);
            }
        };
        checkAuthentication();
    }, [session, status, router]);

    if (status === 'loading') {
        return <Loading />;
    }

    return <>{children}</>;
};

export default ProtectRoutes;
