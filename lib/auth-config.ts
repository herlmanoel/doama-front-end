import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwtDecode from 'jsonwebtoken'; // Para decodificar o JWT do Quarkus

interface DecodedToken {
  exp: number;
  iat: number;
  iss: string;
  upn: string;
  groups: string[];
}

export const auth: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const response = await fetch('http://localhost:9090/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: credentials?.username,
            password: credentials?.password,
          }),
        });
      
        if (!response.ok) {
          throw new Error('Credenciais inválidas');
        }
      
        const { token } = await response.json();
        const decoded = jwtDecode.decode(token) as DecodedToken;
      
        if (!decoded) {
          throw new Error('Falha ao decodificar o token');
        }
      
        return {
          id: decoded.upn,
          email: credentials?.username || '',
          token,
          groups: decoded.groups,
          role: decoded.groups.includes('admin') ? 'admin' : 'user',
        };
      },      
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.token = (user as any).token;
        token.groups = (user as any).groups;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role || 'user',
          token: token.token || null,
          groups: token.groups || [],
        },
      };
    },
  },
};
