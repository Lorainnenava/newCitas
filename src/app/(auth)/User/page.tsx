'use client';

import ProtectRoutes from '@/app/routes/ProtectRoutes';
import { useSession } from 'next-auth/react';

function User() {
    const { data: session, status } = useSession();

    if (status === 'authenticated' && session) {
        return (
            <ProtectRoutes>
                <>
                    <div>holaaaaaaaa soy protegidaa</div>
                    <h1>{session.user.name}</h1>
                </>
            </ProtectRoutes>
        );
    }
}
export default User;
