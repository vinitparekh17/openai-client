import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { CurrentAuthState } from "../../slices/authSlice";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import ChatGreet from "../../components/ChatGreet";
import MyHead from "../../components/Head";

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
                    <ChatGreet />
                </Slider>
            </>
        )
    }
}