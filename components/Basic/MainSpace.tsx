import type { ReactElement } from "react";

export default function MainSpace({ children, open, setOpen }: { children: ReactElement, open: boolean, setOpen: Function }) {
    return (
        <main onClick={() => open && setOpen(false)} className={`absolute ${open ? 'blur-sm' : ''} transition-all duration-300 ease-in-out w-full h-full`}>
            <div className='flex h-[100svh] max-h-[100svh]'>
                <div className='mt-16 overflow-y-scroll hiddenscroll h-[calc(100svh - 4rem)] max-h-[calc(100svh - 4rem)] w-screen'>
                    {children}
                </div>
            </div>
        </main>
    );
}