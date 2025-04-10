"use client";
import React from 'react';
import Day from '@/components/Day';

function Page() {
  const days = [
    {
      title: "Day 1",
      date: "April 11th",
      description: "Opening Ceremony & Social Night",
      activities: [
        { time: "06:00 - 06:30PM", name: "Registrations" },
        { time: "06:30 - 07:30PM", name: "Opening Ceremony" },
        { time: "07:30 - 08:30PM", name: "First Committe Session(European Council)" },
        { time: "10:00 - Late", name: "Causal Social Night" },
      ],
    },
    {
      title: "Day 2",
      date: "April 12th",
      description: "Committee Sessions",
      activities: [
        { time: "09:00 - 10:30AM", name: "Committee Session" },
        { time: "10:30 - 11:00AM", name: "Coffee Break" },
        { time: "11:00 - 12:30PM", name: "Committee Session" },
        { time: "12:30 - 02:00PM", name: "Lunch Break" },
        { time: "03:30 - 04:00PM", name: "Committee Session" },
        { time: "04:00 - 05:30PM", name: "Coffee Break" },
        { time: "06:00 - 07:00PM", name: "Afternoon Social"},
      ],
    },
    {
      title: "Day 3",
      date: "April 13th",
      description: "Closing Cereming",
      activities: [
        { time: "10:00 - 12:00PM", name: "Committee Session" },
        { time: "12:00 - 02:00PM", name: "Lunch Break" },
        { time: "02:00 - 03:30PM", name: "Closing Ceremony" },
      ],
    },
  ];

  return (
    <div>
      <div className="relative w-full min-h-screen bg-gradient-to-br from-[#063363] to-[#f9e243] flex flex-col items-center p-8 space-y-12">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-20">
          Schedule
        </h1>

        {/* Day Components */}
        <div className="w-full max-w-6xl space-y-8">
          {days.map((day, index) => (
            <Day
              key={index}
              title={day.title}
              date={day.date}
              description={day.description}
              activities={day.activities}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
