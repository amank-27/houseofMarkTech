import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div id="contact" className="container mx-auto px-6 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white">Contact Us</h2>
        <p className="mt-4 text-xl text-gray-300">
          Have a question? Reach out to us, and we'll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 text-lg bg-gray-700 text-white rounded-lg border-2 border-gray-600"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 text-lg bg-gray-700 text-white rounded-lg border-2 border-gray-600"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-4 text-lg bg-gray-700 text-white rounded-lg border-2 border-gray-600"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
