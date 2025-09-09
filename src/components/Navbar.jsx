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
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [mobileMenuOpen]);

    // Common handler for closing menu
    const handleMenuClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-white shadow-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Mobile: Hamburger on left */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-md text-black z-[9999999]  transition"
                        >
                            {mobileMenuOpen ? (
                                <RxCross1 className="w-7 h-7" />
                            ) : (
                                <CiMenuFries className="w-7 h-7" />
                            )}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-1 flex justify-center sm:justify-start">
                        <Link to="/" onClick={handleMenuClick}>
                            <div className="text-black font-bold text-xl border-2 px-3 py-1 rounded-full">
                                DreamNest
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div  className="hidden sm:flex sm:space-x-6">

                        <Link
                            to="/about"
                            className="px-3 py-2 rounded-md text-black font-medium hover:text-gray-600"
                        >
                            About
                        </Link>
                        <a
                            href="#projects"
                            className="px-3 py-2 rounded-md text-black font-medium hover:text-gray-600"
                        >
                            Projects
                        </a>
                        <a
                            href="#testimonials"
                            className="px-3 py-2 rounded-md text-black font-medium hover:text-gray-600"
                        >
                            Testimonials
                        </a>
                        <a
                            href="#contact"
                            className="px-3 py-2 rounded-md text-black font-medium hover:text-gray-600"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Profile (desktop only) */}
                    <div className="relative ml-4">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center text-white bg-black p-2 rounded-full hover:bg-gray-800 transition"
            >
              <FaRegUserCircle />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <span className="block px-4 py-2 text-gray-700">
                  Dilip Mali
                </span>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="sm:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-md">
                    <div className="absolute top-16 left-0 right-0 space-y-2 px-4 py-4 rounded-b-lg shadow-lg">
                        <a
                            href="/"
                            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/10 transition"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition"
                        >
                            Projects
                        </a>
                        <a
                            href="#testimonials"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition"
                        >
                            Testimonials
                        </a>
                        <a
                            href="#contact"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
