import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useCallback } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { currentTheme, ThemeSlice } from '../../slices/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSlice } from '../../slices/authSlice';
import { HiUserCircle, HiCog, HiLogout, HiSun, HiMoon } from 'react-icons/hi';
import { MdOutlineSettingsSuggest } from 'react-icons/md';
import { Dropdown, Switch } from '@nextui-org/react';
import { authSignOut } from '../../utils/auth';
import { signOut } from 'next-auth/react';

export default function NavProfile({
  session,
  token,
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

  useEffect(() => {
    handleTheme(theme === 'light');
    if (user.name === '' || user.name === undefined) {
      dispatch(AuthSlice.actions.getData());
    }
  }, [dispatch, user, handleTheme, theme]);

  return (
    <div className="relative ml-3">
      {session ||
        (token && (
          <Dropdown placement="left-bottom" closeOnSelect={false}>
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
                  src={`/images/avatars/m-${user.profile}.webp`}
                  alt="logo"
                  width={300}
                  height={300}
                />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Menu variant="shadow">
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
                <button onClick={() => (session ? signOut() : authSignOut())}>
                  Sign out
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ))}
    </div>
  );
}
