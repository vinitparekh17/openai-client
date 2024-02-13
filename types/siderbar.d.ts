interface SidebarProps {
  setOpen: (open: boolean) => void;
  open: boolean;
  children: ReactElement;
}

interface NavbarProps {
  setOpen?: (open: boolean) => void;
  open?: boolean;
}

interface SidebarItem {
  name: string;
  icon: ReactElement;
  link: string;
  modes?: ['text', 'voice']
  subItems?: SidebarItem[];
}
