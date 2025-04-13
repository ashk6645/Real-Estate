import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { ThemeContext } from '../App';
import { motion } from 'framer-motion';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add subscription logic here
    setEmail('');
    alert('Thank you for subscribing!');
  };

  const footerLinks = {
    Company: ['About Us', 'Our Team', 'Careers', 'Contact Us'],
    Services: ['Buy Property', 'Sell Property', 'Rent Property', 'Property Valuation'],
    Resources: ['Blog', 'FAQ', 'Terms of Service', 'Privacy Policy'],
    Social: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']
  };

  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className={`pt-20 ${darkMode ? 'bg-dark-bg text-white' : 'bg-gray-900 text-white'}`} id="Footer">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
            className="space-y-6"
          >
            <img src={darkMode ? assets.logo_dark : assets.logo} alt="Company Logo" className="h-8" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating exceptional living spaces and turning dreams into addresses. Your journey to the perfect property starts here.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <motion.a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social.toLowerCase()}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={footerAnimation}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">{category}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerAnimation}
          className="py-12 border-t border-gray-800"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Stay updated with our latest properties and real estate insights
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary-500 flex-1 max-w-md"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerAnimation}
          className="py-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Estate. All rights reserved. Designed with ♥ by Ashutosh
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-colors duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
