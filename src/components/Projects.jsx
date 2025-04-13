import React, { useEffect, useState, useContext } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const Projects = () => {
    const [currentIndex, setcurrentIndex] = useState(0);
    const [cardsToShow, setcardsToShow] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState('all');
    const [location, setLocation] = useState('all');
    const { darkMode } = useContext(ThemeContext);

    const locations = [...new Set(projectsData.map(project => project.location))];
    
    const filteredProjects = projectsData.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPrice = priceRange === 'all' ? true : 
                           (priceRange === 'low' ? parseInt(project.price.replace(/\D/g, '')) <= 250000 :
                           parseInt(project.price.replace(/\D/g, '')) > 250000);
        const matchesLocation = location === 'all' ? true : project.location === location;
        
        return matchesSearch && matchesPrice && matchesLocation;
    });

    useEffect(() => {
        const updateCardsToShow = () => {
            setcardsToShow(window.innerWidth >= 1024 ? filteredProjects.length : 1);
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, [filteredProjects.length]);

    const nextProject = () => {
        setcurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
    };
    
    const prevProject = () => {
        setcurrentIndex((prevIndex) => prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1);
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
            <h1 className='text-3xl sm:text-5xl font-bold mb-4 text-center dark:text-white'>
                Projects <span className='underline underline-offset-4 decoration-primary-500 font-light'>Completed</span>
            </h1>
            <p className='text-center text-gray-500 dark:text-gray-400 mb-12 max-w-lg mx-auto'>
                Crafting Spaces, Building Legacies - Explore Our Portfolio
            </p>

            {/* Search and Filters */}
            <div className='mb-8 space-y-4'>
                <div className='flex flex-wrap gap-4'>
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='flex-1 p-2 border dark:border-dark-border dark:bg-dark-card dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500'
                    />
                    <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className='p-2 border dark:border-dark-border dark:bg-dark-card dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500'
                    >
                        <option value="all">All Prices</option>
                        <option value="low">Under $250,000</option>
                        <option value="high">Above $250,000</option>
                    </select>
                    <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className='p-2 border dark:border-dark-border dark:bg-dark-card dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500'
                    >
                        <option value="all">All Locations</option>
                        {locations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Slider Controls */}
            <div className='flex justify-end items-center mb-8'>
                <button 
                    onClick={prevProject}
                    className='p-3 bg-gray-200 dark:bg-dark-card rounded-full shadow-md hover:bg-primary-500 hover:text-white transition duration-300 focus:outline-none' 
                    aria-label='Previous Projects'
                >
                    <img src={assets.left_arrow} alt="Previous" className='w-4 h-4' />
                </button>
                <button 
                    onClick={nextProject}
                    className='p-3 bg-gray-200 dark:bg-dark-card rounded-full shadow-md hover:bg-primary-500 hover:text-white transition duration-300 focus:outline-none ml-4' 
                    aria-label='Next Projects'
                >
                    <img src={assets.right_arrow} alt="Next" className='w-4 h-4' />
                </button>
            </div>

            {/* Project Slider Container */}
            <div className='overflow-hidden'>
                {filteredProjects.length > 0 ? (
                    <div 
                        className='flex gap-8 transition-transform duration-500 ease-in-out'
                        style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div 
                                key={index} 
                                className='relative flex-shrink-0 w-full sm:w-1/4'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='w-full h-auto rounded-lg shadow-lg mb-14' 
                                />
                                <div className='absolute right-0 left-0 bottom-5 flex justify-center'>
                                    <div className='bg-white dark:bg-dark-card w-3/4 p-4 shadow-lg rounded-lg text-center'>
                                        <h2 className='text-xl font-semibold text-gray-800 dark:text-white'>
                                            {project.title}
                                        </h2>
                                        <p className='text-gray-500 dark:text-gray-400 text-sm'>
                                            {project.price} <span className='px-1'>•</span> {project.location}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className='text-center text-gray-500 dark:text-gray-400 py-10'>
                        No projects match your search criteria
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Projects;
