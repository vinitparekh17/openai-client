import Link from 'next/link';
import MainSpace from './MainSpace';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { CurrentAuthState } from '../../slices/authSlice';
import { useSession } from 'next-auth/react';
import { RiKey2Fill } from "react-icons/ri";
import { HiUsers, HiHome, HiQuestionMarkCircle, HiCog } from 'react-icons/hi';
import { FaRobot } from 'react-icons/fa';
import NavProfile from './NavProfile';

export default function Sidebar({ open, setOpen, children }: SidebarProps) {
  const sideItems: SidebarItem[] = [
    {
      name: 'Home',
      icon: <HiHome className="w-6 h-6 mr-2" />,
      link: '/',
    },
    {
      name: 'Conversations',
      icon: <HiUsers className="w-6 h-6 mr-2" />,
      link: '/conversations',
      subItems: [
        {
          name: 'Bot Conversations',
          link: '/conversations/bots',
          icon: <FaRobot className="w-6 h-6 mr-2" />,
          modes: ['text', 'voice'],
        },
      ],
    },
    {
      name: 'About Us',
      icon: <HiQuestionMarkCircle className="w-6 h-6 mr-2" />,
      link: '/about',
    },
    {
      name: 'Features',
      icon: <RiKey2Fill className="w-6 h-6 mr-2" />,
      link: '/features',  
    },
    {
      name: 'Settings',
      icon: <HiCog className="w-6 h-6 mr-2" />,
      link: '/settings/profile',
    },
  ];


  const { data: session } = useSession();
  const { token, user } = useSelector(CurrentAuthState);

  return (
    <div className="h-[100svh]">
      <Navbar open={open} setOpen={setOpen} />
      <MainSpace open={open} setOpen={setOpen}>
        {children}
      </MainSpace>
      <aside className="flex h-full">
        <div
          className={`mt-16 flex flex-col flex-1 fixed left-0 h-full px-2 z-10 ${open ? '-translate-x-0' : '-translate-x-full'
            } transition-transform transform duration-200 ease-in-out w-64 bg-gradient-to-b from-teal-600 to-blue-700 dark:from-slate-700 dark:to-slate-900`}
        >

          <ul className="mt-6 mb-auto">
            {sideItems.map((item: SidebarItem, i: number) => (
              <li
                key={i}
                className="py-2 text-white w-full px-2 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:text-teal-700 hover:bg-teal-100"
              >
                <Link href={item.link} legacyBehavior>
                  <a className="flex items-center px-4">
                    {item.icon}
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-20">
          <NavProfile session={session} user={user} token={token} />
          </div>
        </div>
      </aside>
    </div>
  );
}
