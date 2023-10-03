import axios from "axios";
import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "text",
        },
      },
      async authorize(credentials): Promise<any> {
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
                  "Content-type": "application/json",
                },
              }
            );
            if (res.data) {
              return {
                name: res.data.user.name,
                email: res.data.user.email,
                id: res.data.user._id as string,
              };
            } else {
              throw new Error(
                "Error al iniciar sesión con las credenciales proporcionadas"
              );
            }
          } catch (error) {
            throw new Error("Las credenciales proporcionadas no son válidas");
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account}) {
      return token;
    },
    async session({ session, token }): Promise<any> {
      console.log(session)
      if (session) {
        return session;
      } else {
        return {};
      }
    },
  },
  pages: {
    signIn: "SignIn",
  },
  session: {
    strategy: "jwt",
  },
  secret: "secretKey",
});

export { handler as GET, handler as PATCH, handler as POST };
