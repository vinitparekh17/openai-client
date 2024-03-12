import { NextAuthOptions } from 'next-auth';
import { authSubmit } from '../utils/auth';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET } from '../config';
import GoogleProvider from 'next-auth/providers/google';

let i = 0;
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
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      if (token?.accessToken) {
        if (i === 0) {
          authSubmit('google', {
            token,
            name: token.name,
            email: token.email,
            profile: token.picture,
            expire: account?.expires_at,
          });
          i = 1;
        }
      }
      return token;
    },
  },
};
