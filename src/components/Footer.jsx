import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Company Info */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="Company Logo" className="mb-4" />
          <p className="text-gray-400">Welcome! We’re passionate about building spaces that feel like home and creating experiences that last. Let’s make something amazing together—your story, your space, your vision.</p>
        </div>
        
        {/* Navigation Links */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li><a href="#Header" className="hover:text-white">Home</a></li>
            <li><a href="#About" className="hover:text-white">About Us</a></li>
            <li><a href="#Contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="#Privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mb-4 max-w-80">Get the latest news and updates from our company.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto" 
              required 
            />
            <button type="submit" className="py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors">Subscribe</button>
          </form>
        </div>
        
      </div>
      
      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        &copy; 2024 Ashutosh. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
