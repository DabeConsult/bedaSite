import React from 'react';
import { Link } from 'react-router-dom';
import LogoHeader from '../assets/B-Entertenment/HeaderLogo.svg';
import FooterLogo from '../assets/B-Entertenment/FooterLogo.svg';
import Herobg from '../assets/B-Entertenment/image 28.svg';
import Djimage from '../assets/B-Entertenment/Gemini_Generated_Image_f4b64mf4b64mf4b6 1.svg';
import Nightclub from '../assets/B-Entertenment/Gemini_Generated_Image_tmy409tmy409tmy4 1.svg';
import PartyImage from '../assets/B-Entertenment/Image_fx (61) 1.svg';
import chill from '../assets/B-Entertenment/Image_fx (62) 1.svg';
import Mainlogo from '../assets/B-Entertenment/Mask group (3).svg';

const EntertainmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
    <div className="relative bg-gradient-to-br from-purple-950 via-purple-900 to-pink-950 text-white overflow-hidden min-h-fit flex items-center">
        {/* Purple wavy lines decoration */}
         <img src={Herobg} alt="Background Decoration" className="absolute inset-0 w-full h-50 object-contain opacity-20" />

        <div className="container mx-auto px-6 py-12 relative z-10">
          {/* Logo and Contact Button */}
          <div className="flex items-center justify-between mb-12">
            <Link to="/">
              <img src={LogoHeader} alt="B-Entertainment Logo" className="w-30 h-30" />
            </Link>
            <Link to="https://calendly.com/beda-consult/30min" target="_blank" className="bg-white text-purple-900 px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition">
              Contact Us
            </Link>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Experience nightlife<br />the smart way.
            </h1>
            <p className="text-sm md:text-base text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tech-driven bars & nightclubs bringing modern vibes,<br />
              convenience, and unforgettable experiences.
            </p>

                {/* Image Grid */}
            <div className="flex flex-wrap justify-center gap-0 mb-12 px-4 items-center">
              <div className="w-44 h-32 md:w-56 md:h-40 rounded-3xl overflow-hidden border-2 border-gray-600 shadow-2xl transform hover:scale-105 transition-transform flex-shrink-0">
                <img src={Nightclub} alt="Nightclub Scene" className="w-full h-full object-cover" />
              </div>
              <div className="w-44 h-44 md:w-56 md:h-60 rounded-3xl overflow-hidden border-2 border-gray-500 shadow-1xl transform hover:scale-105 transition-transform flex-shrink-0">
                <img src={Djimage} alt="DJ Performance" className="w-full h-full object-cover" />
              </div>
              <div className="w-44 h-32 md:w-56 md:h-40 rounded-3xl overflow-hidden border-2 border-gray-500 shadow-2xl transform hover:scale-105 transition-transform flex-shrink-0">
                <img src={PartyImage} alt="Party Scene" className="w-full h-full object-cover" />
              </div>
            </div>


            {/* Partner Logos */}
            <div className="space-y-2">
              <p className="text-xs text-purple-300">Trusted by these leading brands</p>
              <div className="flex flex-wrap gap-6 items-center justify-center">
                <img src={Mainlogo} alt="Partner Logo" className="h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Do</h2>
        
        <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-12">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
               <img src="/icon/b-ent/Vector (5).svg" alt="Smart Bars Icon" className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Smart Bars</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                tech-enabled bar experiences, quick ordering, and digital payments.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-3">Nightclub Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
               Clubs powered by sound, lights, and smart booking systems.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md">
               <img src="/icon/b-ent/ph_scan-bold.svg" alt="Connected Experiences Icon" className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Connected Experiences</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mobile-first bookings, event check-ins, and loyalty rewards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
            {/* Background Image */}
            <img src={chill} alt="Why Choose B-Entertainment" className="absolute inset-0 w-full h-full object-cover" />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 p-12 md:p-16 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Choose B-Entertainment
              </h2>
              
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">No long waits — order and pay via your phone.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">Book tables & events in seconds.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">Seamless tech meets unforgettable nightlife.</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
        <div className="mt-12 text-center justify-center flex"> 
        <Link to="https://calendly.com/beda-consult/30min" target="_blank" className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition shadow-lg flex items-center gap-3">
                Contact us today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              </div>

      </div>

      {/* Footer */}
      <div className="bg-white py-12 border-t">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={FooterLogo} alt="B-Entertainment Footer Logo" className="w-30 h-30" />
          </div>
          <p className="text-gray-400 text-sm">© B-Housing, Powered by B-Tech. 2025.</p>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentPage;