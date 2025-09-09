"use client";
import { motion } from "framer-motion";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <>
      <motion.div
        id="testimonials"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-16 sm:py-20"
      >
        {/* Heading Section */}
        <motion.div
          className="text-center px-4 sm:px-6 lg:px-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-4">
            Customer Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Hear from our happy homeowners and investors who trusted{" "}
            <span className="font-semibold">DreamNest</span> to turn their real
            estate dreams into reality.
          </p>
          <motion.div
            className="w-16 sm:w-24 md:w-32 lg:w-40 h-1 mx-auto bg-black rounded mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: "10rem" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </motion.div>
      </motion.div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "DreamNest made my first home-buying experience effortless. From virtual tours to paperwork, everything was smooth and transparent.",
    name: "Amit Sharma",
    title: "Homeowner – Skyline Haven, California",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
  },
  {
    quote:
      "Professional, responsive, and truly client-focused. They helped me find the perfect villa that matched both my budget and lifestyle.",
    name: "Priya Mehta",
    title: "Villa Buyer – Palm Residency, Goa",
    src: "https://plus.unsplash.com/premium_photo-1691030255899-cccde3a4e04f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGluZGlhbiUyMHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
      "Selling my old property through DreamNest was a stress-free process. The team handled everything from marketing to closing.",
    name: "Rahul Verma",
    title: "Seller – Cityview Apartments, Mumbai",
    src: "https://plus.unsplash.com/premium_photo-1691030256264-59cdf9414ed1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGluZGlhbiUyMHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
      "I was impressed with the detailed property listings and 24/7 support. DreamNest gave me confidence in making such a big investment.",
    name: "Parmesh Singh",
    title: "Investor – Lakeview Heights, Pune",
    src: "https://images.unsplash.com/photo-1706185651641-70fde5591275?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGluZGlhbiUyMHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
      "DreamNest isn’t just a platform; it’s a trusted partner. They guided me like family and made sure I got the best deal possible.",
    name: "Arjun Singh",
    title: "Buyer – Green Valley Villas, Delhi NCR",
    src: "https://images.unsplash.com/photo-1727312413225-61d74356508f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxpbmRpYW4lMjByYW5kb20lMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
  },
];
