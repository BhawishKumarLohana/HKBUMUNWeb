"use client";

import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  const handleClick = () => {
    window.location.href = "https://drive.google.com/file/d/1Unk8GJha-W7k2nZPvPEgCMRagjQ6QWHl/view"; // Replace with your prop for the href
};
  const resources = [
    {
      title: "The S.M.I.L.E. Principle",
      description:
        "The S.M.I.L.E. Principle is a guidebook written by the Direction of Academics of HKBU MUN to provide MUN delegates with knowledge and pieces of advice on how to be the best delegate they can. It revolves around five different sets of skills, each one characterized by a letter and revolving about a specific aspect of MUN.",
      thumbnail: "/SMILE.png",
      downloadLink: "https://drive.google.com/file/d/1Unk8GJha-W7k2nZPvPEgCMRagjQ6QWHl/view",
    },
    {
      title: "Online Academic Resources",
      description:
        "Those are five of our Online Academic Resources that review in detail the main theoretical elements of MUN and give advice on how to properly work on those. It aims to provide delegates with in-depth and thorough knowledge of what they will face before and during Committee Sessions, and how to do it well. ",
      thumbnail: "/OAR.png",
      downloadLink: "https://drive.google.com/drive/folders/1uoofzWCJCITtbmEdQeDg2Z65z83te-sk",
    },
    {
      title: "Rules of Procedure",
      description: "This document contains the Rules of Procedure used by HKBU MUN when organizing Conferences and Training Sessions.",
      thumbnail: "/ROP.png",
      downloadLink: "https://drive.google.com/file/d/1N8EZDFKqA-jWrRH63rWafW8LJRF5Wq-T/view?usp=sharing",
    },
  ];

  return (
    <div>
      <div className="relative w-full min-h-screen bg-gradient-to-br from-[#063363] to-[#f9e243] flex flex-col items-center p-8 space-y-12">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          Explore Our Resources
        </h1>

        {/* Resource Sections */}
        <div className="w-full max-w-6xl space-y-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`relative group w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-lg overflow-hidden shadow-lg`}
            >
              {/* Background Image */}
              <div
                className="relative h-64 md:h-80 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url(${resource.thumbnail})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300"></div>
              </div>

              {/* Content and Button */}
              <div className="relative z-10 flex flex-col justify-center items-center md:items-start text-white p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-md space-y-6">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                  {resource.title}
                </h2>
                {/* Description */}
                <p className="text-sm md:text-lg text-center md:text-left text-gray-200">
                  {resource.description}
                </p>
                {/* Download Button */}
                <a
                  href={resource.downloadLink}
                  download
                  className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg text-sm md:text-lg transition-all transform hover:scale-105 hover:bg-blue-700 focus:outline-none"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
