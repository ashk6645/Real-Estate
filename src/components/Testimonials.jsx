import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container mx-auto py-10 px-6 md:px-16 lg:px-32 w-full overflow-hidden' 
            id='Testimonials'
        >
            <h1 className='text-3xl sm:text-5xl font-bold mb-6 text-center'>
                Customer <span className='underline underline-offset-4 decoration-blue-500 font-light'>Testimonials</span>
            </h1>
            <p className='text-center text-gray-500 mb-12 max-w-lg mx-auto'>
                Real Stories From Those Who Found Home with Us
            </p>

            <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className='max-w-[340px] border shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition duration-300'
                    >
                        <img 
                            className='w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-200' 
                            src={testimonial.image} 
                            alt={testimonial.alt} 
                        />
                        <h2 className='text-xl text-gray-700 font-semibold'>{testimonial.name}</h2>
                        <p className='text-sm text-gray-500 mb-2'>{testimonial.title}</p>
                        
                        {/* Rating stars */}
                        <div className='flex justify-center gap-1 text-yellow-500 mb-4'>
                            {Array.from({ length: testimonial.rating }).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star" className='w-5 h-5' />
                            ))}
                        </div>

                        {/* Testimonial text */}
                        <p className='text-gray-600 text-sm leading-relaxed'>
                            {testimonial.text}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Testimonials;
