import React from 'react';
import TotalCount from './TotalCount';

const Hero = () => {
  return (
    <section className="bg-[#F2F0F1]">
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center w-max">
          <h1 className="max-w-2xl font-integral mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl">
            Find Clothes That Match Your Style
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            Explore our unique selection of garments designed to reflect your personality and elevate your wardrobe.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white bg-black rounded-3xl hover:bg-gray-800 focus:ring-4 focus:ring-gray-300">
            Shop Now
            <svg 
              className="w-5 h-5 ml-2 -mr-1" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg">
              <path 
                fillRule="evenodd" 
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                clipRule="evenodd">
              </path>
            </svg>
          </a>
          <div className="flex mt-6">
            <TotalCount number={"200+"} description={"International Brands"} /> 
            <TotalCount number={"2,000+"} description={"High-Quality Products"} /> 
            <TotalCount number={"30,000+"} description={"Happy Customers"} /> 
          </div>
        </div>

        {/* Right Image Section */}
    <div className='h-full w-[50%]'>
    <img 
            src="/assets/images/hero.png" 
            alt="Fashion mockup" 
            className="object-cover w-full h-full" 
          />
    </div>
      </div>
    </section>
  );
}

export default Hero;
