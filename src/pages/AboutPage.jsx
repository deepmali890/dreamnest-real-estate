import React from 'react';
import { products } from '../data/products';
import { HeroParallax } from "../components/ui/hero-parallax";

const AboutPage = () => {
    return (
        <div>
            <HeroParallax products={products} />


            <section className="py-24 relative bg-gray-50">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-12">

                        {/* Images Section */}
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 lg:order-first order-last">
                            <div className="pt-24 flex justify-start sm:justify-end">
                                <img
                                    className="rounded-xl object-cover w-full"
                                    src="https://images.pexels.com/photos/3288102/pexels-photo-3288102.png"
                                    alt="Web Design"
                                />
                            </div>
                            <img
                                className="rounded-xl object-cover w-full"
                                src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg"
                                alt="UI Development"
                            />
                            <img
                                className="rounded-xl object-cover w-full"
                                src="https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg"
                                alt="React Projects"
                            />
                            <img
                                className="rounded-xl object-cover w-full"
                                src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg"
                                alt="Team Collaboration"
                            />
                            <img
                                className="rounded-xl object-cover w-full"
                                src="https://images.pexels.com/photos/3623770/pexels-photo-3623770.jpeg"
                                alt="Innovative Solutions"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col justify-center items-center lg:items-start gap-10">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-3 items-center lg:items-start text-center lg:text-left">
                                    <h2 className="text-gray-900 text-4xl font-bold leading-normal">
                                        Crafting Digital Experiences That Inspire
                                    </h2>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        At DreamNest, every project is a journey where creativity meets technology. We
                                        design user-friendly websites and apps that not only look great but also drive
                                        results for our clients.
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-10 justify-center lg:justify-start">
                                    {/* Years of Experience */}
                                    <div className="flex flex-col items-center sm:items-start border-t-2 sm:border-t-0 sm:border-l-0 border-gray-300 pt-4 sm:pt-0 sm:pl-4">
                                        <h3 className="text-gray-900 text-3xl sm:text-4xl font-bold">10+</h3>
                                        <h6 className="text-gray-500 text-base leading-relaxed">Years of Experience</h6>
                                    </div>

                                    {/* Successful Projects */}
                                    <div className="flex flex-col items-center sm:items-start border-t-2 sm:border-t-0 sm:border-l-2 border-gray-300 pt-4 sm:pt-0 sm:pl-4">
                                        <h3 className="text-gray-900 text-3xl sm:text-4xl font-bold">45+</h3>
                                        <h6 className="text-gray-500 text-base leading-relaxed">Successful Projects</h6>
                                    </div>

                                    {/* Happy Clients */}
                                    <div className="flex flex-col items-center sm:items-start border-t-2 sm:border-t-0 sm:border-l-2 border-gray-300 pt-4 sm:pt-0 sm:pl-4">
                                        <h3 className="text-gray-900 text-3xl sm:text-4xl font-bold">80+</h3>
                                        <h6 className="text-gray-500 text-base leading-relaxed">Happy Clients</h6>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default AboutPage;
