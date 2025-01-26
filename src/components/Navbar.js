"use client";
import React, { useState } from "react";

function Navbar() {
    const [isOpen, SetIsOpen] = useState(false);
    return (
        <div>
            {/* Navbar */}
            <nav
                style={{ backgroundColor: "#063363", color: "#f9e243" }}
                className="fixed w-full top-0 left-0 z-50 flex justify-between items-center p-3"
            >
                <div className="flex items-center space-x-2">
                    <img src="/logo.jpeg" alt="Logo" className="h-14" />
                    <div className="flex flex-col">
                        <a
                        href="/"
                        className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
                        style={{
                            color: "#f9e243",
                            fontFamily: '"Playfair Display", serif',
                        }}
                        >
                        HKBUMUN
                        </a>
                        <span
                        className="text-sm italic tracking-wide"
                        style={{
                            color: "#d1d5db", // light gray for a subtle effect
                            fontFamily: '"Playfair Display", serif',
                        }}
                        >
                        Together We Go Far
                        </span>
                    </div>
                </div>

            
                <div className="hidden lg:flex flex-grow justify-end space-x-8">
                <a
                        href="/committees"
                        style={{ color: "#f9e243",
                         }}
                        className="hover:text-[#ffffff] transition-colors duration-300 text-xl font-bold"
                    >
                        Committees
                    </a>
                <a
                        href="/about"
                        style={{ color: "#f9e243",
                         }}
                        className="hover:text-[#ffffff] transition-colors duration-300 text-xl font-bold"
                    >
                        About
                    </a>
                    <a
                        href="/resources"
                        style={{ color: "#f9e243",
                                
                         }}
                        className="hover:text-[#ffffff] transition-colors duration-300 text-xl font-bold"
                    >
                        Resources
                    </a>
                    
                    
                </div>
                <div className="lg:hidden">
                    <button
                        onClick={() => SetIsOpen(!isOpen)}
                        style={{ color: "#f9e243" }}
                        className="focus:outline-none"
                        aria-label="Toggle menu"
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
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-[#063363] transition-transform transform translate-x-0 duration-300 ease-in-out lg:hidden">
                    <div className="bg-[#063363] h-full p-10 flex flex-col space-y-12 shadow-lg">
                        <button
                            onClick={() => SetIsOpen(!isOpen)}
                            style={{ color: "#f9e243" }}
                            className="focus:outline-none"
                            aria-label="Toggle menu"
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
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                        <a
                            href="/"
                            style={{ color: "#f9e243" }}
                            className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
                        >
                            Home
                        </a>
                        <a
                            href="/committees"
                            style={{ color: "#f9e243" }}
                            className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
                        >
                            Committees
                        </a>
                        <a
                            href="/about"
                            style={{ color: "#f9e243" }}
                            className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
                        >
                            About
                        </a>
                        <a
                            href="/resources"
                            style={{ color: "#f9e243" }}
                            className="hover:text-[#ffffff] transition-colors duration-300 text-2xl font-bold"
                        >
                            Resources
                        </a>
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
