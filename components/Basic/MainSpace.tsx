import type { ReactElement } from "react";

export default function MainSpace({ children }: { children: ReactElement }) {
    return (
        <main className="absolute w-full">
            <div className='flex h-[100svh]'>
                <div className='w-full mt-16 ml-16 h-[calc(100svh - 4rem)] container'>
                    {children}
                </div>
            </div>
        </main>
    );
}