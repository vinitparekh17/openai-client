import { NextAuthOptions } from 'next-auth';
import {
    GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
    TWITTER_CLIENT_ID, TWITTER_CLIENT_SECRET
} from '../config';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';

export const AuthOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID || '',
            clientSecret: GOOGLE_CLIENT_SECRET || '',
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        TwitterProvider({
            clientId: TWITTER_CLIENT_ID || '',
            clientSecret: TWITTER_CLIENT_SECRET || '',
            version: '2.0'
        })
    ]
}