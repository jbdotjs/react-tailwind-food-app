import React from "react";

import rectangle_1 from '../assets/Rectangle_1.png';
import rectangle_2 from '../assets/Rectangle_2.png'; 


const Hero = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 font-sans flex flex-col items-center justify-start">
        <div>
          <p className="p-3 pt-12 font-bold text-lg text-gray-500">Food app</p>
        </div>
        <div>
          <p className="p-2 text-center font-bold text-4xl text-blue-800">
            Why stay hungry when you can order from Bella Onojie
          </p>
        </div>
        <div>
          <p className="p-4 pt-6 font-sans leading-10 text-2xl text-center text-gray-500">
            Download the bella onoje’s food app now on
          </p>
        </div>
        <div className="h-48 pt-7 flex flex-col justify-between items-center">
          <button
            className="pt-3 pb-3 pl-12 pr-12 bg-orange-500 text-center text-2xl font-semibold text-white rounded-full
                    focus:outline-none shadow-2xl ring-4 ring-orange-500
          "
          >
            Playstore
          </button>
          <button
            className="pt-3 pb-3 pl-11 pr-11 bg-gray-50 text-center text-2xl font-semibold text-orange-500 rounded-full
                    focus:outline-none shadow-2xl ring-4 ring-orange-500
          "
          >
            App Store
          </button>
        </div>
        <div className="pt-20 mb-20 h-screen w-screen flex flex-row justify-center items-start">
          <img className="absolute left-0" src={rectangle_1} alt=""/><img className="absolute right-0" src={rectangle_2} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
