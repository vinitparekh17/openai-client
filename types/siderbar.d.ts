import type { ReactElement } from "react";

export interface SidebarProps {
    setOpen: (open: boolean) => void;
    open: boolean;
    children: ReactElement;
}

export interface NavbarProps {
    setOpen?: (open: boolean) => void;
    open?: boolean;
}

export interface SidebarItem {
    name: string;
    icon: ReactElement;
    link: string;
}