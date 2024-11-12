import React from 'react';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container mx-auto flex flex-col items-center p-10 md:px-20 lg:px-32 overflow-hidden'
            id='About'
        >
            {/* Title and Subtitle */}
            <h1 className='text-3xl sm:text-5xl font-bold mb-2 text-center'>
                About <span className='underline underline-offset-4 decoration-blue-500 font-light'>Our Brand</span>
            </h1>
            <p className='text-gray-500 text-lg text-center mb-10'>
                Passionate about Properties, Dedicated to your Vision
            </p>

            {/* Content Section */}
            <div className='flex flex-col md:flex-row items-center gap-10'>
                {/* Brand Image */}
                <img
                    src={assets.brand_img}
                    alt="Brand"
                    className='w-full md:w-1/2 max-w-lg rounded-md shadow-lg'
                />

                {/* Information and Stats */}
                <div className='flex flex-col items-center md:items-start text-gray-700 mt-6 md:mt-0'>
                    <div className='grid grid-cols-2 gap-8 md:gap-12 mb-8 w-full'>
                        {[
                            { count: "10+", label: "Years Experience" },
                            { count: "12+", label: "Projects Completed" },
                            { count: "20+", label: "Min. sqft. Delivered" },
                            { count: "25+", label: "Ongoing Projects" },
                        ].map((item, index) => (
                            <div key={index} className='text-center md:text-left'>
                                <p className='text-4xl font-semibold text-gray-800'>{item.count}</p>
                                <p className='text-lg'>{item.label}</p>
                            </div>
                        ))}
                    </div>
                    <p className='max-w-lg text-center md:text-left mb-8'>
                        At [Your Company Name], we believe in turning ideas into reality. We're dedicated to crafting spaces that inspire and building experiences that resonate. With creativity, precision, and passion, we bring your vision to life—whether it’s a fresh start, a new project, or a lifelong dream.
                    </p>
                    <button className='bg-blue-600 text-white px-8 py-3 rounded-md transition duration-300 hover:bg-blue-700'>
                        Learn More
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
