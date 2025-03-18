import React from 'react';

const PricingTable = () => {
  return (
    <div id="pricing" className="container mx-auto px-6 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white">Pricing Plans</h2>
        <p className="mt-4 text-xl text-gray-300">
          Choose the best plan that fits your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">Basic Plan</h3>
          <p className="text-xl text-gray-300 mb-4">$49/month</p>
          <ul className="text-gray-300">
            <li>Responsive Website</li>
            <li>Basic SEO Optimization</li>
            <li>Email Support</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">Pro Plan</h3>
          <p className="text-xl text-gray-300 mb-4">$99/month</p>
          <ul className="text-gray-300">
            <li>Advanced Website Features</li>
            <li>SEO & Marketing</li>
            <li>Priority Support</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">Enterprise Plan</h3>
          <p className="text-xl text-gray-300 mb-4">$199/month</p>
          <ul className="text-gray-300">
            <li>Custom Solutions</li>
            <li>Advanced Analytics</li>
            <li>Dedicated Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
