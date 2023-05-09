import React, { useState } from "react";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a href="#" className="text-3xl text-gray-800 dark:text-white p-1 md:p-0 md:ml-7">
              Zidane
            </a>

            <div className="flex lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {open ? <HiX size={25} /> : <HiOutlineMenuAlt4 size={25} />}
              </button>
            </div>
          </div>

          <div
            className={`${
              open ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <a onClick={() => setOpen(!open)} className="my-2 text-gray-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 p-1 md:p-0 md:mx-4 md:my-0" href="#">
                Home
              </a>
              <a onClick={() => setOpen(!open)} className="my-2 text-gray-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 p-1 md:p-0 md:mx-4 md:my-0" href="#Skills">
                Skills
              </a>
              <a onClick={() => setOpen(!open)} className="my-2 text-gray-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 p-1 md:p-0 md:mx-4 md:my-0" href="#Projects">
                Projects
              </a>
              <a onClick={() => setOpen(!open)} className="my-2 text-gray-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 p-1 md:p-0 md:mx-4 md:my-0" href="#Contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
