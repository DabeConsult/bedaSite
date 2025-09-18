import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RxCaretRight } from "react-icons/rx";
import { Link as RouteLink } from "react-router-dom";
import DataContext from "../reducers";

function ServicesMain() {
  const [srvArr, setSrvArr] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "servicesPage");
      setSrvArr(content[0].fields.serviceCards);
    }
  }, [data, loading]);

  return (
    <div className="srvBg2 w-full min-h-screen max-h-fit relative">
      <div className="srvBg w-full h-full absolute z-10"></div>
      
      {/* Header Section */}
      <div className="w-full h-40 pt-20 px-[24px] md:px-[40px] lg:px-[120px] relative z-20">
        <div className="text-white text-center">
          <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Services
          </p>
          <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            We provide customized solutions that meet our client's unique needs and help them succeed in an increasingly digital world
          </p>
        </div>
      </div>

      {/* Services Cards Grid */}
      <div className="w-full h-fit pt-20 pb-20 px-[24px] md:px-[40px] lg:px-[120px] relative z-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {srvArr?.map((item, index) => (
            <RouteLink
              to="#"
              key={index}
              className="group relative w-full max-w-[320px] min-h-[320px] max-h-fit cursor-pointer rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 ease-out"
            >
              {/* Card Background with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D4A6B] via-[#3A5581] to-[#1E3A5F] group-hover:from-[#4DD4DD] group-hover:via-[#5DE6EF] group-hover:to-[#3BC9D4] transition-all duration-500"></div>
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-lg transform -translate-x-12 translate-y-12 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-5 h-full flex flex-col">
                
                {/* Icon and Arrow Section */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-20 h-20 p-4 bg-white/10 backdrop-blur-sm rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <img
                      src={item?.fields?.cardIcon?.fields?.file?.url}
                      alt="service icon"
                      className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Enhanced Arrow with Animation */}
                  <div className="relative overflow-hidden">
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                      <FaArrowRight className="text-white text-lg group-hover:text-[#5DE6EF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Title Section */}
                <div className="mb-4 flex-grow flex flex-col items-center justify-center text-center">
                  <h3 className="text-4xl text-white font-bold leading-tight group-hover:text-white transition-colors duration-300 mb-2">
                    {item?.fields?.cardTitle}
                  </h3>
                  {/* Animated Underline */}
                  <div className="w-0 h-1 bg-gradient-to-r from-white to-transparent group-hover:w-16 transition-all duration-500 rounded-full"></div>
                </div>

                {/* Description Section */}
                <div className="mt-auto">
                  <p className="text-gray-200 group-hover:text-gray-100 text-sm leading-relaxed transition-colors duration-300">
                    {item?.fields?.cardInfo}
                  </p>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -top-full group-hover:top-full bg-gradient-to-b from-transparent via-white/10 to-transparent transition-all duration-1000 pointer-events-none"></div>
              </div>

              {/* Enhanced Shadow */}
              <div className="absolute inset-0 rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-[#5DE6EF]/25 transition-all duration-500 -z-10"></div>
            </RouteLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesMain;