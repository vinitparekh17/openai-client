import { Input, Button, useTheme } from "@nextui-org/react";

export default function ChatForm() {
  const { theme } = useTheme();
  return (
    <form className="flex items-center justify-between w-full px-4 py-2 rounded-lg">
      <Input width="95%" size="md" status="default" bordered shadow
        placeholder="Type your message here..." />
      <div className="mx-2 text-white bg-teal-500 rounded-lg dark:bg-teal-500 dark:text-gray-200">
        <Button auto>Send</Button>
      </div>
    </form>
  );
}