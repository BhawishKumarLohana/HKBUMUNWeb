"use client";

import React from "react";
import Image from "next/image";

function CommitteeBlock({ name, logo, description,onStudyGuideClick, backgroundImage }) {
    return (
        <div
            className="relative border rounded-lg mb-4 transform transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
           
            style={{
                padding: '2.5rem', // Padding for inner content
            }}
        >
            {/* Background image with blur */}
            <div
                className="absolute inset-0 rounded-lg"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(1px)', // Blur effect only on the background image
                    zIndex: 0, // Send this div to the back
                }}
            ></div>
            <div className="relative z-10 flex justify-center items-center mb-4">
                <Image
                    src={logo}
                    alt={`${name} Logo`}
                    width={100}
                    height={100}
                    className="rounded-full transition-transform duration-300 hover:scale-110"
                />
            </div>
            <div className="relative z-10 text-center">
                <h2 className="text-xl font-bold text-white hover:text-blue-600 transition-colors duration-300">
                    {name}
                </h2>
                <p className="text-white mt-2 transition-colors duration-300 hover:text-gray-300">
                    {description}
                </p>
            </div>
            <div className="relative mt-6 flex justify-center z-10">
                <button
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold transition hover:bg-blue-700 focus:outline-none"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the parent `onClick`
                        window.location.href=onStudyGuideClick
                    }}
                >
                    Study Guide
                </button>
            </div>
        </div>
    );
}

export default CommitteeBlock;