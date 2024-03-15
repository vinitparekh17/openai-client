import Image from 'next/image';
import Protected from '../components/Basic/Protected';
import { FaRobot, FaLaptopCode, FaCommentDots, FaMicrophone, FaPencilAlt, FaLanguage } from 'react-icons/fa';

const features = [
    {
        icon: <FaRobot className="text-indigo-600 text-4xl mb-4" />,
        title: 'Advanced AI Assistant',
        description: 'Our powerful AI engine ensures accurate and intelligent responses to your queries.',
    },
    {
        icon: <FaLaptopCode className="text-indigo-600 text-4xl mb-4" />,
        title: 'Code Generation',
        description: 'Generate code snippets in various programming languages with ease.',
    },
    {
        icon: <FaCommentDots className="text-indigo-600 text-4xl mb-4" />,
        title: 'Natural Language Processing',
        description: 'Engage in natural conversations with our AI assistant, just like chatting with a human.',
    },
    {
        icon: <FaMicrophone className="text-indigo-600 text-4xl mb-4" />,
        title: 'Voice Support',
        description: 'Interact with our AI assistant using voice commands for a hands-free experience.',
    },
    {
        icon: <FaPencilAlt className="text-indigo-600 text-4xl mb-4" />,
        title: 'Writing Assistance',
        description: 'Get help with writing tasks, from proofreading to content generation.',
    },
    {
        icon: <FaLanguage className="text-indigo-600 text-4xl mb-4" />,
        title: 'Multilingual Support',
        description: 'Communicate with our AI assistant in multiple languages.',
    },
];

const FeaturesPage = () => {
    return (

        <Protected>
            <div className="bg-gray-100">
                <div className="container mx-auto px-4 py-16">
                    <h2 className="text-5xl text-center font-bold mb-4 bg-gradient-to-tr from-indigo-500 via-blue-500 to-pink-600 text-transparent bg-clip-text
                        ">Key Features</h2>
                    <div className="flex flex-wrap -mx-4 items-center">
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {features.map((feature, index) => (
                                    <div className="bg-white rounded-lg shadow-lg p-6" key={index}>
                                        {feature.icon}
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-700">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <Image src={"/svgs/undraw_chat_bot_re_e2gj.svg"} alt="Feature" className="rounded-lg shadow-lg" width={1000} height={1000} />
                        </div>
                    </div>
                </div>
            </div>
        </Protected>
    );
};

export default FeaturesPage;