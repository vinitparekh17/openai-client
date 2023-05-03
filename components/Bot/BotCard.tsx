import Link from 'next/link';
import Image from 'next/image';
export default function BotCard() {
    return (
        <Link href="/dashboard" className='block'>
            <Image
                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="profile picture"
                width={40}
                height={40}
                className="w-12 h-12 my-2 rounded-full border-2 border-gray-300 dark:border-gray-400 shadow-md shadow-gray-300 dark:shadow-gray-600 object-cover object-center" />
        </Link>
    )
}