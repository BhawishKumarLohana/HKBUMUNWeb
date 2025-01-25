"use client"
import AnimatedNumbers from '@/components/AnimatedNumbers'
import Navbar from '@/components/Navbar'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image';
const ReadMoreButton = ({ isExpanded, onClick }) => (
  <button
    onClick={onClick}
    className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 focus:outline-none transition"
  >
    {isExpanded ? 'Show Less' : 'Read More'}
  </button>
);

const excoMembers = [
  {
    name: 'Clothilde Mazurier',
    position: 'Secretary General',
    message: 'If you ask me to travel the world to do MUN — I’ll certainly say yes !',
    extendedMessage: 'A Real Mun-oholic, I could participate in countless conferences with my friends and still have the same unflagging enthusiasm.',
    image: '/CM.jpg',
  },
  {
    name: 'Talilah Mimoun',
    position: 'Deputy Secretary General',
    message: 'I chose 3 pillars for my life: eat, travel and sleep',
    extendedMessage: 'Hi! My name is Talilah and I am the DSG of the HKBUMUN :) I am a French international student here at HKBU, studying social sciences and majoring in Global and China Studies. A few things about me is that I love to travel and love at least as much to eat good food!',
    image: '/TM.jpg',
  },
  {
    name: 'Aurèle Mourey',
    position: 'USG Academics',
    message: ' “Those who know, do. Those that understand, teach.” - Aristotle',
    extendedMessage: 'HI everyone. My name is Aurèle, the USG Academics for the Academic year 2024-2025 at HKBU MUN. I am always thrilled to discover more about diplomacy and to meet new people! ',
    image: '/AM.jpg',
  },
  {
    name: 'Danil Shishkin',
    position: 'USG Finance & Logistics',
    message: 'I’m Danil, USG Finance & Logistics in HKBU MUN',
    extendedMessage: ' My word for the introduction is that this place is not only for prospective politicians, but for everyone interested in learning and growing. HKBU MUN welcomes everyone!',
    image: '/DS.jpg',
  },
  {
    name: 'Bhawish Kumar',
    position: 'USG Partnerships',
message: 'I Code and Do Model United Nations!!',
extendedMessage: 'In fact, I created this website as well! 😄 I enjoy cycling, traveling, spending time with friends, and embracing my inner nerd.',
    image: '/BK.jpg',
  },
  {
    name: 'Eva Dubost',
    position: 'USG Communication',
    message: 'Another frenchie in HongKong !                                                                 ',
    extendedMessage: 'Hi, I’m Eva, a first year international student of BEPHK dual degree Sciences Po Bordeaux/ HKBU, majoring in Global and China Studies (GCS).',
    image: '/ED.jpg',
  },
  
  {
    name: 'Yanis Benazzouz',
    position: 'USG Digital Media',
    message: 'Always motivated and committed, across the globe and across disciplines !',
    extendedMessage: "I'm Yanis, USG Digital Media at HKBUMUN. I'm a first-year double-degree student between HKBU (in Hong Kong) and Sciences Po Bordeaux (in France). I think this much is enough",
    image: '/YB.jpg',
  },
  {
    name: 'Hoi Kit Adrian Mok',
    position: 'USG Delegate Services',
    message: ' I love challenges as they help me to grow and become a better person :) ',
    extendedMessage: ' Hello everyone! I am Adrian, USG Delegate at HKBUMUN! If you have any questions regarding the activities of our club, feel free to ask me!',
    image: '/AMM.jpg',
  },
  
  {
    name: 'Shin Sum Assumpta Chum',
    position: 'USG Branding and Content',
    message: 'Hey you! Yes you, the one scrolling through the website now! You see those photos on the page? Beautiful, isn"t it?',
    extendedMessage: 'Those are my work, and you may know me as Assumpta, the USG Branding and Content for the academic year 2024-2025 at HKBUMUN! Happy to have you here, cheers! ',
    image: '/AC.jpg',
  },
  // Add other members with similar structure...
];

function about() {
  const [showMore, setShowMore] = useState({}); 
  const handleToggle = (index) => {
    setShowMore((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    
<div>
      <div className="relative w-full min-h-screen bg-gradient-to-br from-[#063363] to-[#f9e243] flex flex-col items-center p-8 space-y-12">
        {/* Historical Information Section */}
        <section className="py-28 w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Historical Overview
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: "Conferences Organized", counter:"1"},
              { label: "Exco Members", counter:"16" },
              { label: "Students Impacted", counter:"247" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg w-72 transition-transform hover:scale-105"
              >
                <h3 className="text-5xl font-bold text-white">
                  <AnimatedNumbers count={item.counter}/>
                </h3>
                <p className="text-lg text-gray-200 mt-4">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Exco Members Section */}
<section className="py-16 w-full bg-gradient-to-tr from-white/10 to-white/5 rounded-xl shadow-lg">
  <h1 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
    Exco Members
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
    {excoMembers.map((member, index) => (
      <div
        key={index}
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
        className="bg-white/20 p-8 rounded-xl shadow-lg w-100 transition-transform hover:scale-105"
      >
        <Image
          src={member.image}
          alt={member.name}
          width={200}
          height={200}
          className="w-52 h-52 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="text-sm text-gray-300 mb-4">{member.position}</p>
        <p className="text-lg text-gray-100">
          {showMore[index] ? member.extendedMessage : member.message}
        </p>
        <ReadMoreButton
          isExpanded={showMore[index]}
          onClick={() => handleToggle(index)}
        />
      </div>
    ))}
  </div>
</section>

      </div>
    </div>
  )
}

export default about