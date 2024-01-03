import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth, { NextAuthOptions, Session, SessionStrategy } from 'next-auth';

/**
 * Función para autenticar rutas
 */
const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'text',
                },
            },
            async authorize(credentials) {
                if (credentials?.email && credentials?.password) {
                    const payload = {
                        email: credentials?.email,
                        password: credentials?.password,
                    };
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_BASE_URL}/signIn`,
                        {
                            method: 'POST',
                            body: JSON.stringify(payload),
                            headers: {
                                'Content-type': 'application/json',
                            },
                        }
                    );
                    const user = await res.json();
                    if (res.ok && user) {
                        return user;
                    } else {
                        throw new Error('Error');
                    }
                }
                return null;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/SignIn',
    },
    session: {
        strategy: 'jwt' as SessionStrategy,
        maxAge: 2 * 60 * 60,
    },
    jwt: {
        maxAge: 2 * 60 * 60,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },
        async session({ session, token }) {
            if (session) {
                session.expires = token.exp as Session['expires'];
                session.user = token.user as Session['user'];
                return session;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
