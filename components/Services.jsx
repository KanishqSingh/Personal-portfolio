import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div       initial={{ opacity: 0, x: -200 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }} className="container mx-auto py-16 px-6 md:px-20 lg:px-32" id="Services">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">My <span className='text-red-500 underline-offset-4 decoration-1'>Services.</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
        With a strong background in coding and design, I provide custom, responsive solutions tailored to your digital needs
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        
        <div className="flex-1 sm:flex-none sm:w-full md:w-1/3 bg-white-100 text-black p-6 rounded-lg bg-gradient-to-r shadow-md hover:from-yellow-200 hover:via-pink-300 hover:to-pink-400transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
          <p className="text-gray-500">
            Creating beautiful, user-friendly websites that are responsive and optimized for performance.
          </p>
        </div>

        {/* Service Block 2 */}
        <div className="flex-1 sm:flex-none sm:w-full md:w-1/3 bg-white-100 text-black p-6 rounded-lg shadow-md bg-gradient-to-r hover:from-yellow-200 hover:via-pink-300 hover:to-pink-400 transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3">UI/UX Designs</h3>
          <p className="text-gray-500">
          I specialize in creating intuitive, user-centered designs that enhance both functionality and user experience
          </p>
        </div>

        {/* Service Block 3 */}
        <div className="flex-1 sm:flex-none sm:w-full md:w-1/3 bg-white-100 text-black p-6 rounded-lg shadow-md bg-gradient-to-r hover:from-yellow-200 hover:via-pink-300 hover:to-pink-400 transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
          <p className="text-gray-500">
          With expertise in server-side development, I deliver secure, efficient APIs and databases to power your digital solutions.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
