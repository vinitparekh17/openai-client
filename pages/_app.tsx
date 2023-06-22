import '../styles/globals.css'
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import Layout from '../components/Basic/Layout';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('system')
  const lightTheme = createTheme({ type: 'light' })
  const darkTheme = createTheme({ type: 'dark' })
  useEffect(() => {
    let selectedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (selectedTheme && currentTheme !== selectedTheme) {
      setCurrentTheme(localStorage.getItem('theme') as 'light' | 'dark')
    }
  }, [setCurrentTheme, currentTheme])

  useEffect(() => {
    let arr = [/iPhone|Android/i.test(navigator.userAgent), window.matchMedia("only screen and (max-width: 760px)").matches, 'ontouchstart' in document.documentElement];
    arr.filter((item: boolean) => item).length >= 2 ? localStorage.setItem('mobile', 'true') : localStorage.setItem('mobile', 'false');
  }, [])

  return (
    <Provider store={store} >
      <SessionProvider session={session}>
        <NextThemeProvider
          defaultTheme={currentTheme}
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className
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
  )
}

export default MyApp;
