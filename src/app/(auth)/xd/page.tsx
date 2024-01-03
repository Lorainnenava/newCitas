'use client';
import ProtectRoutes from '@/app/routes/ProtectRoutes';
import { Layout } from '../../../common/layout';

function User() {
    return (
        <ProtectRoutes>
            <>
                <Layout />
            </>
        </ProtectRoutes>
    );
}

export default User;
