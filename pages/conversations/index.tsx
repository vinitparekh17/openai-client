import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { CurrentAuthState } from "../../slices/authSlice";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import SkeletonNavbar from "../../components/Skeleton/SkeletonNav";
import SkeletonSidebar from "../../components/Skeleton/SkeletonSidebar";
const Navbar = dynamic(() => import("../../components/Basic/Navbar"), { ssr: false, loading: () => <SkeletonNavbar /> });
const Slider = dynamic(() => import("../../components/Basic/Slider"), { ssr: false, loading: () => <SkeletonSidebar /> });
import MyHead from "../../components/Basic/Head";
import ChatContainer from "../../components/Chat/ChatContainer";

export default function Conversations() {
    const router = useRouter()
    const { token } = useSelector(CurrentAuthState);
    const { data: session, status } = useSession()
    if (status === 'loading') {
        return <p>Loading...</p>
    } else if (!session && !token) {
        router.push('/login')
        return <p>Redirecting...</p>
    } else if (session || token) {
        return (
            <>
                <MyHead />
                <Navbar />
                <Slider>
                    <ChatContainer />
                </Slider>
            </>
        )
    }
}