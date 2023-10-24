import NextAuth, { NextAuthOptions, Session, SessionStrategy } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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
                    const res = await fetch(`${process.env.BASE_URL}/usuario`, {
                        method: 'PATCH',
                        body: JSON.stringify(payload),
                        headers: {
                            'Content-type': 'application/json',
                        },
                    });

                    const user = await res.json();
                    if (res.ok && user) {
                        return {
                            name: user.user.name,
                            email: user.user.email,
                            id: user.user._id,
                            token: user.token,
                        };
                    } else {
                        throw new Error(user.message);
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
        maxAge: 30,
    },
    jwt: {
        maxAge: 30,
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

export { handler as GET, handler as PATCH, handler as POST };
