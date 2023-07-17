import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { Dropdown } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentAuthState, AuthSlice } from '../../slices/authSlice';
import { useSession } from 'next-auth/react';
import { HiMoon, HiSun, HiUserCircle, HiCog, HiLogout } from 'react-icons/hi';
import { authSignOut } from '../../utils/auth';
import { signOut } from 'next-auth/react';
import { currentTheme, ThemeSlice } from '../../slices/themeSlice';
import { Playfair } from '../fonts';

export default function Navbar({ setOpen, open }: NavbarProps) {
  const dispatch = useDispatch();
  const { theme } = useSelector(currentTheme);
  const { setTheme } = useNextTheme();
  const { data: session } = useSession();
  const { token, user } = useSelector(CurrentAuthState);

  const handleTheme = (theme: Theme | string) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
    dispatch(ThemeSlice.actions.changeTheme({ theme }));
  };

  useEffect(() => {
    if (user.name === '' || user.name === undefined) {
      dispatch(AuthSlice.actions.getData(token));
    }
  }, [dispatch, user, token]);

  return (
    <nav
      className="z-20 backdrop-filter backdrop-blur-lg bg-gradient-to-r from-teal-600 via-blue-700 to-slate-700
         dark:from-slate-700 dark:to-slate-900 absolute w-full mt-0"
    >
      <div className="mx-auto w-full px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center">
            {open !== undefined && (
              <button
                type="button"
                onClick={() => setOpen!(!open)}
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-teal-700 dark:hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!open && (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
                {open && (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1
                className={`${Playfair.className} sm:ml-12 text-2xl text-white dark:text-gray-200`}
              >
                Omnisive
              </h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="mx-2">
              <div className="hidden sm:block relative w-14 h-8">
                <label
                  htmlFor="toggle"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={`w-14 h-8 bg-teal-300 dark:bg-teal-600 shadow-md rounded-full`}
                  ></div>
                  <div
                    className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                      theme === 'light' ? 'translate-x-full' : ''
                    }`}
                  >
                    {theme === 'light' ? (
                      <HiSun className="text-yellow-500 m-1" />
                    ) : (
                      <HiMoon className="text-gray-500 m-1" />
                    )}
                  </div>
                  <input
                    type="checkbox"
                    id="toggle"
                    name="toggle"
                    className="hidden"
                    onChange={() =>
                      handleTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                  />
                </label>
              </div>
            </div>
            <div className="relative ml-3">
              {session || token ? (
                <Dropdown placement="left-bottom">
                  <Dropdown.Trigger>
                    <button
                      type="button"
                      className="flex rounded-full bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={`/images/m-${user.profile}.webp`}
                        alt="logo"
                        width={300}
                        height={300}
                      />
                    </button>
                  </Dropdown.Trigger>
                  <Dropdown.Menu
                    variant="shadow"
                    css={{ background: 'rgb(17 24 39)' }}
                  >
                    <Dropdown.Item
                      textValue="Profile"
                      title="Profile"
                      icon={<HiUserCircle className="mr-2" />}
                    >
                      <Link href="/profile">
                        <span>Profile</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      textValue="settings"
                      title="Settings"
                      icon={<HiCog className="mr-2" />}
                    >
                      <Link href="/settings">
                        <span>Settings</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      textValue="logout"
                      withDivider
                      color="error"
                      icon={<HiLogout className="mr-2" />}
                    >
                      <button
                        onClick={() => (session ? signOut() : authSignOut())}
                      >
                        Sign out
                      </button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link
                  href={'/login'}
                  className="bg-teal-500 dark:bg-teal-600 shadow-md text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
