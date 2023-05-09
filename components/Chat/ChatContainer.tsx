import { useEffect, useRef } from "react";
import ChatForm from "./ChatForm";
import Message from "./Message";

export default function ChatContainer() {
  const scrollToBottom = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    scrollToBottom.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col h-[calc(100dvh-4rem)] items-center justify-between w-full py-2 bg-gray-200 dark:bg-gray-800">
      <div className="w-full px-3 overflow-y-scroll scrollbar-custom h-[100dvh]">
        <Message />
      <div className="w-full" ref={scrollToBottom} />
      </div>
        <ChatForm />
    </div>
  );
}