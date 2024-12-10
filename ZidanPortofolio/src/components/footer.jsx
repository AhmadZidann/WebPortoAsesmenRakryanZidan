import React from 'react';

const Footer = () => {
  return (
    <section className="bg-white pt-16">
      <div className="container mx-auto text-center flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6">
          Zidan
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a href="#" className="text-black px-2 py-1 hover:text-orange-500">
            Home
          </a>
          <a href="#" className="text-black px-2 py-1 hover:text-orange-500">
            About Me
          </a>
          <a href="#" className="text-black px-2 py-1 hover:text-orange-500">
            Services
          </a>
          <a href="#" className="text-black px-2 py-1 hover:text-orange-500">
            Projects
          </a>
          <a href="#" className="text-black px-2 py-1 hover:text-orange-500">
            Testimonials
          </a>
          <a href="#" className="text-black px-2 py-1 hover:text-orange-500">
            Contact
          </a>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <img src="/Facebook-Negative.png" alt="Facebook" className="w-6 sm:w-8 h-6 sm:h-8" />
          <img src="/Twitter-Negative.png" alt="Twitter" className="w-6 sm:w-8 h-6 sm:h-8" />
          <img src="/Instagram-Negative.png" alt="Instagram" className="w-6 sm:w-8 h-6 sm:h-8" />
          <img src="/Vector.png" alt="Vector" className="w-6 sm:w-8 h-6 sm:h-8" />
        </div>

        <div className="w-full bg-[#545454] text-white py-4 mt-6">
          <p className="text-center">
            © 2023 <span className="text-orange-500 font-bold">Zidan</span> All Rights Reserved, Inc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
