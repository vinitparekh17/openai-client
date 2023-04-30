export default function ChatForm() {
  return (
    <form className="flex items-center justify-between w-full px-4 py-2 rounded-lg">
      <input type="text" placeholder="Type a message" className="w-full mx-4 py-2	px-4
       text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-teal-500 dark:focus:border-teal-500
       " />
      <button className="px-4 py-2 text-white bg-teal-500 rounded-lg dark:bg-teal-500 dark:text-gray-200
      ">Send</button>
    </form>
  );
}