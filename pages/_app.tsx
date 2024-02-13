import '../styles/globals.css';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { NEXT_PUBLIC_STRIPE_ID } from '../config';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Layout from '../components/Basic/Layout';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const stripePromise = loadStripe('pk_test_51NOQGJSEG5Ae70mx2WtgBR63fsDuvbJBlLwrfjQq1CnZegDA6XR2751CTp3rrd4CUSsRsiyTimBDV4lAsdHXBxSG00ni0dOxHD  ');
  const [currentTheme, setCurrentTheme] = useState<Theme>('system');
  const lightTheme = createTheme({ type: 'light' });
  const darkTheme = createTheme({ type: 'dark' });
  useEffect(() => {
    let selectedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (selectedTheme && currentTheme !== selectedTheme) {
      setCurrentTheme(localStorage.getItem('theme') as 'light' | 'dark');
    }
  }, [setCurrentTheme, currentTheme]);

  useEffect(() => {
    let arr = [
      /iPhone|Android/i.test(navigator.userAgent),
      window.matchMedia('only screen and (max-width: 760px)').matches,
      'ontouchstart' in document.documentElement,
    ];
    arr.filter((item: boolean) => item).length >= 2
      ? localStorage.setItem('mobile', 'true')
      : localStorage.setItem('mobile', 'false');
  }, []);

  return (
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <SessionProvider session={session}>
          <NextThemeProvider
            defaultTheme={currentTheme}
            attribute="class"
            value={{
              light: lightTheme.className,
              dark: darkTheme.className,
            }}
          >
            <NextUIProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </NextUIProvider>
          </NextThemeProvider>
        </SessionProvider>
      </Provider>
    </Elements>
  );
}

export default MyApp;
