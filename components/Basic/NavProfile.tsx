import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useCallback } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { currentTheme, ThemeSlice } from '../../slices/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSlice } from '../../slices/authSlice';
import { HiUserCircle, HiLogout, HiSun, HiMoon, HiOutlineSparkles } from 'react-icons/hi';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
import { Dropdown, Switch } from '@nextui-org/react';
import { authSignOut } from '../../utils/auth';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function NavProfile({
  session,
  user,
}: {
  session: any;
  token: string;
  user: any;
}) {
  const dispatch = useDispatch();
  const { theme } = useSelector(currentTheme);
  const { setTheme } = useNextTheme();

  const handleTheme = useCallback(
    (switchState: boolean) => {
      if (switchState) {
        localStorage.setItem('theme', 'light');
        setTheme('light');
        dispatch(ThemeSlice.actions.changeTheme({ theme: 'light' }));
      } else {
        localStorage.setItem('theme', 'dark');
        setTheme('dark');
        dispatch(ThemeSlice.actions.changeTheme({ theme: 'dark' }));
      }
    },
    [setTheme, dispatch]
  );

  const router = useRouter();

  useEffect(() => {
    handleTheme(theme === 'light');
  }, [dispatch, user, handleTheme, theme]);

  return (
    <div className="relative ml-3">
      <Link href={'/settings/billing'}
      className='mb-3 w-full flex items-center text-white bg-blue-500 dark:bg-slate-600 py-2 px-3 rounded-2xl hover:bg-blue-400 hover:dark:bg-slate-500'> 
        <HiOutlineSparkles /> <span className='ml-2'>Upgrage Premium</span>
      </Link>
      {session ||
        (user && (
          <div className='flex items-center'>
            <Dropdown placement="right-bottom" closeOnSelect={false}>
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
                    src={`/images/users/user-${user.profile}.webp`}
                    alt="logo"
                    width={300}
                    height={300}
                  />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Menu variant="shadow">
                <Dropdown.Item
                  key={"profile"}
                  icon={<HiUserCircle className="mr-2" />}
                >
                  <Link href='/settings/profile'>Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item
                  textValue="Change theme"
                  icon={<MdOutlineSettingsSuggest />}
                >
                  <div className="flex items-start">
                    <span className="mr-auto">Change theme</span>
                    <Switch
                      size="xs"
                      color={'success'}
                      onChange={(e) => handleTheme(e.target.checked)}
                      iconOn={<HiSun />}
                      checked={theme === 'light'}
                      iconOff={<HiMoon />}
                    />
                  </div>
                </Dropdown.Item>
                <Dropdown.Item
                  textValue="logout"
                  withDivider
                  color="error"
                  icon={<HiLogout className="mr-2" />}
                >
                  <button onClick={() => (session ? signOut() : authSignOut(dispatch, router))}>
                    Sign out
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <span className='ml-4 text-white'>{user.name}</span>
          </div>
        ))}
    </div>
  );
}
