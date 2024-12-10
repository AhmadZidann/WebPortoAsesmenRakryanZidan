import React from 'react';

const Service = () => {
  const services = [
    {
      img: "/Icon-1.png",
      title: "UI/UX Design",
      description: "We create engaging and intuitive user interfaces that improve user experience across platforms.",
    },
    {
      img: "/Icon2.png",
      title: "Web Design",
      description: "Our team specializes in crafting beautiful and responsive websites that work on all devices.",
    },
    {
      img: "/Icon-3.png",
      title: "App Design",
      description: "We design mobile apps that are user-friendly, functional, and aesthetically pleasing.",
    },
    {
      img: "/Icon-4.png",
      title: "Graphic Design",
      description: "From logos to branding materials, we provide creative graphic design solutions.",
    }
  ];

  return (
    <section className="bg-[#FFF6E7] py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi 
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-5 sm:p-6 rounded-lg text-start">
              <div className="mb-4">
                <img className='w-12 h-12 sm:w-[55px] sm:h-14' src={service.img} alt={`${service.title} Icon`} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
