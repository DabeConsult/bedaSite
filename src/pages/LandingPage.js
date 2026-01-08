import React from 'react';
import LogFooter from '../assets/Images/Mask group.png';
import LogHeader from '../assets/Images/Pills-Company.png';
import Lightbulb from '../assets/Images/Bulb.png';
import LogoTransport from '../assets/Images/serviceslogo/Beda-Transport.svg';
import LogoTechnology from '../assets/Images/serviceslogo/Beda-Tecnology.svg';
import LogoHealth from '../assets/Images/serviceslogo/Beda-Health.svg';
import LogoFarming from '../assets/Images/serviceslogo/Beda-Farming.svg';
import LogoMinerals from '../assets/Images/serviceslogo/Beda-Minerals.svg';
import LogoHousing from '../assets/Images/serviceslogo/Beda Housing.svg';
import LogoEntertainment from '../assets/Images/serviceslogo/Beda-Entertainment.svg';

import { Link } from 'react-router-dom';

const BTechLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 lg:p-8">
        {/* Logo - No background */}
       <div className="flex items-center space-x-2">
          <img src={LogHeader} alt="BTech Logo" className="h-12 sm:h-14 lg:h-20 w-auto drop-shadow-lg" />
        </div>
        
        {/* Get in touch button */}
        <Link 
          to="https://calendly.com/beda-consult/30min?month=2025-09" 
          target='_blank' 
          className="border-2 border-gray-300 rounded-full px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4 text-gray-600 hover:bg-white hover:border-gray-400 hover:shadow-md transition-all duration-200 font-medium text-xs sm:text-sm lg:text-base"
        >
          Get in touch
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-3 sm:px-4 lg:px-6 py-4 lg:py-8">
        {/* Main Title */}
       <div className="text-center mb-2 -mt-6 px-2">
          <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-6xl font-bold text-slate-800 mb-1 leading-tight">
            Innovation and Technology
          </h1>
          <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-6xl font-bold text-slate-800 leading-tight">
            for 360° Value
          </h1>
      </div>
        <br />
        <br />
        <br />

        {/* Central Hub with Lightbulb and Category Buttons */}
        <div className="relative flex items-center justify-center mb-12 lg:mb-24 scale-75 md:scale-90 lg:scale-100">
          {/* Technology - Top */}
          <button className="absolute -top-16 lg:-top-20 bg-white border border-gray-200 rounded-full px-6 lg:px-8 py-3 lg:py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-3 z-10" style={{ top: 'var(--technology-top, -4rem)' }}>
           <img 
              src={LogoTechnology} 
              alt="Technology Icon"
              className="w-4 lg:w-5 h-4 lg:h-5"
            />
            <Link to="/Home">
            <span className="text-slate-700 font-semibold text-base lg:text-lg">Technology</span>
            </Link>
          </button>

          {/* Health - Left */}
          <button className="absolute -left-32 lg:-left-40 top-4 lg:top-6 bg-white border border-gray-200 rounded-full px-6 lg:px-8 py-3 lg:py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-3 z-10">
            <img 
              src={LogoHealth} 
              alt="Technology Icon"
              className="w-4 lg:w-5 h-4 lg:h-5"
            />
            <Link to="/health">
            <span className="text-slate-700 font-semibold text-base lg:text-lg">Health</span>
            </Link>
          </button>

         {/* Transport - Right */}
          <Link
            to="/transport"
           className="absolute -right-40 lg:-right-52 top-4 lg:top-6 bg-white border border-gray-200 rounded-full px-6 lg:px-8 py-3 lg:py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-3 z-10" style={{ top: 'var(--transport-top, 1rem)' }}>
             <img 
              src={LogoTransport} 
              alt="Technology Icon"
              className="w-4 lg:w-5 h-4 lg:h-5"
            />
            <span className="text-slate-700 font-semibold text-base lg:text-lg">Transport</span>
          </Link>

          {/* Farming - Bottom Left */}
          <Link 
            to="/farming"
          className="absolute -left-28 lg:-left-36 top-32 lg:top-40 bg-white border border-gray-200 rounded-full px-6 lg:px-8 py-3 lg:py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-3 z-10">
            <img 
              src={LogoFarming} 
              alt="Technology Icon"
              className="w-4 lg:w-5 h-4 lg:h-5"
            />
            <span className="text-slate-700 font-semibold text-base lg:text-lg">Farming</span>
          </Link>

          {/* Minerals - Bottom Right */}
          <Link to="/mining"
              className="absolute -right-28 lg:-right-36 top-32 lg:top-40 bg-white border border-gray-200 rounded-full px-6 lg:px-8 py-3 lg:py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-3 z-10">
            <img 
              src={LogoMinerals} 
              alt="Technology Icon"
              className="w-4 lg:w-5 h-4 lg:h-5"
            />
            <span className="text-slate-700 font-semibold text-base lg:text-lg">Minerals</span>
          </Link>

          {/* Housing - Bottom Left */}
          <a href="/housing" className="absolute -left-24 lg:-left-32 top-56 lg:top-72 bg-white border border-gray-200 rounded-full px-6 lg:px-8 py-3 lg:py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-3 z-10">
             <img 
              src={LogoHousing} 
              alt="Technology Icon"
              className="w-4 lg:w-5 h-4 lg:h-5"
            />
            <span className="text-slate-700 font-semibold text-base lg:text-lg">Housing</span>
          </a>

          {/* Entertainment - Bottom Right */}
          <Link to="/entertainment" className="absolute -right-32 lg:-right-44 top-56 lg:top-72 bg-white border border-gray-200 rounded-full px-6 lg:px-8 py-3 lg:py-4 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-3 z-10">
             <img 
              src={LogoEntertainment} 
              alt="Technology Icon"
              className="w-4 lg:w-5 h-4 lg:h-5"
            />
            <span className="text-slate-700 font-semibold text-base lg:text-lg">Entertainment</span>
          </Link>

          {/* Large Central Lightbulb - No Circle Background */}
          <div className="flex items-center justify-center relative" style={{ transform: 'var(--lightbulb-transform, scale(1))' }}>
            <img 
              src={Lightbulb} 
              alt="Innovation" 
              className="w-32 lg:w-48 h-40 lg:h-60 drop-shadow-2xl hover:scale-105 transition-transform duration-300" 
              style={{ marginTop: 'var(--lightbulb-margin-top, 0)' }}
            />
          </div>
        </div>
        <br />

       {/* Trusted by Leading Organizations */}
      <div className="w-50 sm:w-3/4 md:w-2/3 lg:w-1/2 mt-4 px-4">
    <h3 className="text-white text-center text-sm sm:text-base lg:text-lg font-medium mb-4 sm:mb-6 bg-gradient-to-r from-[#000B26] to-[#001440] rounded-xl sm:rounded-2xl py-2 sm:py-3 px-4 sm:px-10 shadow-xl sm:shadow-2xl">
        Trusted by Leading Organizations
    </h3>
