import{ NextAuthOptions } from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, TWITTER_CLIENT_ID, TWITTER_CLIENT_SECRET } from '../config';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import clientPromise from './mongoClient';

export const AuthOptions: NextAuthOptions = {
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID || '',
            clientSecret: GOOGLE_CLIENT_SECRET || ''
        }),
        TwitterProvider({
            clientId: TWITTER_CLIENT_ID ||'',
            clientSecret: TWITTER_CLIENT_SECRET || '',
        })
    ],
    adapter: MongoDBAdapter(clientPromise, {
        databaseName: 'gptbot',
        collections: {
            Accounts: 'account',
            Users: 'auth-user'
        }
    }),
}