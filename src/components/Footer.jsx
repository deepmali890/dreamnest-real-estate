import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">

          {/* Logo + Contact */}
          <div className="col-span-full cursor-pointer mb-10 lg:col-span-2 lg:mb-0">
            <Link to="/">
              <div className="text-black font-bold text-xl  px-3 rounded-full">
                DreamNest
              </div>
            </Link>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              Helping you find your dream home. Questions? Reach out to us!
            </p>
            <a
              href="#contact"
              className="py-2.5 px-5 h-9 block w-fit bg-black rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-gray-800 lg:mx-0"
            >
              Contact Us
            </a>
          </div>

          {/* Explore */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Explore</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="#Header" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li className="mb-6"><a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li className="mb-6"><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Connect</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-6"><a href="https://github.com/deepmali890" target="_blank" className="text-gray-600 hover:text-gray-900">Github</a></li>
              <li className="mb-6"><a href="https://twitter.com/deepmali890" target="_blank" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
              <li className="mb-6"><a href="https://instagram.com/dreamnest" target="_blank" className="text-gray-600 hover:text-gray-900">Instagram</a></li>
              <li><a href="https://linkedin.com/in/dilip-mali" target="_blank" className="text-gray-600 hover:text-gray-900">LinkedIn</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-full lg:col-span-2">
            <h4 className="text-lg text-gray-900 font-medium mb-4">Subscribe</h4>
            <p className="text-sm text-gray-500 mb-4">
              Stay updated with our latest property listings, real estate tips, and exclusive offers straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500">© <a href="/">DreamNest</a> 2025, All rights reserved.</span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              <a href="https://github.com/deepmali890" target="_blank" className="w-9 h-9 rounded-full  flex justify-center items-center">
                <FaGithub className='' />
              </a>
              <a href="https://linkedin.com/in/dilip-mali" target="_blank" className="w-9 h-9 rounded-full  flex justify-center items-center ">
                <CiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
