"use client";
import { useState } from "react";

const Hero = () => {
    const [hovered, setHovered] = useState(false);
    const handleClick = () => {
        window.location.href = "https://mymun.com/conferences/hkbumun-2025"; // Replace with your prop for the href
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
            {/* Background Image */}
            <img 
                src="/Cover.png" 
                alt="Cover" 
                className="absolute inset-0 object-cover w-full h-full"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
            
{/* Hero Content */}
<div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-8 w-full h-screen">
    <h1
        className="text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg"
        style={{ fontFamily: '"Playfair Display", serif' }}
    >
        Hong Kong Baptist University <br />
    </h1>
    <h2
        className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg"
        style={{ fontFamily: '"Playfair Display", serif' }}
    >
        Model United Nations
    </h2>

    <p
        className="mt-5 text-lg md:text-xl lg:text-2xl max-w-2xl drop-shadow-lg italic"
        style={{ fontFamily: '"Merriweather", serif' }}
    >
        First International MUN in Hong Kong
    </p>
    <p
        className="mt-2 text-sm md:text-base lg:text-lg drop-shadow-md"
        style={{ fontFamily: '"Roboto", sans-serif' }}
    >
        Apr 11 - Apr 13, 2025
    </p>

    <button
        onClick={handleClick}
        className="mt-8 px-6 md:px-8 py-3 bg-blue-600 text-sm md:text-lg font-semibold rounded-lg shadow-lg transition-transform hover:scale-110 hover:bg-blue-700"
        style={{ fontFamily: '"Roboto", sans-serif' }}
    >
        Register Now
    </button>
</div>


            {/* Scroll Indicator */}
            <div className="absolute bottom-6 w-full flex justify-center z-10 animate-bounce">
                <a
                    href="#about"
                    className="text-white text-sm md:text-base font-semibold"
                >
                    ↓ Scroll Down
                </a>
            </div>
        </div>
    );
};

export default Hero;
