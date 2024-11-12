import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Projects = () => {
    const [currentIndex, setcurrentIndex] = useState(0);
    const [cardsToShow, setcardsToShow] = useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            setcardsToShow(window.innerWidth >= 1024 ? projectsData.length : 1);
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const nextProject = () => {
        setcurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };
    const prevProject = () => {
        setcurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' 
            id='Projects'
        >
            {/* Title and Subtitle */}
            <h1 className='text-3xl sm:text-5xl font-bold mb-4 text-center'>
                Projects <span className='underline underline-offset-4 decoration-blue-500 font-light'>Completed</span>
            </h1>
            <p className='text-center text-gray-500 mb-12 max-w-lg mx-auto'>
                Crafting Spaces, Building Legacies - Explore Our Portfolio
            </p>

            {/* Slider Controls */}
            <div className='flex justify-end items-center mb-8'>
                <button 
                    onClick={prevProject}
                    className='p-3 bg-gray-300 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300 focus:outline-none' 
                    aria-label='Previous Projects'
                >
                    <img src={assets.left_arrow} alt="Previous" className='w-4 h-4' />
                </button>
                <button 
                    onClick={nextProject}
                    className='p-3 bg-gray-300 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition duration-300 focus:outline-none ml-4' 
                    aria-label='Next Projects'
                >
                    <img src={assets.right_arrow} alt="Next" className='w-4 h-4' />
                </button>
            </div>

            {/* Project Slider Container */}
            <div className='overflow-hidden'>
                <div 
                    className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
                >
                    {projectsData.map((project, index) => (
                        <div 
                            key={index} 
                            className='relative flex-shrink-0 w-full sm:w-1/4 transform hover:scale-105 transition duration-300 ease-in-out'
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className='w-full h-auto rounded-lg shadow-lg mb-14' 
                            />
                            <div className='absolute right-0 left-0 bottom-5 flex justify-center'>
                                <div className='bg-white w-3/4 p-4 shadow-lg rounded-lg text-center'>
                                    <h2 className='text-xl font-semibold text-gray-800'>
                                        {project.title}
                                    </h2>
                                    <p className='text-gray-500 text-sm'>
                                        {project.price} <span className='px-1'>•</span> {project.location}
                                    </p>
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
