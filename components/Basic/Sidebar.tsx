import Link from 'next/link';
import type { SidebarItem, SidebarProps } from '../../types/siderbar';
import MainSpace from './MainSpace';
import Navbar from './Navbar';
import { HiUsers, HiHome, HiQuestionMarkCircle, HiCog } from 'react-icons/hi';

export default function Sidebar({ open, setOpen, children }: SidebarProps) {
    const sideItems: SidebarItem[] = [
        {
            name: 'Home',
            icon: <HiHome className="w-6 h-6" />,
            link: '/'
        },
        {
            name: 'Conversations',
            icon: <HiUsers className="w-6 h-6" />,
            link: '/conversations'
        },
        {
            name: 'About',
            icon: <HiQuestionMarkCircle className="w-6 h-6" />,
            link: '/about'
        },
        {
            name: 'Settings',
            icon: <HiCog className="w-6 h-6" />,
            link: '/settings'
        }
    ]

    return (
        <div className='h-[100svh]'>
            <Navbar open={open} setOpen={setOpen} />
            <MainSpace>
                {children}
            </MainSpace>
            <aside className="flex h-full">
                <div className={`mt-16 z-10 flex flex-col items-center ${open ?'-translate-x-0' : '-translate-x-full' } delay-75 w-16 z-20 py-8 space-y-8 bg-teal-600 dark:bg-gray-900 dark:border-gray-700`}>
                    {sideItems.map((item: SidebarItem, index: number) => (
                    <Link href={item.link} className="p-1.5 text-white focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:text-teal-500 hover:bg-teal-100">
                        <div className='sr-only'>{item.name}</div>
                        {item.icon}
                    </Link>))
}
                </div>
            </aside>
        </div>
    )
}