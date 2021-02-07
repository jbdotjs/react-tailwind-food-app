import React from "react";

const BottomLead = ({actionText, description, mainActionText, extraActionText}) => {
  return (
    <div className="h-screen bg-blue-800 flex flex-col justify-center">
      <p className="p-5 text-5xl leading-normal text-center text-white font-bold">{actionText}</p>
      <p className="pl-12 pr-12 leading-8 text-lg text-center text-gray-300">{description}</p>
      <div className="h-48 pt-5 flex flex-row justify-center items-center">
        <button
          className="pt-3 pb-3 pl-7 pr-7 mr-2 bg-orange-500 text-center text-2xl font-semibold text-white rounded-full
                    focus:outline-none shadow-2xl ring-2 ring-orange-500
          "
        >
          Playstore
        </button>
        <button
          className="pt-3 pb-3 pl-7 pr-7 ml-2 text-center text-2xl font-semibold text-white rounded-full
                    focus:outline-none shadow-2xl ring-2 ring-gray-300
          "
        >
          App Store
        </button>
      </div>
    </div>
  );
};

export default BottomLead;
