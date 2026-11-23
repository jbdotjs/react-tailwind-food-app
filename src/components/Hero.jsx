import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-6xl mx-auto">
      <div className="flex-1 space-y-6">
        <span className="bg-orange-100 text-orange-600 font-semibold px-3 py-1 rounded-full text-sm">
          Entrega Rápida & Saborosa
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          As melhores <span className="text-orange-500">Delícias</span> entregues na sua porta
        </h1>
        <p className="text-gray-600 text-lg">
          Peça sua comida favorita com praticidade e rapidez. Qualidade garantida do pedido até a sua casa.
        </p>
        <div className="flex space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all">
            Fazer Pedido
          </button>
          <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-all">
            Ver Cardápio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;