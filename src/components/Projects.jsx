import React from "react";
import { SiLaravel, SiCodeigniter, SiTailwindcss } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Projects() {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 py-8">
        <div className="my-7 text-center">
          <h1 className="text-gray-800 dark:text-white text-3xl">Recent's projects</h1>
        </div>
        <div className="p-6">
          <div className="flex flex-wrap justify-center gap-y-4 gap-x-8">
            <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 dark:bg-gray-900">
              <img
                className="object-cover object-center w-full h-36 hover:scale-105 transition-all duration-300"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div className="flex items-center gap-2 px-6 py-[0.60rem] bg-gray-900 dark:bg-slate-200">
                <SiCodeigniter size={25} color="orangered" />
                <SiTailwindcss size={25} className="text-teal-400" />
              </div>

              <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Website Resep Masakan</h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
              </div>

              <div className="flex items-center justify-end px-5 mb-3">
                <a className="font-bold group hover:underline transition-all duration-300  cursor-pointer text-blue-500" tabindex="0" role="link">
                  View more <AiOutlineArrowRight size={20} className="inline group-hover:translate-x-1 transition-all duration-100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
