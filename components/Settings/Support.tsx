import { FaQuestionCircle, FaEnvelope, FaGlobe } from 'react-icons/fa';

const HelpPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl">
          How Can We Help You?
        </h1>
        <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500 dark:text-gray-400">
          Get in touch with our support team, browse our knowledgebase, or find
          answers to common questions.
        </p>
      </div>
      <div className="mt-12 grid gap-8"> {/* Adjusted gap for better spacing */}
        <section className="bg-white dark:bg-slate-800 overflow-hidden shadow rounded-lg px-4 py-8">
          <div className="flex items-center">
            <FaQuestionCircle className="h-8 w-8 text-indigo-600" />
            <div className="ml-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                Frequently Asked Questions
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                Find answers to common questions about our products and services.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-800 overflow-hidden shadow rounded-lg px-4 py-8">
          <div className="flex items-center">
            <FaEnvelope className="h-8 w-8 text-indigo-600" />
            <div className="ml-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                Contact Support
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                Get in touch with our support team for further assistance.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-800 overflow-hidden shadow rounded-lg px-4 py-8">
          <div className="flex items-center">
            <FaGlobe className="h-8 w-8 text-indigo-600" />
            <div className="ml-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                Visit Our Knowledgebase
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                Browse our extensive knowledgebase for guides and tutorials.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpPage;
