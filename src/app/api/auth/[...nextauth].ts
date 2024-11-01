import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Account, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

interface CustomUser extends Omit<AdapterUser, 'emailVerified'> {
  accessToken?: string;
  emailVerified?: Date | null;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "seuemail@exemplo.com" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: '1', name: 'User', email: 'user@example.com' };
        if (credentials?.email === 'admin' && credentials?.password === 'admin') {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      user,
      account,
      profile,
      trigger,
      isNewUser,
    }: {
      token: JWT;
      user?: User | AdapterUser | CustomUser;
      account?: Account | null;
      profile?: Profile;
      trigger?: "signIn" | "signUp" | "update";
      isNewUser?: boolean;
    }) {
      if (user) {
        token.id = user.id;
        token.accessToken = (user as CustomUser).accessToken;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
