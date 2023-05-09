import type { ReactElement } from "react";

export default function MainSpace({ children }: { children: ReactElement }) {
    return (
        <main className="absolute w-full">
            <div className='flex h-screen'>
                <div className='w-full mt-16 ml-16 h-[calc(100vh - 4rem)] container'>
                    {children}
                </div>
            </div>
        </main>
    );
}