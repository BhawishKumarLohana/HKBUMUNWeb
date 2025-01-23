import React from 'react';


function Card({ title, buttonColor, buttonText, description,imageUrl,buttonHref }) {
    const handleClick = () => {
        window.location.href = buttonHref; // Replace with your prop for the href
    };
    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                    className="relative min-h-[50vh] max-h-[80vh] sm:max-h-[60vh] bg-cover bg-center" 
                    style={{ backgroundImage: `url(${imageUrl})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative z-10 flex flex-col justify-center items-center text-center text-white">
                        <h2 className="text-2xl sm:text-5xl md:text-5xl font-bold mt-40">{title}</h2>
                        <p className="text-sm sm:text-md md:text-lg max-w-lg sm:max-w-2xl mt-5">
                            {description}
                        </p>
                        <button 
                            onClick={handleClick}
                            className={`mt-4 px-4 py-2 ${buttonColor} hover:bg-opacity-75 rounded-lg text-sm md:text-lg font-semibold transition`}
                        >
                            {buttonText}
                        </button>
                     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;