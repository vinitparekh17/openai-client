import Link from 'next/link';
import MainSpace from './MainSpace';
import Navbar from './Navbar';
import { HiUsers, HiHome, HiQuestionMarkCircle, HiCog } from 'react-icons/hi';
import { FaRobot } from 'react-icons/fa';

export default function Sidebar({ open, setOpen, children }: SidebarProps) {
  const sideItems: SidebarItem[] = [
    {
      name: 'Home',
      icon: <HiHome className="w-6 h-6" />,
      link: '/',
    },
    {
      name: 'Conversations',
      icon: <HiUsers className="w-6 h-6" />,
      link: '/conversations',
      subItems: [
        {
          name: 'Bot Conversations',
          link: '/conversations/bots',
          icon: <FaRobot className="w-6 h-6" />,
          modes: ["text", "voice"]
        }
      ]
    },
    {
      name: 'About Us',
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
          className={`mt-16 flex flex-col items-start z-10 ${
            open ? '-translate-x-0' : '-translate-x-full'
          } transition-transform transform duration-200 ease-in-out w-fit md:w-44 lg:w-64 space-y-8 bg-gradient-to-b from-teal-600 to-blue-700 dark:from-slate-700 dark:to-slate-900`}
        >
          <div className="mt-5 w-full flex flex-col items-start space-y-5">
            {sideItems.map((item: SidebarItem, i: number) => (
              <Link
                key={i}
                href={item.link}
                legacyBehavior
                className="text-white w-full px-2 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:text-teal-500 hover:bg-teal-100"
              >
                <a className="w-full flex items-center rounded-md px-4 py-2 duration-300 cursor-pointer hover:bg-teal-500 dark:hover:bg-slate-600 text-white">
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
