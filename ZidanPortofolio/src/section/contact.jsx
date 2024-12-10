import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#FFF6E7] py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
          Let's Design Together
        </h1>
        <p className="text-gray-600 mb-4 max-w-lg mx-auto text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 py-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 w-full sm:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg mt-4 sm:mt-0 sm:ml-4">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
