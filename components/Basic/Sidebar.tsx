import Link from 'next/link';
import MainSpace from './MainSpace';
import Navbar from './Navbar';
import { HiUsers, HiHome, HiQuestionMarkCircle, HiCog } from 'react-icons/hi';

export default function Sidebar({ open, setOpen, children }: SidebarProps) {
  const sideItems: SidebarItem[] = [
    {
      name: 'Home',
      icon: <HiHome className="w-6 h-6" />,
      link: '/',
    },
    {
      name: 'Chats',
      icon: <HiUsers className="w-6 h-6" />,
      link: '/conversations',
    },
    {
      name: 'About',
      icon: <HiQuestionMarkCircle className="w-6 h-6" />,
      link: '/about',
    },
    {
      name: 'Settings',
      icon: <HiCog className="w-6 h-6" />,
      link: '/settings/profile',
    },
  ];

  return (
    <div className="h-[100svh]">
      <Navbar open={open} setOpen={setOpen} />
      <MainSpace open={open} setOpen={setOpen}>
        {children}
      </MainSpace>
      <aside className="flex h-full">
        <div
          className={`mt-16 flex flex-col items-center z-10 ${
            open ? '-translate-x-0' : '-translate-x-full'
          } transition-transform transform duration-200 ease-in-out w-fit sm:w-44 space-y-8 bg-gradient-to-b from-teal-600 to-blue-700 dark:from-slate-700 dark:to-slate-900`}
        >
          <div className="mt-5 flex flex-col items-start space-y-5">
            {sideItems.map((item: SidebarItem, i: number) => (
              <Link
                key={i}
                href={item.link}
                legacyBehavior
                className="text-white focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:text-teal-500 hover:bg-teal-100"
              >
                <a className="mx-2 flex items-center rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-teal-500 dark:hover:bg-slate-600 text-white">
                  {item.icon}
                  <span className="sm:text-md text-sm ml-4 text-gray-200 font-bold">
                    {item.name}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
