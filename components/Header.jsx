import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className="w-11/12 max-w-5xl mx-auto h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-2 md:gap-16 text-center md:text-left">

            <div className="flex flex-col items-center md:items-start gap-4 ">
                <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                    Hi! I'm Kanishq Singh
                    <Image src={assets.hand_icon} className="w-6" alt="" />
                </h3>
                <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                    Full Stack <span className='text-red-600'>Web Developer.</span>
                </h1>
                <p className="max-w-2xl font-Ovo">
                    I'm a full-stack web developer with expertise in both front-end and back-end technologies. I build dynamic, user-friendly web applications using MERN and modern frameworks for the front-end, and server-side languages, databases, and APIs for the back-end. My goal is to create seamless, scalable solutions that meet both user needs and business objectives. I'm passionate about coding and always strive to deliver high-quality, efficient web experiences.
                </p>

                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 mt-4">
                    <a
                        href="https://www.linkedin.com/in/connect-to-kanishq"
                        className="px-6 py-3 border border-white rounded-full flex items-center gap-2"
                    >
                        <Image src={assets.linkedinicon} alt="LinkedIn" className="w-6" />
                    </a>
                    <a
                        href="https://github.com/KanishqSingh"
                        className="px-6 py-3 border border-white rounded-full flex items-center gap-2"
                    >
                        <Image src={assets.githubicon} alt="GitHub" className="w-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/kan_ishq__/"
                        className="px-6 py-3 border border-white rounded-full flex items-center gap-2"
                    >
                        <Image src={assets.instaicon} alt="Instagram" className="w-6" />
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="px-6 py-3 border rounded-full border-gray-500 flex items-center gap-2"
                    >
                        My Resume
                        <Image src={assets.download_icon} alt="Download" className="w-6" />
                    </a>
                </div>
            </div>

            <div className="flex-shrink-0 md:order-last mt-8 md:mt-0">
                <Image
                    src={assets.Myprofile2}
                    alt="Profile Picture"
                    className="rounded-full w-32 sm:w-48 md:w-56 lg:w-70"
                />
            </div>
        </div>
    );
};

export default Header;
