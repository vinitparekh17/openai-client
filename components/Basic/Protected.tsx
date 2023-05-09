import { useSession } from "next-auth/react";
import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { CurrentAuthState } from "../../slices/authSlice";
import AccessDenied from "./AccessDenied";
import Loadeing from "./Loading";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Protected({ children }: { children: ReactElement }) {
    const { token } = useSelector(CurrentAuthState);
    const { data: session, status } = useSession();
    const [open, setOpen] = useState<boolean>(false);
    if (status === 'loading') return <Loadeing />
    if (session || token) {
        return (
            <>
                <Navbar setOpen={setOpen} open={open} />
                <Sidebar open={open}>
                    {children}
                </Sidebar>
            </>
        )
    } else {
        return <AccessDenied />
    }
}