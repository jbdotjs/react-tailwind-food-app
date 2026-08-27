import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          &copy; 2026 - Food Delivery App | Atividade Prática SENAI
        </p>
        <p className="text-sm font-semibold text-orange-400 mt-2 sm:mt-0">
          Desenvolvido por Lívia Ghirardi
        </p>
      </div>
    </footer>
  );
};

export default Footer;