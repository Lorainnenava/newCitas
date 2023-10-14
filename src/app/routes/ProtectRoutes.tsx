'use client';
import Loading from '@/common/loading/Loading';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import getData from './getData';

/**
 * Función para proteger las rutas
 */
export const ProtectRoutes = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { data: session, status } = useSession({ required: true });
    const router = useRouter();
    const [sessionDeleted, setSessionDeleted] = useState(false);
    const token =
        typeof window !== 'undefined' ? localStorage.getItem('auth') : null;
    const authorization = token ? JSON.parse(token) : null;

    try {
        if (authorization) {
            const data = await getData(authorization);
            console.log(data);
        }

        if (status === 'loading') {
            return <Loading />;
        }

        if (
            (status !== 'authenticated' &&
                status !== 'loading' &&
                !session &&
                !sessionDeleted) ||
            Date.now() < Number(session?.expires) * 1000
        ) {
            console.log('Debes iniciar sesión');
            router.push('/SignIn');
        }
    } catch (error) {
        typeof window !== 'undefined' ? localStorage.clear() : null;
        console.log(error);
        setSessionDeleted(true);
    }

    return <>{children}</>;
};

export default ProtectRoutes;
