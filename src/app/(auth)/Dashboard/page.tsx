'use client';

import ProtectRoutes from '@/app/routes/ProtectRoutes';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function User() {
    const { data: session } = useSession();
    const pathName = usePathname();
    useEffect(() => {
        const handleBackButton = (e: PopStateEvent) => {
            if (pathName === '/Dashboard') {
                e.preventDefault();
            }
        };

        window.addEventListener('popstate', handleBackButton);
        return () => window.removeEventListener('popstate', handleBackButton);
    }, [pathName]);

    return (
        <ProtectRoutes>
            <>
                <div>holaaaaaaaa soy protegidaa</div>
                <h1>{session?.user.name}</h1>
            </>
        </ProtectRoutes>
    );
}

export default User;
