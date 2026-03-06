'use client';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8FD] pt-16 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center relative z-10">
        
        {/* Left Content */}
        <div className="text-left">
          <h1 className="text-6xl md:text-7xl font-bold text-[#25324B] leading-tight mb-6">
            Discover <br /> 
            more than <br />
            <span className="text-[#26a4ff] relative inline-block">
              5000+ Jobs
              {/* Hand-drawn blue underline effect from your screenshot */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 322 20" fill="none">
                <path d="M3 17C107.5 4.5 210.5 4.5 319 17" stroke="#26A4FF" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-[#515B6F] text-lg max-w-md mb-10 leading-relaxed">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* Search Bar matching screenshot 230813.png */}
          <div className="bg-white p-4 shadow-sm flex flex-col md:flex-row items-center gap-4 w-full lg:w-[110%] relative z-20">
            <div className="flex items-center flex-1 px-2 border-b md:border-b-0 md:border-r border-gray-200 w-full">
              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Job title or keyword" className="outline-none w-full text-[#25324B] py-2" />
            </div>
            
            <div className="flex items-center flex-1 px-2 w-full">
              <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <select className="outline-none w-full text-[#25324B] bg-transparent py-2 appearance-none cursor-pointer">
                <option>Florence, Italy</option>
              </select>
            </div>

            <button className="bg-[#4640DE] text-white px-10 py-3 font-bold hover:bg-[#3b36bc] transition whitespace-nowrap">
              Search my job
            </button>
          </div>

          <p className="text-sm text-[#515B6F] mt-4">
            <span className="opacity-70">Popular :</span> <span className="font-semibold">UI Designer, UX Researcher, Android, Admin</span>
          </p>
        </div>

        {/* Right Content: Image */}
        <div className="hidden md:flex justify-end relative">
        
          <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 border-2 border-blue-400 rotate-45 transform translate-x-20 -translate-y-10"></div>
          </div>
          <img 
            src="/hero-woman.jpg" 
            alt="Hero Professional" 
            className="max-w-md lg:max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}