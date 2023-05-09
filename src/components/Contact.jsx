import React from "react";

export default function Contact() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen  mx-auto">
          <form className="w-full max-w-md rounded-lg">
            <div className="flex justify-center mx-auto">
              <h1 className="text-gray-800 dark:text-white text-3xl">Contact Me</h1>
            </div>

            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>

              <input
                type="text"
                className="block w-full py-3 text-gray-800 border-gray-300 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Your name"
              />
            </div>

            <div className="relative flex items-center mt-6">
              <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>

              <input
                type="email"
                className="block w-full py-3 text-gray-700 border-gray-300 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
            </div>
            <div className="relative flex items-center mt-6">
              <textarea
                placeholder="Message here..."
                className="block mt-2 placeholder:text-gray-500 border-gray-300 placeholder:dark:text-gray-400 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              ></textarea>
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
