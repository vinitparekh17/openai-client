import { FaQuestionCircle, FaEnvelope, FaGlobe } from 'react-icons/fa';

const HelpPage = () => {
    const supportCard = [
        {
            title: 'Frequently Asked Questions',
            description: 'Find answers to common questions about our products and services.',
            link: '/faq',
            icon: <FaQuestionCircle className="h-8 w-8 text-indigo-600" />,
            button: 'View FAQs'
        },
        {
            title: 'Contact Support',
            description: 'Get in touch with our support team for further assistance.',
            link: '/contact',
            icon: <FaEnvelope className="h-8 w-8 text-indigo-600" />,
            button: 'Contact Us'
        },
        {
            title: 'Visit Our Knowledgebase',
            description: 'Browse our extensive knowledgebase for guides and tutorials.',
            link: '/knowledgebase',
            icon: <FaGlobe className="h-8 w-8 text-indigo-600" />,
            button: 'Browse Knowledgebase'
        }
    ];
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    How Can We Help You?
                </h1>
                <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500 dark:text-gray-400">
                    Get in touch with our support team, browse our knowledgebase, or find answers to common questions.
                </p>
            </div>
            <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                {supportCard.map((card, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                {card.icon}
                                <div className="ml-5">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">{card.title}</h3>
                                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">{card.description}</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <a href={card.link} className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    {card.button}
                                </a>
                            </div>
                        </div>
                    </div>)
                )}

            </div>
        </div>
    );
};

export default HelpPage;