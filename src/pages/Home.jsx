import React from "react";
import Layout from "../layouts/Layout";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Layout>
        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 py-16 mx-auto text-center">
            <div class="max-w-lg mx-auto">
              <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Muhammad Dariaz Zidane</h1>
              <p class="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.</p>
              <button class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">Download CV</button>
            </div>

            <div class="flex relative justify-center mt-10">
              <svg class="absolute -top-20 w-[28rem] -translate-x-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#8A3FFC" d="M37.1,23.8C25.1,42.1,-23.3,41.7,-35.5,23.3C-47.8,4.8,-23.9,-31.8,0.3,-31.6C24.5,-31.5,49,5.5,37.1,23.8Z" transform="translate(100 100)"></path>
              </svg>
              <img class="object-contain w-full z-10 h-72 rounded-xl lg:w-4/5" src="foto.png" />
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
