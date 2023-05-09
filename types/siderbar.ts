import type { ReactElement } from "react";

export interface BooleanProps {
    setOpen?: (open: boolean) => void;
    open?: boolean;
}

export interface PropWithChildren {
    children: ReactElement;
    open: boolean;
}

export interface OpenProps {
    open: boolean;
}