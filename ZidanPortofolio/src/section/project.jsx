import React from 'react';

const Project = () => {
  const projectData = [
    {
      img: "/Porto-1.png",
      subTitle: "Web Design",
      title: "AirCalling Landing Page Design ",
    },
    {
      img: "/Porto-2.png",
      subTitle: "Web Design",
      title: "Business Landing Page Design ",
    },
    {
      img: "/Porto-3.png",
      subTitle: "Web Design",
      title: "Ecom Web Page Design ",
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            My Project
          </h2>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus
          </p>
        </div>

        <div className='flex flex-wrap justify-center pb-8 gap-3'>
          <button className="bg-gray-100 py-2 px-3 border border-gray-500 rounded-lg text-sm hover:bg-orange-500 hover:text-white hover:border-none hover:duration-300 sm:text-base">
            All
          </button>
          <button className="bg-gray-100 py-2 px-3 border border-gray-500 rounded-lg text-sm hover:bg-orange-500 hover:text-white hover:border-none hover:duration-300 sm:text-base">
            UI/UX
          </button>
          <button className="bg-orange-500 text-white py-2 px-3 rounded-lg text-sm sm:text-base">
            Web Design
          </button>
          <button className="bg-gray-100 py-2 px-3 border border-gray-500 rounded-lg text-sm hover:bg-orange-500 hover:text-white hover:border-none hover:duration-300 sm:text-base">
            App Design
          </button>
          <button className="bg-gray-100 py-2 px-3 border border-gray-500 rounded-lg text-sm hover:bg-orange-500 hover:text-white hover:border-none hover:duration-300 sm:text-base">
            Graphic Design
          </button>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 gap-6 sm:gap-8">
          {projectData.map((item, index) => (
            <div key={index} className="bg-white text-start ">
              <div className="mb-4">
                <img className="w-full object-cover rounded-lg" src={item.img} alt={item.subTitle} />
              </div>
              <p className="text-orange-600 mb-2 text-sm sm:text-base">{item.subTitle}</p>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
              <button className="bg-orange-500 text-white py-2 px-6 sm:px-12 rounded-md text-sm sm:text-base">
                Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
