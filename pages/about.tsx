import Protected from '../components/Basic/Protected';
import Image from 'next/image';
import React from 'react';
import {
  FaMicrophone,
  FaLaptopCode,
  FaRobot,
  FaChartLine,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode className="text-indigo-600 text-4xl mb-4" />,
    title: 'AI-Powered Development',
    description: 'Leverage our cutting-edge AI technology.',
  },
  {
    icon: <FaRobot className="text-indigo-600 text-4xl mb-4" />,
    title: 'Conversational AI',
    description:
      'Engage with our advanced AI assistants for natural language interactions.',
  },
  {
    icon: <FaChartLine className="text-indigo-600 text-4xl mb-4" />,
    title: 'AI-Driven Analytics',
    description:
      'Gain valuable insights from your data with our AI-powered analytics tools.',
  },
  // Add more services here
];

const highlights = [
  {
    icon: <FaMicrophone className="text-green-500 mr-2" />,
    text: 'Voice Support',
  },
  {
    icon: <FaRobot className="text-green-500 mr-2" />,
    text: 'Advanced AI Capabilities',
  },
  {
    icon: <FaLaptopCode className="text-green-500 mr-2" />,
    text: 'AI-Powered Development',
  },
];

export default function About() {
  return (
    <Protected>
      <div className="">
        {/* Header Section */}
        <div className="mt-3 mx-3 rounded-3xl shadow-xl py-20 bg-gradient-to-r from-[#0B4F6C] via-[#0b8db1] to-[#BBDEFB] dark:from-[#0b3a6c] dark:via-[#096e8a] dark:to-[#89abc8]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              About Omnisive
            </h1>
            <p className="text-white text-lg">
              Discover the future of AI-powered solutions.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 dark:text-gray-300">
                Our Vision
              </h2>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                At Omnisive, we are pioneering the future of artificial
                intelligence. Our mission is to revolutionize the way businesses
                operate by harnessing the power of AI technology. With our
                cutting-edge solutions, we empower companies to streamline
                processes, enhance decision-making, and unlock new levels of
                innovation.
              </p>
              {highlights.map((highlight, index) => (
                <div className="flex items-center mb-4" key={index}>
                  {highlight.icon}
                  <span className="text-gray-700 dark:text-gray-500">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/2 px-4">
              <Image
                src={'/svgs/undraw_chat_bot_re_e2gj.svg'}
                alt="Team"
                className="rounded-lg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 mb-3 mx-3 rounded-3xl shadow-xl bg-gradient-to-r from-[#0B4F6C] via-[#0b8db1] to-[#BBDEFB] dark:from-[#0b3a6c] dark:via-[#096e8a] dark:to-[#89abc8]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Our Offerings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  className="dark:bg-gray-300 bg-gray-100 rounded-lg shadow-lg p-6"
                  key={index}
                >
                  {service.icon}
                  <h3 className="text-xl text-gray-800 font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Protected>
  );
}
