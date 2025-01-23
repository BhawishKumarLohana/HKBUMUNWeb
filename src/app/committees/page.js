"use client"
import React from 'react'
import CommitteeBlock from '@/components/CommitteeBlock';
import Navbar from '@/components/Navbar';
const committeesData = [
    {
        name: 'United Nations Security Council ',
        logo: '/UNSC.png', // Replace with your logo path
        description: 'Focuses on sustainability and environmental protection initiatives.',
        backgroundImage:'/UNSC_Cover.JPG',
        link:"https://drive.google.com/file/d/1XV5_4RvO25MMSHEFuUtf5ud2W3ynkO9h/view?usp=sharing"
    },
    {
        name: 'United Nations Industrial Development Organization',
        logo: '/UNIDO.png', // Replace with your logo path
        description: 'Works on social justice and community outreach projects.',
        backgroundImage:'/UNIDO_Cover.JPG',
        link:'https://drive.google.com/file/d/1XV5_4RvO25MMSHEFuUtf5ud2W3ynkO9h/view?usp=sharing'
    },
    {
        name: 'United Nations Permanent Forum on Indigenous Issues',
        logo: '/UNPFII.png', // Replace with your logo path
        description: 'Analyzes economic policies and fiscal strategies.',
        backgroundImage:'/UNPFII_Cover.JPG',
        link:'https://drive.google.com/file/d/1XV5_4RvO25MMSHEFuUtf5ud2W3ynkO9h/view?usp=sharing'
    },
    {
        name: 'Association of the Southeast Asian Nations',
        logo: '/ASEAN.png', // Replace with your logo path
        description: 'Analyzes economic policies and fiscal strategies.',
        backgroundImage:'/ASEAN_Cover.JPG',
        link:'https://drive.google.com/file/d/1XV5_4RvO25MMSHEFuUtf5ud2W3ynkO9h/view?usp=sharing'
    },
    {
        name: 'Council of the European Union',
        logo: '/EUC.png', // Replace with your logo path
        description: 'Analyzes economic policies and fiscal strategies.',
        backgroundImage:'/EUC_Cover.JPG',
        link:'https://drive.google.com/file/d/1XV5_4RvO25MMSHEFuUtf5ud2W3ynkO9h/view?usp=sharing'
    },
    // Add more committees as needed
];
function page() {
    
  return (
    
    <div className="bg-gradient-to-br from-[#063363] to-[#f9e243] py-12">
    <div className="container mx-auto px-4 mt-24">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">
        Committees
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {committeesData.map((committee, index) => (
          <CommitteeBlock 
            key={index} 
            name={committee.name} 
            logo={committee.logo} 
            description={committee.description} 
            backgroundImage={committee.backgroundImage}
            onStudyGuideClick={committee.link}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default page