import { NextAuthOptions } from 'next-auth';
import { GoogleAuth } from '../utils/googleAuth';
import GoogleProvider from 'next-auth/providers/google';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET } = process.env;

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

  // callbacks
};
