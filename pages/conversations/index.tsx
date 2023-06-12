import ChatContainer from "../../components/Chat/ChatContainer";
import Protected from "../../components/Basic/Protected";

export default function Conversations() {
    return (
        <Protected>
                <ChatContainer />
        </Protected>
    );
}