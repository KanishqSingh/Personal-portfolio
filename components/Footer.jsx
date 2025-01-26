import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-gray-800 py-6' id='Footer'>
     
      <div className='container mx-auto flex justify-between items-center px-4 md:px-20 lg:px-32'>
        <h1 className='text-4xl text-white font-bold'>Kanishq<span className='text-red-500'>.Profile</span></h1> 
      </div>

   
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-20 lg:px-32 '>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
       
          <p className='text-gray-400 mt-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit deserunt ipsam animi nam debitis inventore odit error officia culpa iste obcaecati, sint iusto perspiciatis distinctio dolores fuga a voluptatum non.
          </p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0 '>
          
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href="#top" className='hover:text-white'>Home</a>
            <a href="#AboutMe" className='hover:text-white'>About Me</a>
            <a href="#Contact" className='hover:text-white'>Contact Me</a>
            <a href="#Services" className='hover:text-white'>Services</a>
            <a href="#Projects" className='hover:text-white'>Projects</a>
            
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className='w-full md:w-1/5 flex justify-center gap-6'>
          <a href="https://www.linkedin.com/in/connect-to-kanishq" target="_blank" rel="noopener noreferrer">
            <Image src={assets.linkedinicon} alt="LinkedIn" className='w-6 h-6 text-white hover:text-blue-600' />
          </a>
          <a href="https://github.com/KanishqSingh" target="_blank" rel="noopener noreferrer">
            <Image src={assets.githubicon} alt="GitHub" className='w-6 h-6 text-white hover:text-black' />
          </a>
          <a href="https://www.instagram.com/kan_ishq__/" target="_blank" rel="noopener noreferrer">
            <Image src={assets.instaicon} alt="Instagram" className='w-6 h-6 text-white hover:text-pink-500' />
          </a>
          {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src={assets.graphics_icon} alt="Twitter" className='w-6 h-6 text-white hover:text-blue-400' />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
