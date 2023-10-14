import axios from 'axios';
import NextAuth, { Session, SessionStrategy } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

/**
 * Función para autenticar rutas
 */
const handler = NextAuth({
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
                    try {
                        const res = await axios.patch(
                            `${process.env.BASE_URL}/usuario`,
                            payload,
                            {
                                headers: {
                                    'Content-type': 'application/json',
                                },
                            }
                        );
                        if (res.data) {
                            return {
                                name: res.data.user.name,
                                email: res.data.user.email,
                                id: res.data.user._id,
                                token: res.data.token,
                            };
                        } else {
                            throw new Error(
                                'Error al iniciar sesión con las credenciales proporcionadas'
                            );
                        }
                    } catch (error) {
                        throw new Error(
                            'Las credenciales proporcionadas no son válidas'
                        );
                    }
                }
                return null;
            },
        }),
    ],
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
    secret: process.env.NEXTAUTH_SECRET,
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
});

export { handler as GET, handler as PATCH, handler as POST };
