import { useSession } from "next-auth/react";
import type { ReactElement } from "react";
import { useSelector } from "react-redux";
import { CurrentAuthState } from "../../slices/authSlice";
import AccessDenied from "./AccessDenied";
import Loadeing from "./Loading";

export default function Protected({ children }: { children: ReactElement }) {
    const { token } = useSelector(CurrentAuthState);
    const { data: session, status } = useSession();
    if (status === 'loading') return <Loadeing />
    if (session || token) {
        return children;
    } else {
        return <AccessDenied />
    }
}