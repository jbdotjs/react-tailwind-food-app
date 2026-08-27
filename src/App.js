import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Product from './components/Product';
import Footer from './components/Footer';
import logo from './logo.svg';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar logo={logo} />
      <main>
        <Hero />
        <Product />
      </main>
      <Footer />
    </div>
  );
}

export default App;