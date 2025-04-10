"use client"
import React from 'react'
import CommitteeBlock from '@/components/CommitteeBlock';
import Navbar from '@/components/Navbar';
const committeesData = [
    {
        name: 'United Nations Security Council ',
        logo: '/UNSC.png', // Replace with your logo path
        description: 'Addresses global peace, security challenges, and crisis management through diplomatic solutions.',
        backgroundImage:'/UNSC_Cover.JPG',
        link:"https://drive.google.com/file/d/1BvJ4k_boOhSDT7xdBUs9_YlhRO7CwoSG/view?usp=sharing"
    },
    {
        name: 'United Nations Industrial Development Organization',
        logo: '/UNIDO.png', // Replace with your logo path
        description: 'Promotes inclusive and sustainable industrial development to foster economic growth and innovation.',
        backgroundImage:'/UNIDO_Cover.JPG',
        link:'https://drive.google.com/file/d/1igehIq5ZixqFCJFW40N_ppWuBTZUpkQn/view?usp=sharing'
    },
    {
        name: 'United Nations Permanent Forum on Indigenous Issues',
        logo: '/UNPFII.png', // Replace with your logo path
        description: 'Focuses on addressing indigenous peoples’ rights, culture, and sustainable development.',
        backgroundImage:'/UNFII_Cover.jpg',
        link:'https://drive.google.com/file/d/1_NNE7Spxyz9nXSpcZxUt1Qxx3_IhPicb/view?usp=sharing'
    },
    {
        name: 'Association of the Southeast Asian Nations',
        logo: '/ASEAN.png', // Replace with your logo path
        description: 'Promotes regional stability, economic growth, and cultural exchange among Southeast Asian nations.',
        backgroundImage:'/ASEAN_Cover.JPG',
        link:'https://drive.google.com/file/d/1gpfRxuFzi5yipu9jD_kk95nR7Zzy2REA/view?usp=sharing'
    },
    {
        name: 'Council of the European Union',
        logo: '/EUC.png', // Replace with your logo path
        description: 'Focuses on coordinating policies and decisions among European Union member states.',
        backgroundImage:'/EUC_Cover.JPG',
        link:'https://drive.google.com/file/d/1eqNru32x1v5nebRyiqCvIn0ytxeJI39s/view?usp=sharing'
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