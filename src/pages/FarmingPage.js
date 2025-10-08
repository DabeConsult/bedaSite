import React from 'react';
import { Check, Wifi, Smartphone, Cloud, TrendingUp } from 'lucide-react';
import heroImage from "../assets/Farming Images/Mask group (2).svg";
import logoImage from "../assets/Farming Images/logo.svg";
import AfricaImage from "../assets/Farming Images/africa.svg";
import EggImage from "../assets/Farming Images/Eggs.svg";
import Case from "../assets/Farming Images/Case.svg";
import FarmingIOt from "../assets/Farming Images/Image_fx (51) 1.svg";
import Logo from "../assets/Farming Images/Group 113.svg";
import LogoHeader from "../assets/Farming Images/Mask group (1).svg";
import aiicon from "../assets/Farming Images/Vector-1.svg";
import Ioticon from "../assets/Farming Images/Vector.svg";
import machineraryicon from "../assets/Farming Images/Vector-2.svg";
import precision from "../assets/Farming Images/Vector-3.svg";
import robootic from "../assets/Farming Images/Vector-4.svg";

export default function BFarmingLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src={LogoHeader}
             className="w-20 h-20  rounded-full flex items-center justify-center text-white font-bold">
            </img>
            <span className="text-xl font-semibold text-gray-900">B-FARMING</span>
          </div>
          <a href="https://calendly.com/beda-consult/30min"
                target="_blank" 
                className="bg-green-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-900 transition">
            Book Demo
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="pr-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Smart Farming.<br />Real Growth.
        </h1>
        <p className="text-gray-600 mb-6 text-2xl leading-relaxed">
          An eco-conscious farm powered by IOT built to bridge yield your next-best local, finance offerings and connect you with sustainable growth.
        </p>
         <a href="https://calendly.com/beda-consult/30min"
                            target="_blank" className="bg-green-800 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-green-900 transition">
          Book a Demo
        </a>
      </div>
      <div className="relative">
        <img 
          src={heroImage} 
          alt="Aerial view of farm"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
    
    {/* Trusted brands section - below the grid */}
    <div className="mt-12">
      <p className="text-base text-gray-500 mb-4 text-center">Trusted by these leading brands</p>
      <div className="overflow-hidden">
        <div className="flex items-center animate-scroll">
          <img src={logoImage} alt="Brand" className="h-16 mx-8" />
          <img src={logoImage} alt="Brand" className="h-16 mx-8" />
          <img src={logoImage} alt="Brand" className="h-16 mx-8" />
          <img src={logoImage} alt="Brand" className="h-16 mx-8" />
        </div>
      </div>
    </div>
  </div>
  
  
</section>

      <section className="bg-green-800 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-white mb-12">Our Approach</h2>
    <div className="grid md:grid-cols-3 gap-8">
      
      <div className="bg-gray-100 rounded-3xl p-8 pt-12 pb-12 text-center max-w-sm mx-auto w-full min-h-[400px] flex flex-col justify-center">
        <div className="flex justify-center mb-8">
          <img src={AfricaImage} alt="Africa" className="w-50 h-50 object-contain" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 leading-snug px-4">
          Large-scale farms across Africa
        </h3>
      </div>

      <div className="bg-gray-100 rounded-3xl p-8 pt-12 pb-12 text-center max-w-sm mx-auto w-full min-h-[400px] flex flex-col justify-center">
        <div className="flex justify-center mb-8">
          <img src={EggImage} alt="Produce" className="w-50 h-50 object-contain" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 leading-snug px-4">
          Crops for local markets and exports
        </h3>
      </div>

      <div className="bg-gray-100 rounded-3xl p-8 pt-12 pb-12 text-center max-w-sm mx-auto w-full min-h-[400px] flex flex-col justify-center">
        <div className="flex justify-center mb-8">
          <img src={Case} alt="Delivery" className="w-50 h-50 object-contain" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 leading-snug px-4">
          Investor-focused agricultural projects
        </h3>
      </div>

    </div>
  </div>
</section>
      {/* Technology Section */}
 <section className="bg-gray-50 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-900 mb-12">Technology in Action</h2>
    
    <div className="grid grid-cols-3 gap-6 max-w-5xl mb-6">
      {/* AI Card */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-blue-500 transition">
        <div className="flex justify-center mb-4">
          <img src={aiicon} className="w-16 h-16" alt="AI Logo" />
        </div>
        <p className="text-lg font-semibold text-gray-900">AI</p>
      </div>

      {/* IOT Card - Active/Selected */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-blue-500 transition">
        <div className="flex justify-center mb-4">
          
            <img src={Ioticon} className="w-16 h-16" alt="IOT Logo" />
         
        </div>
        <p className="text-lg font-semibold text-gray-900">IOT</p>
      </div>

      {/* Advanced Machinery Card */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-blue-500 transition">
        <div className="flex justify-center mb-4">
          <img src={machineraryicon} className="w-16 h-16" alt="Advanced Machinery Logo" />
        </div>
        <p className="text-lg font-semibold text-gray-900">Advanced Machinery</p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-6 max-w-3xl">
      {/* Precision Farming Card */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-blue-500 transition">
        <div className="flex justify-center mb-4">
          <img src={precision} className="w-16 h-16" alt="Precision Farming Logo" />
        </div>
        <p className="text-lg font-semibold text-gray-900">Precision Farming</p>
      </div>

      {/* Robotics Card */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-blue-500 transition">
        <div className="flex justify-center mb-4">
          <img src={robootic} className="w-16 h-16" alt="Robotics Logo" />
        </div>
        <p className="text-lg font-semibold text-gray-900">Robotics</p>
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Section */}
      <section className="bg-green py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-bold text-center text-gray-900 mb-8">Why Choose B-Farming</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={FarmingIOt} 
                alt="Farmers working together"
                className="rounded-lg w-30 h-50 object-cover"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-3xl">Transparent farm operations</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-3xl">Sustainable and efficient</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-3xl">Strong ROI for investors</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-3xl">Contribute to food security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Invest in farming with<br />technology at the core.
          </h2>
          <a href="https://calendly.com/beda-consult/30min"
                            target="_blank" className="bg-white text-green-800 px-8 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 transition mt-4">
            Partner with Us
          </a>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={Logo} className="w-30 h-30  rounded-full flex items-center justify-center text-white-900 font-bold" />
          </div>
          <p className="text-sm text-green-200">© B-Farming. Powering by B-Tech. 2025. </p>
        </div>
      </footer>
    </div>
  );
}
<style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .animate-scroll {
      animation: scroll 15s linear infinite;
      width: max-content;
    }
  `}</style>