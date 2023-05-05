export default function SkeletonNavbar() {
    return (
        <div className="animate-pulse h-16 w-full bg-gray-300 dark:bg-gray-700">
            {/* logo */}
            <div className="ml-3 flex items-center justify-start h-full">
            <div className="h-8 w-20 bg-gray-400 rounded-xl ml-2"></div> 
                <div className="flex items-center justify-center">
                    <div className="h-8 w-12 bg-gray-400 rounded-xl ml-4"></div>
                    <div className="h-8 w-12 bg-gray-400 rounded-xl ml-2"></div>
                    <div className="h-8 w-12 bg-gray-400 rounded-xl ml-2"></div>
                </div>
            </div>
        </div>
    );
}