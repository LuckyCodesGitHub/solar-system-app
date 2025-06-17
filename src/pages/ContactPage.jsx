import React from 'react';

function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black font-inter">
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-cyan-500 max-w-lg w-full text-center">
        <h2 className="text-3xl font-extrabold text-cyan-400 mb-8 tracking-wide">Contact Us</h2>

        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200"
              placeholder="placeholder@example.com"

            />
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

