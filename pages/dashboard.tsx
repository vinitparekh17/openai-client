import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Navbar from "../components/Navbar"

export default function Dashboard() {
    const router = useRouter()
    const { data: session, status } = useSession()
    if (status === 'loading') {
        return <p>Loading...</p>
    } else if (status === 'unauthenticated') {
        router.push('/login')
        return <p>Redirecting...</p>
    } else if (session) {
        return (
            <>
            <Navbar />
                <h1>Dashboard</h1>
            </>
        )
    }
}