</div>
<div className="w-full max-w-6xl px-2 sm:px-4 mb-6 sm:mb-8">
    <div className="bg-gradient-to-r from-[#000B26] to-[#001440] rounded-xl sm:rounded-2xl py-6 sm:py-8 px-4 sm:px-10 shadow-xl sm:shadow-2xl">
        {/* Logo Container with Continuous Loop Animation */}
        <div className="overflow-hidden relative h-12 sm:h-16">
            <div className="animate-infinite-scroll flex items-center justify-start absolute whitespace-nowrap">
                {/* First set of logos */}
                {[...Array(5)].map((_, index) => (
                    <img 
                        key={`logo-${index}`}
                        src={LogFooter} 
                        alt="Trusted Organizations" 
                        className="h-8 w-auto sm:h-10 lg:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 mx-8 sm:mx-10 lg:mx-12"
                    />
                ))}
                
                {/* Duplicate set for seamless loop */}
                {[...Array(5)].map((_, index) => (
                    <img 
                        key={`logo-dup-${index}`}
                        src={LogFooter} 
                        alt="Trusted Organizations" 
                        className="h-8 w-auto sm:h-10 lg:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300 mx-8 sm:mx-10 lg:mx-12"
                    />
                ))}
            </div>
        </div>
    </div>
</div>
       
      </main>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(148, 163, 184, 0.3); }
          50% { box-shadow: 0 0 40px rgba(148, 163, 184, 0.6); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }

        /* Default for all browsers */
        :root {
          --transport-top: 1rem;
          --technology-top: -4rem;
          --lightbulb-transform: scale(1);
          --lightbulb-margin-top: 0;
        }

           /* Firefox-specific adjustments */
        @-moz-document url-prefix() {
          .min-h-screen {
            zoom: 0.80;
            --transport-top: 5rem;
            --health-top: 8rem;
            --technology-top: -0.5rem;
            --farming-left: 10rem;
            --minerals-right: -60rem;
            --lightbulb-transform: scale(0.9);
            --lightbulb-margin-top: 45px;
          }
        }
      `}</style>
    </div>
  );
};

export default BTechLandingPage;