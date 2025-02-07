"use client"
import Image from "next/image";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "@/components/Card"
import SecGenMessage from "@/components/SecGenMessage"

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <Hero />
{/* Letter from the Secretary-General */}

<section className="py-0 flex justify-center">
    <div className="bg-gradient-to-br from-[#063363] to-[#f9e243] py-8 w-full flex justify-center">
        <div className="max-w-[calc(100%-50px)] md:max-w-5xl w-full bg-white bg-opacity-80 border border-gray-300 shadow-lg rounded-lg px-8 md:px-12 py-12 backdrop-blur-md">
            <h2
                className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 text-center"
                data-aos="fade-right"
                style={{ fontFamily: '"Merriweather", serif' }}
            >
                Letter from the Secretary-General
            </h2>
            <div className="text-left text-lg md:text-xl text-gray-800 leading-relaxed font-serif space-y-6" data-aos="fade-up">
                <SecGenMessage/>
            </div>
        </div>
    </div>
</section>

 {/* Cards*/}
<div className="bg-gradient-to-br from-[#063363] to-[#f9e243] py-8">
    <div className="max-w-[calc(100%-50px)] mx-6 grid gap-6">
        {/* About Us Card */}
        <Card  title="About Us"  buttonColor="bg-blue-600" 
             buttonText="Learn More" 
            description="Delve into the rich history of the HKBUMUN and meet the passionate individuals who drive its mission and activities."
            imageUrl="/1.jpg" 
            buttonHref="/about"
           />
       
        {/* Committees Card */}
        <Card  title="Committees"  buttonColor="bg-yellow-600" 
             buttonText="Committee List" 
            description="Discover HKBUMUN committees, fostering future global leaders through collaboration and dialogue."
            imageUrl="/2.JPG"
            buttonHref="/committees"
             />
         
         {/* Resources Card */}
         <Card  title="Resources"  buttonColor="bg-green-600" 
             buttonText="Explore Resources" 
            description="Unlock your potential with resources from the Direction of Academics, designed to equip you with the skills and knowledge for becoming the best delegate." 
            imageUrl="4.jpg"
            buttonHref="/resources"
            
            />
    
    </div>
</div>









        </div>
    );
}
