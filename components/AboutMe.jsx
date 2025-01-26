import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
  return (
    <div className="w-11/12 max-w-7xl mx-auto py-14 flex flex-col lg:flex-row items-center gap-12 " id='AboutMe'>
      {/* Right Image */}
      <div className="flex-shrink-0 lg:order-last">
        <Image
          src={assets.profile2}
          alt="Profile Picture"
          className=" w-24 sm:w-64 lg:w-65"
        />
      </div>

      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">About <span className='text-red-400'>Me.</span></h2>
        <p className="text-lg mb-8 mt-5">
          Hello! I'm Kanishq Singh, a passionate Full Stack Web Developer with expertise in creating dynamic
          and responsive web applications. I love turning ideas into reality through clean and efficient code.
        </p>

        {/* Blocks Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-8">
          <div className="flex-1 p-6 bg-gradient-to-r hover:from-yellow-200 hover:via-pink-300 hover:to-pink-400 transition rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-sm">Worked on over 10+ Website Projects using HTML,CSS,JS,MERN</p>
          </div>
          <div className="flex-1 p-6 bg-gradient-to-r hover:from-yellow-200 hover:via-pink-300 hover:to-pink-400 transition rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-sm">Bachelor's Degree in Computer Science.</p>
            <h6 className="text-sm">Hindustan College of Science & Technology.</h6>
          </div>
          <div className="flex-1 p-6 bg-gradient-to-r hover:bg-gradient-to-br hover:from-yellow-200 hover:via-pink-300 hover:to-pink-400 transition rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Hobbies</h3>
            <p className="text-sm">Coding, designing, and exploring new technologies.</p>
          </div>
        </div>

        
        <div className="flex items-center gap-6 mb-8">
          <a href="https://www.linkedin.com/in/connect-to-kanishq" target="_blank" rel="noopener noreferrer">
            <Image src={assets.linkedinicon} alt="Twitter" className="w-8 hover:opacity-80 transition" />
          </a>
          <a href="https://github.com/KanishqSingh" target="_blank" rel="noopener noreferrer">
            <Image src={assets.githubicon} alt="LinkedIn" className="w-8 hover:opacity-80 transition" />
          </a>
          <a href="https://www.instagram.com/kan_ishq__/" target="_blank" rel="noopener noreferrer">
            <Image src={assets.instaicon} alt="GitHub" className="w-8 hover:opacity-80 transition" />
          </a>
        </div>

       
        <div>
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-1">JavaScript</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
            <div>
              <p className="text-sm mb-1">React</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
            <div>
              <p className="text-sm mb-1">Node.js</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[60%]"></div>
              </div>
            </div>
            <div>
              <p className="text-sm mb-1">CSS</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[75%]"></div>
              </div>
            </div>
            <div>
              <p className="text-sm mb-1">DSA</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
