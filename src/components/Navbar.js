import React from "react";

const Navbar = ({logo}) => {
  return (
    <div className="flex flex-row items-center justify-between h-28">
      <a href="/" className="pl-7 logo lg:ml-10">
        <img height="65%" width="65%" src={logo} alt="logo" />
      </a>
      {
          window.screen.availWidth<500 ?
          <div className="hamburger pr-7">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.6" d="M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20 0.596954 20 1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103 2.06971 0.124103 1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667 20 7.26362 20 8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8ZM0 14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20 14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667Z" fill="#737373"/></svg>
          </div>
          
          :

          <div className="flex justify-around w-2/5 mr-12">
              <a href="#home" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Home</a>
              <a href="#product" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Product</a>
              <a href="#faq" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Faq</a>
              <a href="#contact" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Contact</a>
          </div>

      }
    </div>
  );
};

export default Navbar;
