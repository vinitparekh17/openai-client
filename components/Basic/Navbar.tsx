'use client';
import Link from "next/link";
import Image from "next/image";
import { Dropdown } from "@nextui-org/react";
import type { Theme } from "../../types/theme";
import { useDispatch, useSelector } from "react-redux";
import { CurrentAuthState } from "../../slices/authSlice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { HiMoon, HiSun, HiUserCircle, HiCog, HiLogout } from "react-icons/hi"
import { authSignOut } from "../../utils/auth";
import { signOut } from "next-auth/react";
import type { NavItems, NavItemsList } from "../../types/navbar";
import { currentTheme, ThemeSlice } from "../../slices/themeSlice";

export default function Navbar() {
    const router = useRouter();
    const dispatch = useDispatch()
    const { theme } = useSelector(currentTheme)
    const { data: session } = useSession()
    const { token } = useSelector(CurrentAuthState);
    const [navItems, setNavItems] = useState<NavItemsList>([])
    const [umOpen, setUmOpen] = useState<boolean>(false)
    const [mobileOpen, setMobileOpen] = useState<boolean>(false)

    const handleTheme = (theme: Theme | string) => {
        localStorage.setItem('theme', theme)
        dispatch(ThemeSlice.actions.changeTheme({ theme }))
    }

    if (navItems.length === 0) {
        fetch('/data/navitems.json', {
            cache: "force-cache"
        })
            .then(res => res.json())
            .then(data => {
                setNavItems(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <nav className="dark:bg-teal-900 bg-teal-600 absolute w-full mt-0">
            <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {!mobileOpen && <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>}
                            {mobileOpen && <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            {/* <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=200" width={40} height={40} alt="Your Company" /> */}
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navItems.map((item: NavItems, i: number) => (
                                    <Link key={i} href={item.disabled ? '' : item.path} legacyBehavior>
                                        <a className={`${item.path === router.pathname ? `bg-teal-900 text-white` : `text-teal-300 hover:bg-teal-700 hover:text-white`} rounded-md px-3 py-2 text-sm font-medium`}>{item.title}</a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="mx-2">
                            <div className="relative w-14 h-8">
                                <label htmlFor="toggle" className="flex items-center cursor-pointer">
                                    <div className={`w-14 h-8 bg-gray-300 rounded-full shadow-inner`}></div>
                                    <div className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${theme === "light" ? 'translate-x-full' : ''}`}>
                                        {theme === "light" ? <HiSun className="text-yellow-500 m-1" /> : <HiMoon className="text-gray-500 m-1" />}
                                    </div>
                                    <input type="checkbox" id="toggle" name="toggle" className="hidden" onChange={() => handleTheme(theme === 'dark' ? 'light' : 'dark')} />
                                </label>
                            </div>
                        </div>
                        <div className="relative ml-3">
                            {session || token ?
                                <Dropdown placement="bottom-left">
                                    <Dropdown.Trigger>
                                        <button type="button" onClick={() => setUmOpen(!umOpen)} className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <span className="sr-only">Open user menu</span>
                                            <Image className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="logo" width={40} height={40} />
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Menu>
                                        <Dropdown.Item icon={<HiUserCircle className="mr-2" />}>
                                            <Link href="/profile">Your Profile</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item icon={<HiCog className="mr-2" />}>
                                            <Link href="/settings">Settings</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item withDivider color="error" icon={<HiLogout className="mr-2" />}>
                                            <button onClick={() => session ? signOut() : authSignOut()}>Sign out</button>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                : <Link
                                    href={'/login'}
                                    className="bg-teal-600 text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            {mobileOpen &&
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navItems.map((item: NavItems, i: number) => (
                            <Link key={i} href={item.path} className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>{item.title}</Link>
                        ))}
                    </div>
                </div>
            }
        </nav>
    )
}