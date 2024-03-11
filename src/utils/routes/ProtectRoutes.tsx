'use client';

import { toast } from 'react-toastify';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Loading from '../../common/loading/Loading';

/**
 * Función para proteger las rutas
 */
export const ProtectRoutes = async ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    const router = useRouter();
    const { status } = useSession({ required: true });

    /**
     * useEffect para verificar si el usuario tiene una sesión
     */
    useEffect(() => {
        console.log('object');
        const protecter = async () => {
            try {
                const response = await fetch('/api/getOneSession', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                    },
                });
                if (!response?.ok) {
                    router.push('/SignIn');
                    toast(`Su tiempo de expiración a vencido`, {
                        autoClose: 2000,
                        type: 'error',
                        hideProgressBar: true,
                    });
                }
            } catch (error) {
                throw error;
            }
        };
        protecter();
    }, [status, router]);

    if (status === 'loading') {
        return <Loading />;
    }

    return <>{children}</>;
};

export default ProtectRoutes;
