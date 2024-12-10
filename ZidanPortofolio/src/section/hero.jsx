import React from 'react';

const Hero = () => {
  return (
    <section className="py-12 sm:py-16 max-w-6xl mx-auto mt-[60px] md:mt-[80px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-0">
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-gray-600 font-semibold text-sm sm:text-base">Hi I am</p>
          <p className="text-orange-500 font-semibold text-lg sm:text-xl mb-2">Ahmad Zidan</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-bold text-black mb-4 leading-snug sm:leading-tight">
            Website <br className="hidden sm:block" /> Developer
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base px-2 sm:px-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, magni accusantium reprehenderit inventore eveniet ratione ex facere. Optio dolores quos doloremque.
          </p>
          <button className="bg-orange-500 text-white px-8 py-2 sm:px-10 sm:py-3 rounded">
            Hire Me
          </button>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-end">
          <img
            src="/person.png"
            alt="Hero Image"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />

          <div className="flex space-x-4 mt-6 md:mr-[130px]">
            <img src="/Facebook-Negative.png" alt="Facebook" className="w-6 sm:w-8 h-6 sm:h-8" />
            <img src="/Twitter-Negative.png" alt="Twitter" className="w-6 sm:w-8 h-6 sm:h-8" />
            <img src="/Instagram-Negative.png" alt="Instagram" className="w-6 sm:w-8 h-6 sm:h-8" />
            <img src="/Vector.png" alt="Vector" className="w-6 sm:w-8 h-6 sm:h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
