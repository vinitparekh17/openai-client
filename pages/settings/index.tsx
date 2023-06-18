import Protected from "../../components/Basic/Protected";
import { Settings } from "../../components/Basic/Settings";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsRobot, BsFillShieldLockFill, BsCircleHalf } from "react-icons/bs";
import { FaMoneyBillWave, FaQuestionCircle, FaFileExport, FaTrash } from "react-icons/fa";

export default function SettingsLayout() {
  const [choice, setChoice] = useState('profile')
  const [isMobile, setIsMobile] = useState(false)
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
      name: 'Manage Bots',
      icon: <BsRobot className="text-xl sm:text-2xl" />
    },
    {
      name: 'Billing',
      icon: <FaMoneyBillWave className="text-xl sm:text-2xl" />
    },
    {
      name: 'Help',
      icon: <FaQuestionCircle className="text-xl sm:text-2xl" />
    },
    {
      name: 'Export Data',
      icon: <FaFileExport className="text-xl sm:text-2xl" />
    },
    {
      name: 'Delete Account',
      icon: <FaTrash className="text-xl sm:text-2xl" />
    }
  ]

  useEffect(() => {
    setIsMobile(localStorage.getItem('mobile') === 'true')
  }, [setIsMobile])

  if (!isMobile) {
    return (
      <Protected>
        <div className="rounded-md h-[90svh] flex m-2 overflow-y-hidden">
          <div className="dark:bg-gray-700 bg-gray-300 h-[calc(90svh-1.5rem)] p-3 m-2 rounded-xl">
            {settings.map((item, index) => (
              <button key={index}
                onClick={() => setChoice(item.name.toLowerCase())}
                className="items-center flex justify-start hover:bg-gray-100 w-full dark:hover:bg-gray-600 dark:text-gray-200 text-gray-700 rounded-lg p-3">
                <span className="mr-3">{item.icon}</span>
                <p className="font-bold">{item.name}</p>
              </button>
            ))}
          </div>
          <div className="dark:bg-gray-700 bg-gray-300 flex-1 w-full h-[calc(90svh-1.5rem)] m-2 p-3 rounded-xl">
            <Settings choice={choice} />
          </div>
        </div>
      </Protected>
    );
  } else {
    return (
      <Protected>
        <h1>Mobile Settings</h1>
      </Protected>
    )
  }
}