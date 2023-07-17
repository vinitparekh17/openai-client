export default function ExportData() {
  return (
    <>
      <div className="flex-1 mt-2 space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl my-2 font-semibold">Export Data</h2>
        </div>
        <hr className="my-6 h-px dark:bg-gray-700 bg-gray-200 w-[98%] mx-auto" />
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <div className="mb-3 w-full">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="botName"
              >
                Export Data
              </label>
              <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-600 shadow-sm shadow-black rounded-md dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-700">
                Export
              </button>
            </div>
            <video
              src="/videos/ll.webm"
              loop={true}
              autoPlay={true}
              muted={true}
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
