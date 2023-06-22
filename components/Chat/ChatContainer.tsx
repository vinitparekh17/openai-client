import ChatForm from "./ChatForm";
import Message from "./Message";
import { useChat } from "../../hooks/useChat";

export default function ChatContainer() {
  const { messages, resChunks, setMessages, socket, setResChunks, messageEndRef } = useChat();
  return (
    <div className="flex flex-col h-full items-center justify-between container py-2">
      <div className="flex flex-col container px-3 overflow-y-scroll hiddenscroll">
        {messages.length > 0 && messages.map((message, i) => <Message key={i} message={message} />)}
        {resChunks.length > 0 && <Message chunks={resChunks} isFinished setResChunks={setResChunks} />}
      <div className="flex-1" ref={messageEndRef}></div>
      </div>
      <ChatForm socket={socket} setMessages={setMessages} />
    </div>
  );
}