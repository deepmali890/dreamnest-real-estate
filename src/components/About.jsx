import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="py-24 relative xl:mr-0 lg:mr-5 mr-0"
      id="About"
    >
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          {/* Right Image (mobile me top par) */}
          <motion.div
            className="w-full lg:justify-start justify-center items-start flex order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }} // Right se hidden
            whileInView={{ opacity: 1, x: 0 }} // View me aane par slide
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // Ek hi bar chale scroll pe
          >
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full relative">
              <img
                className="sm:mt-5 sm:ml-5 w-full h-full md:rounded-tl-[500px] md:rounded-tr-[200px] object-cover"
                src="/about.jpg"
                alt="About DreamNest"
              />
            </div>
          </motion.div>

          {/* Left Content (mobile me niche aa jaye) */}
          <motion.div
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }} // Left se hidden
            whileInView={{ opacity: 1, x: 0 }} // Animate hone par slide in
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-black leading-relaxed font-semibold text-3xl">
                  About{" "}
                  <span className="font-light underline underline-offset-2">
                    DreamNest
                  </span>
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    We Build More Than Homes — We Build Trust & Dreams.
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    At DreamNest, our vision goes beyond bricks and mortar. We
                    strive to create living spaces where families grow,
                    friendships blossom, and memories are cherished. With over a
                    decade of expertise in real estate, we’ve delivered projects
                    that blend modern architecture with timeless comfort. Every
                    home we design reflects our core values — trust,
                    transparency, and excellence.
                  </p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      10+ Years
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Building trust with quality & innovation
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      45+ Projects
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Delivering excellence across communities
                    </p>
                  </div>
                </div>

                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      26+ Awards
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Recognized for design & innovation
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      99% Happy Clients
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      Because your satisfaction is our success
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="sm:w-fit cursor-pointer w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Read More
              </span>
              <svg
                className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
