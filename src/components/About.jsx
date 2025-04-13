import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion, useInView } from "framer-motion";
import { ThemeContext } from '../App';

const About = () => {
    const { darkMode } = useContext(ThemeContext);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const statsList = [
        { count: "10+", label: "Years Experience", icon: "🏢" },
        { count: "12+", label: "Projects Completed", icon: "🏗️" },
        { count: "20+", label: "Min. sqft. Delivered", icon: "📏" },
        { count: "25+", label: "Ongoing Projects", icon: "🚧" },
    ];

    return (
        <div className={`py-20 ${darkMode ? 'bg-dark-bg text-white' : 'bg-gray-50'}`} id='About'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                }}
                className='container mx-auto px-6 md:px-20 lg:px-32'
            >
                {/* Title Section */}
                <div className="text-center mb-16">
                    <motion.h1 
                        variants={fadeInUp}
                        className='text-3xl sm:text-5xl font-bold mb-4'
                    >
                        About <span className='underline underline-offset-4 decoration-primary-500 font-light'>Our Brand</span>
                    </motion.h1>
                    <motion.p 
                        variants={fadeInUp}
                        className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
                    >
                        Passionate about Properties, Dedicated to your Vision
                    </motion.p>
                </div>

                {/* Main Content */}
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className={`absolute inset-0 -left-4 -top-4 border-2 ${darkMode ? 'border-dark-border' : 'border-gray-200'} rounded-lg transform -rotate-3`}></div>
                        <img
                            src={assets.brand_img}
                            alt="Brand"
                            className='w-full rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500'
                        />
                        <motion.div 
                            className={`absolute -right-8 -bottom-8 p-4 ${darkMode ? 'bg-dark-card' : 'bg-white'} rounded-lg shadow-xl`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-primary-500 font-bold text-xl mb-1">15+</h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years of Excellence</p>
                        </motion.div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold">Building Dreams, Creating Homes</h2>
                            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                                At Estate, we believe in turning ideas into reality. With over a decade of experience, 
                                we've mastered the art of creating spaces that inspire and elevate everyday living.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {statsList.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-4 rounded-lg ${darkMode ? 'bg-dark-card' : 'bg-white'} shadow-lg hover:shadow-xl transition-shadow duration-300`}
                                >
                                    <span className="text-3xl mb-2">{stat.icon}</span>
                                    <h3 className="text-2xl font-bold text-primary-500">{stat.count}</h3>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-primary-600 transition-colors duration-300"
                        >
                            Learn More About Us
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default About;
