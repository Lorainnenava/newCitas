'use client';
import { Provider } from 'react-redux';
import { userStore } from './store';
import { NextAuthProvider } from '@/context/providers';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={userStore}>
            <NextAuthProvider>{children}</NextAuthProvider>
        </Provider>
    );
}

export default Providers;
