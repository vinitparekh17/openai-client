import Navbar from "../../components/Basic/Navbar";
import Slider from "../../components/Basic/Slider";
import MyHead from "../../components/Basic/Head";
import ChatContainer from "../../components/Chat/ChatContainer";
import Protected from "../../components/Basic/Protected";

export default function Conversations() {
    return (
        <Protected>
            <>
                <MyHead />
                <Navbar />
                <Slider>
                    <ChatContainer />
                </Slider>
            </>
        </Protected>
    );
}