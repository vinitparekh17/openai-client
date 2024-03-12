import Protected from '../../components/Basic/Protected';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Settings from '../../components/Settings';
import { CgProfile } from 'react-icons/cg';
import { BsRobot, BsFillShieldLockFill, BsCircleHalf } from 'react-icons/bs';
import {
  FaMoneyBillWave,
  FaQuestionCircle,
  FaFileExport,
  FaTrash,
} from 'react-icons/fa';
import Pricing from '../../components/Settings/Pricing';

export default function SettingsLayout() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const router = useRouter();
  const { menu } = router.query;
  const settings = [
    {
      name: 'Profile',
      icon: <CgProfile className="text-xl sm:text-2xl" />,
    },
    {
      name: 'Privacy',
      icon: <BsFillShieldLockFill className="text-xl sm:text-2xl" />,
    },
    // {
    //   name: 'Theme',
    //   icon: <BsCircleHalf className="text-xl sm:text-2xl" />,
    // },
    // {
    //   name: 'Manage Bots',
    //   icon: <BsRobot className="text-xl sm:text-2xl" />,
    // },
    {
      name: 'Billing',
      icon: <FaMoneyBillWave className="text-xl sm:text-2xl" />,
    },
    {
      name: 'Help',
      icon: <FaQuestionCircle className="text-xl sm:text-2xl" />,
    },
    {
      name: 'Export Data',
      icon: <FaFileExport className="text-xl sm:text-2xl" />,
    },
    {
      name: 'Delete Account',
      icon: <FaTrash className="text-xl sm:text-2xl" />,
    },
  ];

  useEffect(() => {
    if (isMobile === null) {
      setIsMobile(localStorage.getItem('mobile') === 'true');
    }
  }, [setIsMobile, isMobile]);

  if (!isMobile) {
    return (
      <Protected>
        <div className="h-[90svh] flex mt-2 overflow-y-hidden">
          <div className="dark:bg-gray-900 bg-gray-50 h-[90svh-1.5rem] p-3 m-2 rounded-xl">
            {settings.map((item, index) => {
              if (item.name == 'Delete Account') {
                return (
                  <Link
                    key={index}
                    href={`/settings/${item.name.toLowerCase()}`}
                    className={`items-center flex justify-start hover:bg-red-500 w-full dark:hover:bg-red-800 dark:hover:text-gray-200 dark:text-red-600 text-red-700 hover:text-white rounded-lg p-3`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <p className="font-bold">{item.name}</p>
                  </Link>
                );
              } else {
                return (
                  <Link
                    key={index}
                    href={`/settings/${item.name.toLowerCase()}`}
                    className={`items-center flex justify-start hover:bg-gray-200 w-full dark:hover:bg-gray-800 dark:text-gray-200 text-gray-700 rounded-lg p-3`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <p className="font-bold">{item.name}</p>
                  </Link>
                );
              }
            })}
          </div>
          <div className="flex-1 h-[90svh-1.5rem] bg-white dark:bg-gray-900 rounded-xl overflow-y-scroll hiddenscroll p-3 m-2">
            <Settings />
          </div>
        </div>
      </Protected>
    );
  } else {
    return (
      <Protected>
        <div className="mt-6 flex flex-col justify-center items-center">
          {menu == 'menu' ? (
            <div className="w-11/12">
              {settings.map((item, index) => (
                <Link
                  legacyBehavior
                  key={index}
                  href={`/settings/${item.name.toLowerCase()}`}
                >
                  <a className="my-4 flex items-center justify-start hover:bg-gray-100 w-full dark:hover:bg-gray-600 dark:text-gray-200 text-gray-700 rounded-lg p-3">
                    <span className="mr-3">{item.icon}</span>
                    <p className="font-bold">{item.name}</p>
                  </a>
                </Link>
              ))}
            </div>
          ) : menu == 'billing' ? (
            <Pricing />
          ) : (
            <Settings />
          )}
        </div>
      </Protected>
    );
  }
}
