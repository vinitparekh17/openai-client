import { useEffect, useRef } from "react";
import ChatForm from "./ChatForm";
import Message from "./Message";

export default function ChatContainer() {
  const scrollToBottom = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    scrollToBottom.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col h-full items-center justify-between w-full py-2">
      <div className="w-full px-3 overflow-y-scroll scrollbar-custom">
        <Message />
        <Message />
        <Message />
      <div className="w-full h-1" ref={scrollToBottom} />
      </div>
        <ChatForm />
    </div>
  );
}