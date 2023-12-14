'use client';
import Loading from '@/common/loading/Loading';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

/**
 * Función para proteger las rutas
 */
export const ProtectRoutes = async ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const router = useRouter();
    const { status } = useSession({ required: true });

    /**
     * useEffect para verificar si el usuario tiene una sesión
     */
    useEffect(() => {
        const protecter = async () => {
            try {
                const response = await fetch('/api/Session', {
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
