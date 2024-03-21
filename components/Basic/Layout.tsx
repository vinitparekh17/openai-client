'use client';
import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { currentTheme, ThemeSlice } from '../../slices/themeSlice';
export default function Layout({ children }: { children: ReactElement }) {

  const { theme } = useSelector(currentTheme);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      dispatch(
        ThemeSlice.actions.changeTheme({
          theme: localStorage.getItem('theme') as string,
        })
      );
    }
  }, [theme, dispatch]);

  return (
    <div className={theme}>
      <Toaster position='top-right' />
      <div className="flex flex-col h-[100svh] overflow-hidden bg-gray-200 dark:bg-gray-800">
        <div className="flex flex-col flex-1">{children}</div>
      </div>
    </div>
  );
}
