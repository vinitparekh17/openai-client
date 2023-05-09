"use client";
import { ReactElement, use, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AuthSlice, CurrentAuthState } from "../../slices/authSlice";
import { currentTheme, ThemeSlice } from "../../slices/themeSlice";
export default function Layout({ children }: { children: ReactElement }) {
    const { theme } = useSelector(currentTheme);
    const { token } = useSelector(CurrentAuthState);
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem('theme')) {
            dispatch(ThemeSlice.actions.changeTheme({ theme: localStorage.getItem('theme') as string }));
        }
    }, [theme])

    useEffect(() => {
        if (!token) {
            if (localStorage.getItem('token')) {
                dispatch(AuthSlice.actions.addToken({ token: localStorage.getItem('token') as string }))
            }
        }
    }, [token])
    return (
        <div className={theme}>
            <div className="flex flex-col min-h-screen bg-gray-200 dark:bg-gray-800">
                <div className="flex flex-col flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
}