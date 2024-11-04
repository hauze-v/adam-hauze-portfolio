'use client'

import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import adamPic from '../../public/adam-headshot.jpeg';
import adamWave from '../../public/adam-wave.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import tools from '../../public/tools.png';
import clipzMain from '../../public/clipz-ssMain.png';
import clipz01 from '../../public/clipz-ss01.png';
import clipz02 from '../../public/clipz-ss02.png';
import clipz03 from '../../public/clipz-ss03.png';
import clipz04 from '../../public/clipz-ss04.png';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'dark' : ''} flex`}>
      <Head>
        <title>Adam Hauze's Portfolio</title>
        <meta name="description" content="An online resume and project portfolio site for Adam Hauze" />
      </Head>

      <main className="px-8 md:px-20 lg:px-40 bg-gray-100 dark:bg-gray-900">

        {/* Hero section */}
        <section className="min-h-screen mb-20">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-2xl font-burtons">adamhauze</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl"
                  onClick={() => setDarkMode(!darkMode)} />
              </li>
              <li>
                <a href="https://www.linkedin.com/in/adam-hauze-bbbb7083/"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-4">
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl">Adam Hauze</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Software developer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">I specialize in translating UI/UX designs into pixel-perfect web components using popular frontend frameworks.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://github.com/hauze-v">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/adam-hauze-bbbb7083/">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <Image src={adamPic} alt="Profile picture of Adam Hauze" layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* Services */}
        <section className="mb-20">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I specialize in crafting seamless digital experiences using modern technologies. My expertise lies in frontend frameworks like <span className="text-teal-500">Angular</span> and <span className="text-teal-500">React</span>, enhanced by <span className="text-teal-500">Typescript</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Beyond development, I bring a keen eye for "invisible" design - design so effective it goes unnoticed. Building and prototyping design systems with <span className="text-teal-500">Figma</span>, I transform ideas into polished, professional web components that deliver an intuitive user experience.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 dark:shadow-none flex-1">
              <Image className="mx-auto" src={design} width={100} height={100} alt="3D blender style icon that represents a list of design skills" />
              <h3 className="text-lg font-medium pt-8 pb-2 lg:text-2xl">Beautiful Designs</h3>
              <p className="py-2 max-w-xs mx-auto">Crafting intuitive user experiences that customers don't notice</p>
              <h4 className="py-4 text-teal-600 font-bold lg:text-lg">Design tool experience</h4>
              <p className="text-gray-800 py-1 leading-5">Canva (moderate)</p>
              <p className="text-gray-800 py-1 leading-5">Figma (moderate)</p>
              <p className="text-gray-800 py-1 leading-5">Wordpress (advanced)</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 dark:shadow-none flex-1">
              <Image className="mx-auto" src={code} width={100} height={100} alt="3D blender style icon that represents a list of design skills" />
              <h3 className="text-lg font-medium pt-8 pb-2 lg:text-2xl">Software Development</h3>
              <p className="py-2 max-w-xs mx-auto">Engineering software systems from front to back</p>
              <h4 className="py-4 text-teal-600 font-bold lg:text-lg">My experience tech stack</h4>
              <p className="text-gray-800 py-1 leading-5">Angular (advanced)</p>
              <p className="text-gray-800 py-1 leading-5">Firebase (moderate)</p>
              <p className="text-gray-800 py-1 leading-5">Jasmine (advanced)</p>
              <p className="text-gray-800 py-1 leading-5">React (advanced)</p>
              <p className="text-gray-800 py-1 leading-5">Storybook (moderate)</p>
              <p className="text-gray-800 py-1 leading-5">Tailwind CSS (moderate)</p>
              <p className="text-gray-800 py-1 leading-5">Typescript (advanced)</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 dark:shadow-none flex-1">
              <Image className="mx-auto" src={tools} width={100} height={100} alt="3D blender style icon that represents a list of design skills" />
              <h3 className="text-lg font-medium pt-8 pb-2 lg:text-2xl">Tools of the Trade</h3>
              <p className="py-2 max-w-xs mx-auto">Leveraging tools that enhance the software development lifecycle</p>
              <h4 className="py-4 text-teal-600 font-bold lg:text-lg">Other skills</h4>
              <p className="text-gray-800 py-1 leading-5">Agile Scrum</p>
              <p className="text-gray-800 py-1 leading-5">API Integration</p>
              <p className="text-gray-800 py-1 leading-5">Building CI/CD Pipelines</p>
              <p className="text-gray-800 py-1 leading-5">Git & GitHub</p>
              <p className="text-gray-800 py-1 leading-5">Shifting "left" With Security</p>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="mb-20">
          <div className="mb-10">
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a frontend developer with degrees in both App Dev and Cybersecurity, I blend software development with security-first thinking. My work focuses on translating complex design requirements into clean, maintainable code using <span className="text-teal-500">Angular</span> and <span className="text-teal-500">React</span>, always with an emphasis on the end-user experience.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              The projects below showcase my software development journey - from Vanilla JS through my first framework <span className="text-teal-500">React</span>, to establishing expertise in <span className="text-teal-500">Angular</span>, to now expanding into UI/UX design while implementing full-stack applications with <span className="text-teal-500">Firebase</span>.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={clipzMain} alt="clipz project thumbnail" className="rounded-lg object-cover w-full h-full" layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={clipzMain} alt="clipz project thumbnail" className="rounded-lg object-cover w-full h-full" layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={clipzMain} alt="clipz project thumbnail" className="rounded-lg object-cover w-full h-full" layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={clipzMain} alt="clipz project thumbnail" className="rounded-lg object-cover w-full h-full" layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={clipzMain} alt="clipz project thumbnail" className="rounded-lg object-cover w-full h-full" layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={clipzMain} alt="clipz project thumbnail" className="rounded-lg object-cover w-full h-full" layout="responsive" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}