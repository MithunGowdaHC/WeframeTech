import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-x-6 md:space-x-6 mt-20 bg-gray-50 p-4 rounded-2xl">
      {/* Left Section: Image */}
      <div className="overflow-hidden rounded-2xl w-full md:w-[700px] h-full md:h-[300px]">
        <Image
          src="/images/banner.png"
          alt="Banner Image"
          width={700}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Section*/}
      <div className="flex bg-[#FFF3F9] p-10 flex-col justify-between space-y-4 rounded-xl w-full md:w-[818px] h-auto md:h-[300px]">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          S&apos;inscrire & économiser <span className="text-[#5CD2DD]">10%</span>
        </h1>
        <p className="text-sm md:text-base text-[#BDA2B0]">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
        </p>
        <div className="flex items-center w-full">
          <input
            type="text"
            placeholder="john@doe.com"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-[#5CD2DD] flex items-center gap-3 text-white text-[18px] rounded-md ml-2">
            S’INSCRIRE
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.58331 8.00004H14.4166M14.4166 8.00004L7.99998 1.58337M14.4166 8.00004L7.99998 14.4167" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;