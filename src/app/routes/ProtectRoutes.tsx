'use client';
import Loading from '@/common/loading/Loading';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

/**
 * Función para proteger las rutas
 */
export const ProtectRoutes = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const router = useRouter();
    const [mySession, setMySession] = useState<any>();
    const [sessionDeleted, setSessionDeleted] = useState(false);
    const { data: session, status } = useSession({
        required: true,
    });

    /**
     * useEffect para verificar si el usuario tiene una sesión
     */
    useEffect(() => {
        const protecter = async () => {
            try {
                await fetch('/api/Session', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                    },
                })
                    .then((data) => data.json())
                    .then((data) => {
                        setMySession(data);
                    })
                    .catch((error) => {
                        if (
                            (status !== 'authenticated' &&
                                status !== 'loading' &&
                                !session &&
                                !sessionDeleted) ||
                            !mySession?.token
                        ) {
                            console.log('Debes iniciar sesión');
                            router.replace('/SignIn');
                        }
                    });
            } catch (error) {
                setSessionDeleted(true);
            }
        };
        protecter();
    }, [session, status, router]);

    if (status === 'loading') {
        return <Loading />;
    }

    return <>{children}</>;
};

export default ProtectRoutes;
