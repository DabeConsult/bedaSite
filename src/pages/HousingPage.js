import React from 'react';
import { Building2, Zap, Shield, Award, ArrowRight } from 'lucide-react';
import LogoHeader from '../assets/B-Housing Images/LogoHeader.svg';
import LogoFooter from '../assets/B-Housing Images/LogoFooter.svg';
import HeroImage from '../assets/B-Housing Images/HeroImage.svg';
import ModernHouse from '../assets/B-Housing Images/Image_fx (53) 1.svg';
import LogoCompany from '../assets/B-Housing Images/Pattern.svg';
import ScheduleImage from '../assets/B-Housing Images/ScheduleImage.svg';

export default function HousingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={HeroImage} 
            alt="Modern housing" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-pink-500/40 to-purple-600/40"></div>
        </div>
        
        {/* Header */}
        <header className="relative z-10 flex items-center justify-center px-8 py-8">
          <div className="flex items-center gap-2">
            <img src={LogoHeader} alt="BETA Housing Logo" className="h-20" />
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-150px)] text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Smarter Housing,<br />Real Solutions
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl leading-relaxed">
            We use innovation, policy, and technology to make housing<br/>
            supply sustainable, efficient, and inclusive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition shadow-lg">
              Book Appointment
            </button>
            <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-3 rounded font-semibold transition border border-white/50 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Partners */}
          <div className="mt-16">
            <p className="text-white/90 text-sm mb-4">Trusted by these leading brands</p>
            <div className="flex items-center justify-center gap-6">
              <img src={LogoCompany} alt="Partner Logos" className="h-15 object-contain opacity-90" />
            </div>
          </div>
        </div>
      </div>

      {/* Value Section */}
      <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">The Value We Bring</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-sm md:text-base">
          At B-Housing, we focus on solving the toughest challenges in housing by combining policy, finance, and technology
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center px-4">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <img src='icon/bhouse/value/Vector.svg' alt='icon' className="w-7 h-7 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900">Increase Housing Supply</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Unlock growth opportunities, adaptive reuse, and new funding.
            </p>
          </div>

          <div className="text-center px-4">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <img src='icon/bhouse/value/Vector-2.svg' alt='icon' className="w-7 h-7 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900">Housing Technology</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Apply AI and tools to boost production and services.
            </p>
          </div>

          <div className="text-center px-4">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src='icon/bhouse/value/Vector-1.svg' alt='icon' className="w-7 h-7 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900">Inclusive Solutions</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Develop housing for vulnerable and hard-to-house populations.
            </p>
          </div>
        </div>
      </section>

     
  {/* Climate Smart Section */}
      <section className="py-20 px-6 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          {/* Card with background image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={ModernHouse}
                alt="Modern architecture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Climate-Smart Housing</h2>
              <p className="text-base text-gray-200 mb-8 max-w-2xl">
                At B-Housing, we focus on solving the toughest challenges in housing by combining policy, finance, and technology.
              </p>

              {/* Why Choose Section */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Why Choose Beta Housing</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-5 text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <img src='icon/bhouse/Vector.svg' alt='icon' className="w-6 h-6 text-gray-700" />
                    </div>
                    <h4 className="font-bold text-xs text-gray-900">Verified Land Ownership</h4>
                  </div>

                  <div className="bg-white rounded-lg p-5 text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <img src='icon/bhouse/Vector-1.svg' alt='icon' className="w-6 h-6 text-gray-700" />
                    </div>
                    <h4 className="font-bold text-xs text-gray-900">Quality builds with modern standards</h4>
                  </div>

                  <div className="bg-white rounded-lg p-5 text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <img src='icon/bhouse/Vector-2.svg' alt='icon' className="w-6 h-6 text-gray-700" />
                    </div>
                    <h4 className="font-bold text-xs text-gray-900">Trusted partner for communities, governments and investors</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button outside the card */}
          <div className="flex justify-center mt-8">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-semibold transition shadow-lg flex items-center gap-2">
              Contact us today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Property Section */}
      <section className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={ScheduleImage}
                alt="Property" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-4 left-4 flex gap-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              </div>
            </div>

            {/* Property Details */}
            <div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-600 text-sm">Full Names</span>
                  <span className="font-semibold text-gray-900 text-sm"></span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-600 text-sm">Email Address</span>
                  <span className="font-semibold text-gray-900 text-sm"></span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-600 text-sm">Phone Number*</span>
                  <span className="font-semibold text-gray-900 text-sm"></span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-600 text-sm">Service Type</span>
                  <span className="font-semibold text-gray-900 text-sm"></span>
                </div>
                 <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <p className="text-gray-600 text-sm">Additional Rental Conditions</p>
                <span className="font-semibold text-gray-900 text-sm"></span>
              </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded text-sm font-semibold transition shadow-md flex-1">
                  Book Appointment
                </button>
                <button className="bg-gray-900 hover:bg-gray-800 text-white p-2.5 rounded transition shadow-md flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={LogoFooter} alt="BETA Housing Logo" className="h-20" />
          </div>
          <p className="text-gray-400 text-1xl">© B-Housing, Powered by B-Tech. 2025.</p>
        </div>
      </footer>
    </div>
  );
}
