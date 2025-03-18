import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-32 px-8 text-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8fDA%3D')", 
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-6xl font-bold mb-4">Welcome to House of MarkTech</h1>
        <p className="text-2xl mb-8">Your gateway to cutting-edge technology solutions.</p>
        <a
          href="#services"
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition duration-300"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
