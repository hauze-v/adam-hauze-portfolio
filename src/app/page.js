'use client'

import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import adamPic from '../../public/adamPic.jpg';
import design from '../../public/design.png';
import code from '../../public/code.png';
import tools from '../../public/tools.png';
import { useState } from "react";
import projectData from "./data/projectData";
import PortfolioSection from "./components/PortfolioSection";
import { FaArrowUp } from "react-icons/fa";
import TestimonialSection from "./components/TestimonialSection";
import TimelineSection from "./components/TimelineSection";
import VideoTestimonial from "./components/VideoTestimonial";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [projects, setProjects] = useState(projectData);

  return (
    <div className={`${darkMode ? 'dark' : ''} flex`}>
      <Head>
        <title>Adam Hauze's Portfolio</title>
        <meta name="description" content="An online resume and project portfolio site for Adam Hauze" />
      </Head>

      <main className="flex flex-col bg-gray-50 dark:bg-gray-900">

        {/* Content padding */}
        <div className="px-8 md:px-20 xl:px-40 pb-10">

          {/* Hero section */}
          <section className="min-h-screen mb-10">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="text-2xl font-burtons">adamhauze</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-xl"
                    onClick={() => setDarkMode(!darkMode)} />
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/adamhauze/"
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                    target="_blank">
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-4">
              <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl">Adam Hauze</h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Senior Software Engineer</h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">I specialize in translating UI/UX designs into web components using popular frontend frameworks like React and Angular.</p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/hauze-v"
                target="_blank">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/adamhauze/"
                target="_blank">
                <AiFillLinkedin />
              </a>
            </div>
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
              <Image src={adamPic}
                alt="Profile picture of Adam Hauze"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                priority
              />
            </div>
          </section>

          {/* Services */}
          <section className="mb-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I specialize in crafting seamless digital experiences using modern technologies. My expertise lies in frontend frameworks like <span className="text-teal-500">React</span> and <span className="text-teal-500">Angular</span>, enhanced by <span className="text-teal-500">Typescript</span>.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Beyond development, I bring a keen eye for "invisible" design - design so effective it goes unnoticed. Building and prototyping design systems with <span className="text-teal-500">Figma</span>, I transform ideas into polished, professional web components that deliver an intuitive user experience.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-700 dark:shadow-none flex-1">
                <Image className="mx-auto" src={design} width={100} height={100} alt="3D blender style icon that represents a list of design skills" />
                <h3 className="text-lg font-medium pt-8 pb-2 lg:text-2xl dark:text-white">Beautiful Designs</h3>
                <p className="py-2 max-w-xs mx-auto dark:text-white">Crafting intuitive user experiences that customers don't notice</p>
                <h4 className="py-4 text-teal-600 font-bold lg:text-lg">Design tool experience</h4>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Canva (moderate)</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Figma (moderate)</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Wordpress (advanced)</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-700 dark:shadow-none flex-1">
                <Image className="mx-auto" src={code} width={100} height={100} alt="3D blender style icon that represents a list of design skills" />
                <h3 className="text-lg font-medium pt-8 pb-2 lg:text-2xl dark:text-white">Software Engineering</h3>
                <p className="py-2 max-w-xs mx-auto dark:text-white">Engineering software systems from front to back</p>
                <h4 className="py-4 text-teal-600 font-bold lg:text-lg">My experience tech stack</h4>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Angular (advanced)</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Firebase (moderate)</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Jasmine (advanced)</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">React (advanced)</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Storybook (moderate)</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Tailwind CSS (moderate)</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Typescript (advanced)</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-700 dark:shadow-none flex-1">
                <Image className="mx-auto" src={tools} width={100} height={100} alt="3D blender style icon that represents a list of design skills" />
                <h3 className="text-lg font-medium pt-8 pb-2 lg:text-2xl dark:text-white">Tools of the Trade</h3>
                <p className="py-2 max-w-xs mx-auto dark:text-white">Leveraging tools that enhance the software development lifecycle</p>
                <h4 className="py-4 text-teal-600 font-bold lg:text-lg">Other skills</h4>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Agile Scrum</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">RESTful APIs</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Building CI/CD Pipelines</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Git & GitHub</p>
                <p className="text-gray-800 dark:text-gray-300 py-1 leading-5">Shifting "left" With Security</p>
              </div>
            </div>
          </section>
        </div>

        {/* Timeline */}
        <TimelineSection />

        <div className="px-8 md:px-20 xl:px-40 pb-10">
          {/* Portfolio */}
          <PortfolioSection projects={projects} />

          {/* Testimonials */}
          <TestimonialSection />

          {/* Video Testimonial */}
          <VideoTestimonial videoId="12PBffyXpIc" />

        </div>

        {/* CTA Section */}
        <div className="bg-teal-500 dark:bg-teal-800 w-full">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-gray-900 dark:text-white lg:text-5xl">Want to hire me?
              <br></br>
              I'm available for full-time work.
            </h2>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a href="mailto:hauze_v@protonmail.com"
                target="_blank"
                className="rounded-md px-3.5 py-2.5 text-md font-semibold text-gray-900 dark:text-white border-2 border-teal-800 dark:border-teal-500 shadow-sm dark:shadow-none hover:bg-teal-400/50 dark:hover:bg-teal-500/50">Email me</a>
              <a href="#" className="text-md/6 font-semibold text-gray-900 dark:text-white flex items-center">
                <div className="flex items-center">
                  <p>Back to top</p>
                  <FaArrowUp className="ml-2 text-gray-900 dark:text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-24 lg:px-8">
            <div className="mt-16 flex justify-center gap-x-10">
              <a href="https://github.com/hauze-v"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-600"
                target="_blank">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/adamhauze/"
                target="_blank">
                <AiFillLinkedin className="text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-600" />
              </a>
            </div>
            <p className="mt-6 text-center text-sm/6 text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Adam Lawrence Hauze. All rights reserved.</p>
          </div>
        </footer>

      </main >
    </div >
  );
}