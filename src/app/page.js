"use client"
import Image from "next/image";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "@/components/Card"

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
                <p>
                    <strong>Dearest Delegates and Faculty Advisors,</strong>
                </p>
                <p>
                It is an honor and a privilege that I get to welcome you all to the  
                    <em> Second edition of Hong Kong
                    Baptist University International Model United Nations</em> 
                    11th to 13th of April, 2025 in Hong Kong, SAR China.
                </p>
                <p>
                My name is Clothilde Mazurier, a second-year student at Hong Kong Baptist University and
Sciences Po Bordeaux enrolled in a double degree program in Global and China Studies. I am
delighted to serve as your Secretary-General for the upcoming iteration of our conference. My
MUN journey has been transformative, spanning roles from delegate, chair, to conference
organizer. In 2024, I served as Under-Secretary-General for Academics at the inaugural France
Model United Nations, a milestone that deepened my belief in the power of academic discourse
to inspire change. My tenure in Asia, including chairing in Indonesia, Thailand, and Malaysia,
and participating in Asia Youth International Model United Nations, gifted me with a
community of like-minded individuals united by the passion for diplomacy. These experiences
taught me invaluable lessons in leadership, cross-cultural understanding, and negotiation, with
MUN transcending formal debate to become a confluence of diverse minds. Beyond MUN, I
am honored to undertake the position of Secretary-General of the European Civic Service, a
platform dedicated in fostering professional opportunities for young adults across Europe. Co-
organizing the Paris Youth International Forum in May 2024, with over 300 global participants,
ambassadors, and professors, underscored the vital role youth must play in shaping solutions
for the challenges of our time
                </p>
                <p>
                HKBUMUN 2025 stands as a beacon of inclusivity and opportunity, being the first international
MUN conference in Hong Kong open to both university and high school students. HKBUMUN
exemplifies this spirit of unity, offering participants the opportunity to join a truly
interconnected community driven by a collective pursuit of solutions to global challenges. This
initiative is a testament to the importance of uniting young minds and empowering them to
engage with the pressing global matters of our era. Since its revival following the disruptions
of the COVID-19 pandemic, HKBUMUN has embarked on a remarkable journey, evolving
into a vibrant community that organizes diverse events in collaboration with multiple
organisations and celebrates the perspectives of individuals from all walks of life. This growth
reflects the resilience, creativity, and determination of the youth committed to making an
indelible impact on the world stage. There are a multitude of challenges that face our world
today, and, as rising leaders in this ever tumultuous world, it is the mission of HKBUMUN to
help prepare our delegates with the skills that they need to succeed, from public speaking and
substantive research to leadership and diplomacy. In each delegate’s preparation for and
participation in the conference, they will learn how to work with others to problem solve and
develop solutions for the world’s most pressing and complicated problems.
                </p>
                <p>
                This year’s conference, under the theme Unity in Action: Forging Tomorrow’s Solutions
Through International Cooperation, promises to be a unique and exhilarating experience. It
will be marked by academic excellence, spirited collaboration, and a commitment to fostering
global unity. As we embark on this journey together, I am confident that HKBUMUN 2025
will leave a lasting legacy for all who take part.
                </p>
                <p>
                Should you have any inquiries or require further information, please do not hesitate to reach
out to us at hkbumunclub@gmail.com. I eagerly anticipate welcoming you to what promises
to be an extraordinary gathering of minds and ideas
                    to <a href="mailto:hkbumunclub@gmail.com" className="text-blue-600 hover:underline">hkbumunclub@gmail.com</a> 
                    I eagerly anticipate welcoming you to what promises
to be an extraordinary gathering of minds and ideas
                </p>
                <p>
                
                </p>
                <p className="font-semibold text-gray-900">
                With the Warmest Gratitude, <br />
                Clothilde Jeanne Mazurier <br />
                    <span className="text-blue-600">Secretary-General</span>
                </p>
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
