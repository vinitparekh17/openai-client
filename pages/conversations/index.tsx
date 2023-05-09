import dynamic from "next/dynamic";
import SkeletonNavbar from "../../components/Skeleton/SkeletonNav";
import SkeletonSidebar from "../../components/Skeleton/SkeletonSidebar";
const Navbar = dynamic(() => import("../../components/Basic/Navbar"), { ssr: false, loading: () => <SkeletonNavbar /> });
const Sidebar = dynamic(() => import("../../components/Basic/Sidebar"), { ssr: false, loading: () => <SkeletonSidebar /> });
import MyHead from "../../components/Basic/Head";
import ChatContainer from "../../components/Chat/ChatContainer";
import Protected from "../../components/Basic/Protected";

export default function Conversations() {
    return (
        <Protected>
                <ChatContainer />
        </Protected>
    );
}