import NextAuth from 'next-auth';
import { User as NextAuthUser } from 'next-auth';

declare module 'next-auth' {
    /**
     * tipeado Session
     */
    export interface Session {
        user: User;
        expires: string;
        accessToken: string;
        error?: string;
        token?: string;
    }
    /**
     * tipeado User
     */
    export interface User extends NextAuthUser {
        name: string;
        email: string;
        token?: string;
    }
}
