import React, { useContext, useState } from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../App';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { darkMode } = useContext(ThemeContext);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => prev === 0 ? testimonialsData.length - 1 : prev - 1);
    };

    return (
        <div className={`py-20 ${darkMode ? 'bg-dark-bg' : 'bg-gray-50'}`} id='Testimonials'>
            <div className='container mx-auto px-6 md:px-20 lg:px-32'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className={`text-3xl sm:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Customer <span className='underline underline-offset-4 decoration-primary-500 font-light'>Testimonials</span>
                    </h1>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                        Real Stories From Those Who Found Their Dream Home With Us
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-10 px-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className={`p-3 rounded-full ${darkMode ? 'bg-dark-card hover:bg-gray-800' : 'bg-white hover:bg-gray-100'} shadow-lg`}
                        >
                            <img src={assets.left_arrow} alt="Previous" className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className={`p-3 rounded-full ${darkMode ? 'bg-dark-card hover:bg-gray-800' : 'bg-white hover:bg-gray-100'} shadow-lg`}
                        >
                            <img src={assets.right_arrow} alt="Next" className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* Testimonial Cards */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className={`p-8 rounded-2xl ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-xl`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative mb-6"
                                    >
                                        <div className="absolute inset-0 bg-primary-500 rounded-full blur-lg opacity-20"></div>
                                        <img
                                            src={testimonialsData[activeIndex].image}
                                            alt={testimonialsData[activeIndex].name}
                                            className="w-24 h-24 rounded-full border-4 border-primary-500 object-cover relative z-10"
                                        />
                                    </motion.div>

                                    <div className="mb-6">
                                        {/* Rating stars */}
                                        <div className="flex justify-center gap-1 mb-4">
                                            {Array.from({ length: testimonialsData[activeIndex].rating }).map((_, i) => (
                                                <motion.img
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                    src={assets.star_icon}
                                                    alt="star"
                                                    className="w-6 h-6"
                                                />
                                            ))}
                                        </div>

                                        <motion.blockquote
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className={`text-lg italic mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                                        >
                                            "{testimonialsData[activeIndex].text}"
                                        </motion.blockquote>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <h3 className={`text-xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {testimonialsData[activeIndex].name}
                                        </h3>
                                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {testimonialsData[activeIndex].title}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Testimonial Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === activeIndex 
                                        ? 'w-8 bg-primary-500' 
                                        : `${darkMode ? 'bg-gray-700' : 'bg-gray-300'} hover:bg-primary-400`
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
