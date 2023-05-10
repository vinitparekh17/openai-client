import Link from 'next/link';
import type { PropWithChildren } from '../../types/siderbar';
import MainSpace from './MainSpace';
import Slider from './Slider';

export default function Sidebar({children, open}: PropWithChildren) {
    return (
        <>
            <MainSpace>
                {children}
            </MainSpace>
            <aside className="flex h-[100dvh - 4rem]">
                <div className="mt-16 flex flex-col items-center w-16 z-10 h-[calc(100dvh - 4rem)] py-8 space-y-8 bg-teal-600 dark:bg-gray-900 dark:border-gray-700">
                    <Link href="/" className="p-1.5 text-white focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:text-teal-500 hover:bg-teal-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </div>
                <Slider open={open} />
            </aside>
        </>
    )
}