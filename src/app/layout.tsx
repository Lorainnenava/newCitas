import './globals.css';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import Providers from '@/redux/providers';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '@/common/loading/Loading';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToastContainer />
                <Providers>
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </Providers>
            </body>
        </html>
    );
}
