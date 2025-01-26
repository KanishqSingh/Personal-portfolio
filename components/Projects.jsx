import { useEffect, useState } from 'react';
import { assets } from '@/assets/assets';
import { workData } from '@/assets/assets';
import { motion } from 'framer-motion';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(workData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? workData.length - 1 : prevIndex - 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-0 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects <span className=" text-red-500">Completed.</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-2xl m-auto">I’ve worked on a variety of personal projects, focusing on creating functional, user-friendly digital solutions.</p>

      {/* Slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button onClick={prevProject} className="p-3 bg-gray-800 rounded mr-2" aria-label="Previous Project">
          <p className='text-white'>Previous</p>
        </button>
        <button onClick={nextProject} className="p-3 bg-gray-800 rounded mr-2" aria-label="Next Project">
          <p className='text-white'>Next</p>
        </button>
      </div>

      {/* Project slider container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {workData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4 group">
              {/* Image container */}
              <div className="relative w-full h-auto mb-14">
                <img
                  src={project.bgImage}
                  alt={project.title}
                  className="w-full h-auto mb-14 transition-opacity duration-300"
                />
                {/* Description overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center px-4 py-2">
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              {/* Title */}
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl  text-gray-800">{project.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
