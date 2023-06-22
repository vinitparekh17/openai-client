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
            name: 'Chats',
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
                <MainSpace open={open} setOpen={setOpen}>
                    {children}
                </MainSpace>
            <aside className="flex h-full">
                <div className={`mt-16 z-10 flex flex-col gap-4 items-start ${open ? '-translate-x-0' : '-translate-x-full'} transition-transform transform duration-200 ease-in-out w-48 z-20 py-8 space-y-8 bg-gradient-to-b from-teal-600 to-blue-700 dark:from-slate-700 dark:to-slate-900`}>
                    {sideItems.map((item: SidebarItem, i: number) => (
                        <Link key={i} href={item.link} legacyBehavior className="p-1.5 text-white focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:text-teal-500 hover:bg-teal-100">
                            <a className="ml-2 flex items-center rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-teal-500 dark:hover:bg-slate-600 text-white">
                                {item.icon}
                                <span className="text-[15px] ml-4 text-gray-200 font-bold">{item.name}</span>
                            </a>
                        </Link>))
                    }
                </div>
            </aside>
        </div>
    )
}