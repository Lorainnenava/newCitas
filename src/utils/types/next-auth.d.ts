import NextAuth from 'next-auth';
import { User as NextAuthUser } from 'next-auth';

declare module 'next-auth' {
    /**
     * Interfaz de Session en next auth
     */
    export interface Session {
        user: User;
        expires: string;
        accessToken: string;
        error?: string;
        token?: string;
    }

    /**
     * Interfaz de user en next auth
     */
    export interface User extends NextAuthUser {
        name: string;
        email: string;
        token?: string;
    }
}
