import React from 'react'
import Navbar from './navbar'
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div>
            <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }} id="Header">
                <Navbar />

                <motion.div 
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
                    <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore Homes that fit your dreams</h2>
                    <div className='space-x-6 mt-16'>
                        <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
                        <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
                    </div>
                </motion.div>
            </div>
        </div>
  )
}

export default Header
