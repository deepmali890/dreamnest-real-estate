import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url(/hero.jpg)" }}
        id="Header"
      >
        {/* Overlay */}
        <div className="bg-[rgba(0,0,0,0.5)] h-full w-full flex flex-col">
          {/* Center Content */}
          <motion.div
            className="flex flex-1 flex-col items-center justify-center text-center text-white px-4"
            initial={{ opacity: 0, y: 40 }}   // Start hidden + thoda neeche
            animate={{ opacity: 1, y: 0 }}   // Fade + upar aa jaye
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Headline */}
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Find Your Dream Home with DreamNest
            </motion.h1>

            {/* Buttons */}
            <motion.div
              className="flex sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <a
                href="#projects"
                className="border border-white px-6 py-3 rounded-md text-lg hover:bg-white hover:text-black transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="bg-blue-500 px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
