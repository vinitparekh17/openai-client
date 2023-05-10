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

export interface OpenProps {
    open: boolean;
}