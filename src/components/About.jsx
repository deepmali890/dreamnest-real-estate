import React from "react";

const About = () => {
  return (
    <section
      className="py-24 relative overflow-x-hidden"
      id="About"
    >
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-10 lg:gap-16">
          
          {/* Right Image (mobile top, desktop right) */}
          <div className="w-full flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                className="w-full h-auto md:rounded-tl-[500px] md:rounded-tr-[200px] object-cover"
                src="/about.jpg"
                alt="About DreamNest"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full flex flex-col gap-10 order-2 lg:order-1 text-center lg:text-left">
            <div className="flex flex-col gap-8">
              <h6 className="text-black font-semibold text-2xl sm:text-3xl">
                About{" "}
                <span className="font-light underline underline-offset-2">
                  DreamNest
                </span>
              </h6>
              <div className="flex flex-col gap-3">
                <h2 className="text-indigo-700 font-bold font-manrope leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  We Build More Than Homes — We Build Trust & Dreams.
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  At DreamNest, our vision goes beyond bricks and mortar. We
                  strive to create living spaces where families grow,
                  friendships blossom, and memories are cherished. With over a
                  decade of expertise in real estate, we’ve delivered projects
                  that blend modern architecture with timeless comfort. Every
                  home we design reflects our core values — trust, transparency,
                  and excellence.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition">
                <h4 className="text-gray-900 text-xl sm:text-2xl font-bold">
                  10+ Years
                </h4>
                <p className="text-gray-500">Building trust with quality & innovation</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition">
                <h4 className="text-gray-900 text-xl sm:text-2xl font-bold">
                  45+ Projects
                </h4>
                <p className="text-gray-500">Delivering excellence across communities</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition">
                <h4 className="text-gray-900 text-xl sm:text-2xl font-bold">
                  26+ Awards
                </h4>
                <p className="text-gray-500">Recognized for design & innovation</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-400 transition">
                <h4 className="text-gray-900 text-xl sm:text-2xl font-bold">
                  99% Happy Clients
                </h4>
                <p className="text-gray-500">Because your satisfaction is our success</p>
              </div>
            </div>

            {/* Button */}
            <button className="sm:w-fit w-full group px-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow transition flex items-center justify-center">
              <span className="text-indigo-600 text-sm font-medium group-hover:-translate-x-1 transition">
                Read More
              </span>
              <svg
                className="ml-2 group-hover:translate-x-1 transition"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75 4.5L11.25 9L6.75 13.5"
                  stroke="#4F46E5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
