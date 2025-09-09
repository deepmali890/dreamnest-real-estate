import React, { useEffect, useRef, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const menuRef = useRef(null);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [mobileMenuOpen]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMobileMenuOpen(false);
            }
        };
        if (mobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [mobileMenuOpen]);

    return (
        <nav className="fixed w-full z-50 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Mobile: Hamburger on left */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-md text-black hover:bg-white/10"
                        >
                            {mobileMenuOpen ? <RxCross1 className="w-7 h-7" /> : <CiMenuFries className="w-7 h-7" />}
                        </button>
                    </div>

                    {/* Logo: Center on mobile, left on desktop */}
                    <div className="flex-1 flex justify-center sm:justify-start">
                        <Link to="/">
                            <div className="text-black font-bold text-xl border-2 px-3 rounded-full">
                                DreamNest
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex sm:space-x-6">
                        <Link to="/" className="px-3 py-2 rounded-md cursor-pointer text-white font-medium bg-black">
                            Home
                        </Link>
                        <Link to="/about" className="px-3 py-2 rounded-md text-black font-medium hover:text-gray-500">
                            About
                        </Link>
                        <a href="#projects" className="px-3 py-2 rounded-md text-black font-medium hover:text-gray-500">
                            Projects
                        </a>
                        <a href="#testimonials" className="px-3 py-2 rounded-md text-black font-medium hover:text-gray-500">
                            Testimonials
                        </a>
                        <a onClick={() => setMobileMenuOpen(false)} href="#contact" className="block px-3 py-2 rounded-md text-black font-medium hover:text-gray-500">
                            Contact
                        </a>
                    </div>

                    {/* Profile (desktop only) */}
                    <div className="relative ml-4">
                        <button
                            onClick={() => setProfileOpen(!profileOpen)}
                            className="flex items-center text-white bg-black p-1 font-semibold rounded-full"
                        >
                           <FaRegUserCircle />
                        </button>
                        {profileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                <span className="block px-4 py-2 text-gray-700">Dilip Mali</span>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Sign out
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div ref={menuRef} className="sm:hidden bg-white/20 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link onClick={() => setMobileMenuOpen(false)} to="/" className="block px-3 py-2 rounded-md text-white font-medium bg-black">
                            Home
                        </Link>
                        <Link onClick={() => setMobileMenuOpen(false)} to="/about" className="block px-3 py-2 rounded-md text-black font-medium">
                            About
                        </Link>
                        <a onClick={() => setMobileMenuOpen(false)} href="#" className="block px-3 py-2 rounded-md text-black font-medium hover:bg-white/10 hover:text-white">
                            Projects
                        </a>
                        <a onClick={() => setMobileMenuOpen(false)} href="#" className="block px-3 py-2 rounded-md text-black font-medium hover:bg-white/10 hover:text-white">
                            Testimonials
                        </a>
                        <a onClick={() => setMobileMenuOpen(false)} href="#" className="block px-3 py-2 rounded-md text-black font-medium hover:bg-white/10 hover:text-white">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>

    );
};

export default Navbar;
