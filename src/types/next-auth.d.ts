import NextAuth from "next-auth";
import { User as NextAuthUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      token?: any
    };
    accessToken: string;
    error?: string
    token?: any

  }
  interface User extends NextAuthUser {
    token?: string;
    name: string;
    email: string;
  }
}
