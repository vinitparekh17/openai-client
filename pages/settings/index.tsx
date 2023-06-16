import Protected from "../../components/Basic/Protected";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { BsRobot, BsFillShieldLockFill, BsCircleHalf } from "react-icons/bs";

export default function Settings() {
  const settings = [
    {
      name: 'Profile',
      icon: <CgProfile className="text-xl sm:text-2xl" />
    },
    {
      name: 'Privacy',
      icon: <BsFillShieldLockFill className="text-xl sm:text-2xl" />
    },
    {
      name: 'Theme',
      icon: <BsCircleHalf className="text-xl sm:text-2xl" />
    },
    {
      name: 'Chatbot',
      icon: <BsRobot className="text-xl sm:text-2xl" />
    }
  ]

  return (
    <Protected>
      <div className="mt-2 flex flex-col items-center justify-center">
        <div className="w-11/12 sm:w-3/4 overflow-x-scroll hiddenscroll">
          {/* horizontal ul */}
          <ul className="flex flex-row justify-evenly">
            {settings.map((setting, index) => (
              <li key={index} className="flex flex-col items-center justify-center text-center m-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg p-2">
                <Link legacyBehavior href={`/settings/${setting.name.toLowerCase()}`}>
                  <a className="flex items-center justify-center">
                    {setting.icon}
                    <p className="ml-1 text-sm sm:text-lg font-semibold">{setting.name}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Protected>
  );
}