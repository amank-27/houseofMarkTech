import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold ">
          House of MarkTech
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <a href="#pricing" className=" hover:text-blue-600 transition duration-300 ease-in-out">
                Pricing
              </a>
            </li>
            <li>
              <a href="#services" className=" hover:text-blue-600 transition duration-300 ease-in-out">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className=" hover:text-blue-600 transition duration-300 ease-in-out">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
