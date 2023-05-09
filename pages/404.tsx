import MyHead from "../components/Basic/Head";

export default function Custom404() {
  return (
    <>
    <MyHead />
    <main className="flex flex-col items-center justify-center text-gray-900 dark:text-gray-100 h-[100dvh]">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
    </main>
    </>
  )
}