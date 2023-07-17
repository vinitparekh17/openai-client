import { NextAuthOptions } from 'next-auth';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET } from '../config';
import GoogleProvider from 'next-auth/providers/google';

export const AuthOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID || '',
      clientSecret: GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account }) {
      console.log(token, account);
      if (account?.access_token) {
        token.accessToken = account.access_token; 
      }
      console.log(token);
      return token;
    },
  }
};
