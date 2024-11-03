import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import adamPic from '../../public/adam-headshot.jpeg';
import adamWave from '../../public/adam-wave.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import tools from '../../public/tools.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Hauze's Portfolio</title>
        <meta name="description" content="An online resume and project portfolio site for Adam Hauze" />
      </Head>
      <main className="px-10">

        {/* Hero section */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-burtons">adamhauze</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="cursor-pointer text-xl" /></li>
              <li>
                <a href="https://www.linkedin.com/in/adam-hauze-bbbb7083/"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Adam Hauze</h2>
            <h3 className="text-2xl py-2">Developer and designer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">I specialize in frontend frameworks, crafting pixel-perfect web components and maintaining high testing standards through comprehensive unit and end-to-end testing strategies. My background in cybersecurity allows me to approach frontend development with a security-minded perspective, ensuring robust and secure applications.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/hauze-v">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/adam-hauze-bbbb7083/">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <Image src={adamWave} alt="Profile picture of Adam Hauze" layout="fill" objectFit="cover" />
          </div>
        </section>

        {/*  */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              As a web developer, I specialize in crafting seamless digital experiences using modern technologies. My expertise lies in frontend frameworks like <span className="text-teal-500">Angular</span> and <span className="text-teal-500">React</span>, enhanced by <span className="text-teal-500">Typescript</span> for reliable, scalable solutions. On the backend, I architect powerful server solutions using <span className="text-teal-500">Node.js</span> and <span className="text-teal-500">Firebase</span>, creating efficient systems that scale with your business needs.
            </p>
            <p>
              Beyond development, I bring a keen eye for design and user experience. Through UI/UX design and prototyping with <span className="text-teal-500">Figma</span>, I transform ideas into polished, professional web applications that not only function flawlessly but deliver an intuitive and engaging user experience that keeps your customers coming back.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={design} width={100} height={100} alt="3D blender style icon that represents a list of design skills" />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suited for your needs using design theory</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Canva</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Generate Blocks - Wordpress</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={code} width={100} height={100} alt="3D blender style icon that represents a list of design skills" />
              <h3 className="text-lg font-medium pt-8 pb-2"></h3>
              <p className="py-2">Creating elegant designs suited for your needs using design theory</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Canva</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Generate Blocks - Wordpress</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image className="mx-auto" src={consulting} width={100} height={100} alt="3D blender style icon that represents a list of design skills" />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant designs suited for your needs using design theory</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Canva</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Generate Blocks - Wordpress</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              As a web developer, I specialize in crafting seamless digital experiences using modern technologies. My expertise lies in frontend frameworks like <span className="text-teal-500">Angular</span> and <span className="text-teal-500">React</span>, enhanced by <span className="text-teal-500">Typescript</span> for reliable, scalable solutions. On the backend, I architect powerful server solutions using <span className="text-teal-500">Node.js</span> and <span className="text-teal-500">Firebase</span>, creating efficient systems that scale with your business needs.
            </p>
            <p>
              Beyond development, I bring a keen eye for design and user experience. Through UI/UX design and prototyping with <span className="text-teal-500">Figma</span>, I transform ideas into polished, professional web applications that not only function flawlessly but deliver an intuitive and engaging user experience that keeps your customers coming back.
            </p>
          </div>

        </section>
      </main>
    </>
  );
}