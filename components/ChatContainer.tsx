import ChatForm from "./ChatForm";
import Message from "./Message";

export default function ChatContainer() {
  return (
      <div className="flex flex-col h-[calc(100vh-4rem)] items-center justify-between w-full py-2 bg-gray-100 dark:bg-gray-800">
        <div className="w-full px-3 overflow-y-scroll scrollbar-custom">
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        <ChatForm/>
      </div>
  );
}