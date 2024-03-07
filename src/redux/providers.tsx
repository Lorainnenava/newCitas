'use client';

import { userStore } from './store';
import { Provider } from 'react-redux';
import { NextAuthProvider } from '@/utils/authProvider/providers';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={userStore}>
            <NextAuthProvider>{children}</NextAuthProvider>
        </Provider>
    );
}

export default Providers;
