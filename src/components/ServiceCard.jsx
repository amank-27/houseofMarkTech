import React from 'react';

const ServiceCard = () => {
  // Service data array
  const services = [
    {
      title: 'Web Development',
      description:
        "We specialize in building responsive and high-performance websites tailored to your business needs. Whether it's a simple landing page or a full-fledged e-commerce platform, we have the expertise to bring your vision to life.",
    },
    {
      title: 'Mobile App Development',
      description:
        "From iOS to Android, our mobile app development services deliver seamless, user-friendly applications that provide a rich user experience across all devices.",
    },
    {
      title: 'UI/UX Design',
      description:
        "Our design team focuses on creating intuitive, aesthetically pleasing, and user-centric interfaces. We ensure that your website or app not only looks great but is easy to navigate.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white">Our Services</h2>
        <p className="mt-4 text-xl text-gray-300">
          We offer a range of services designed to help your business grow and thrive online.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300 max-w-xs mx-auto"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-4">{service.title}</h3>
            <p className="text-lg text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
