import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { currentTheme } from "../../slices/themeSlice";
export default function Layout({ children }: { children: ReactElement }) {
    const {theme} = useSelector(currentTheme);
    return (
        <div className={theme}>
            <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800">
                <div className="flex flex-col flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
}