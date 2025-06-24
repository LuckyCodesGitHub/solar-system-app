import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-mono">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-teal-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]">
        Contact Us
      </h1>

      <div className="bg-gray-900 border border-teal-500 rounded-xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-md text-center">
        <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">
          We'd love to hear from you! Please fill out the form below.
        </p>

        <form className="space-y-4 text-left">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-200 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-teal-600 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-teal-200 placeholder-gray-500 sm:text-base transition duration-300 ease-in-out hover:border-teal-400"
              placeholder="Your Name"
              aria-label="Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-teal-600 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-teal-200 placeholder-gray-500 sm:text-base transition duration-300 ease-in-out hover:border-teal-400"
              placeholder="you@example.com"
              aria-label="Email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-200 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-teal-600 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-teal-200 placeholder-gray-500 sm:text-base resize-y transition duration-300 ease-in-out hover:border-teal-400"
              placeholder="Your message to us..."
              aria-label="Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-lg font-semibold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            onClick={(e) => e.preventDefault()}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
