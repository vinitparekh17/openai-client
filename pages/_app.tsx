import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import Layout from '../components/Basic/Layout';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <Provider store={store} >
      <SessionProvider session={session}>
        <NextUIProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
        </NextUIProvider>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp;
