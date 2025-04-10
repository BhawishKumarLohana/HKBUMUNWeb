"use client"

import React from 'react';

const Day = ({ title, description, date, activities = [] }) => {
  return (
    <div className="w-full max-w-3xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#063363]/80 to-[#f9e243]/60 text-white p-8 text-center rounded-t-2xl">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ fontFamily: '"Merriweather", serif' }}
        >
          {title}
        </h2>
        <p className="text-md sm:text-lg mt-2 text-yellow-200 font-semibold">{date}</p>
        <p className="text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto text-white/90">
          {description}
        </p>
      </div>

      {/* Activities */}
      {activities.length > 0 && (
        <div className="px-6 py-8">
          <h3 className="text-xl font-semibold text-white mb-4">Activities</h3>
          <div className="space-y-4">
            {activities.map((activity, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 border-l-4 border-yellow-300 pl-4 py-2 hover:bg-white/10 transition rounded-md"
              >
                <span className="text-sm font-semibold text-yellow-200 w-24">{activity.time}</span>
                <span className="text-white text-md">{activity.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Day;
