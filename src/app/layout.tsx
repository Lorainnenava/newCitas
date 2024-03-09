import "./globals.css";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../redux/providers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ToastContainer />
                <Providers>
                    <Suspense>{children}</Suspense>
                </Providers>
            </body>
        </html>
    );
}
