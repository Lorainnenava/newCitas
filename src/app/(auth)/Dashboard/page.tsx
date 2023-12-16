'use client';
import { useSession } from 'next-auth/react';
import ProtectRoutes from '@/app/routes/ProtectRoutes';

function User() {
    const { data: session } = useSession();


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
