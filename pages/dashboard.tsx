import { useSession } from "next-auth/react"
import { useSelector } from "react-redux"
import { CurrentAuthState } from "../slices/authSlice"
import { useRouter } from "next/router"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"

export default function Dashboard() {
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
                <Navbar />
                <Slider>
                    <div className="flex items-center justify-center h-full">
                        <div className="text-7xl text-gray-900 font-semibold">
                            <h1>Building digital</h1>
                            <h1>products, brands</h1>
                            <h1 className="text-violet-600">experience</h1>
                        </div>
                    </div>
                </Slider>
            </>
        )
    }
}