import React from 'react';

const products = [
  {
    name: 'Hambúrguer Artesanal',
    description: 'Pão brioche, blend bovino de 180g, queijo cheddar e molho da casa.',
    price: 'R$ 32,90',
  },
  {
    name: 'Pizza Margherita',
    description: 'Molho de tomate italiano, muçarela de búfala e manjericão fresco.',
    price: 'R$ 54,90',
  },
  {
    name: 'Salada Caesar',
    description: 'Alface romana, frango grelhado, croutons e parmesão.',
    price: 'R$ 27,50',
  },
  {
    name: 'Açaí Especial',
    description: 'Açaí cremoso com granola, banana, morango e leite em pó.',
    price: 'R$ 21,00',
  },
];

const ProductCard = ({ name, description, price }) => (
  <div className="flex flex-col justify-between p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div>
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
    <div className="flex items-center justify-between mt-6">
      <span className="text-lg font-semibold text-orange-500">{price}</span>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition-all">
        Adicionar
      </button>
    </div>
  </div>
);

const Product = () => {
  return (
    <section id="product" className="px-6 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Nosso <span className="text-orange-500">Cardápio</span>
      </h2>
      <p className="mt-2 mb-10 text-center text-gray-600">
        Escolha seu prato favorito e receba em casa.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Product;
