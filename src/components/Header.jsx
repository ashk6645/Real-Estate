import React, { useContext } from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import { ThemeContext } from '../App'

const Header = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className="relative min-h-screen mb-4 overflow-hidden">
            {/* Background with overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/header_img.png')" }}
            >
                <div className={`absolute inset-0 ${darkMode ? 'bg-black/50' : 'bg-black/30'}`}></div>
            </div>

            <Navbar />

            <div className="relative container mx-auto px-6 md:px-20 lg:px-32 pt-32 md:pt-40 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.h1 
                        className="text-5xl sm:text-6xl md:text-[82px] font-semibold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Explore Homes that fit your{' '}
                        <span className="text-primary-400">dreams</span>
                    </motion.h1>

                    <motion.p 
                        className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Discover your perfect space in our curated collection of premium properties. 
                        Your journey to exceptional living starts here.
                    </motion.p>

                    <motion.div 
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <a 
                            href="#Projects" 
                            className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto"
                        >
                            View Projects
                        </a>
                        <a 
                            href="#Contact" 
                            className="px-8 py-3 bg-primary-500 rounded-full hover:bg-primary-600 transition-all duration-300 w-full sm:w-auto"
                        >
                            Contact Us
                        </a>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        {[
                            { number: "200+", label: "Happy Clients" },
                            { number: "10+", label: "Years Experience" },
                            { number: "50+", label: "Luxury Homes" },
                            { number: "12+", label: "Awards Won" }
                        ].map((stat, index) => (
                            <motion.div 
                                key={index}
                                className="text-center p-4 rounded-lg backdrop-blur-sm bg-white/10"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                                <p className="text-gray-300">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div 
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
                            <motion.div 
                                className="w-1 h-2 bg-white rounded-full"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Header
