import React, { useContext, useEffect, useState } from "react";
import img1 from "../assets/Images/chooseUsImg1.png";
import img2 from "../assets/Images/chooseUsImg2.png";
import img3 from "../assets/Images/chooseUsImg3.png";
import DataContext from "../reducers";

function ChooseUs() {
  const [homeData, setHomeData] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "homePage");
      setHomeData(content[0].fields);
    }
  }, [data, loading]);

  const features = [
    {
      img: img1,
      title: "Expertise",
      description: "Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.",
      gradient: "from-blue-500/20 to-purple-600/20"
    },
    {
      img: img2,
      title: "Solutions",
      description: "We take a personalized approach to every project, working closely with you to understand your business and create solutions.",
      gradient: "from-purple-500/20 to-pink-600/20"
    },
    {
      img: img3,
      title: "Results",
      description: "Our track record speaks for itself. We've helped businesses of all sizes and industries achieve their goals with our IT solutions.",
      gradient: "from-pink-500/20 to-orange-600/20"
    }
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 flex flex-col justify-center min-h-screen py-16">
        {/* Header Section */}
        <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight mb-6 animate-fade-in">
                {homeData?.sec2Header || "Why Choose Us"}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="w-full px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8"
                >
                  {/* Floating animation wrapper */}
                  <div className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Image container */}
                    <div className="relative mb-8">
                      <div className="w-32 h-32 mx-auto relative">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        <img
                          src={feature.img}
                          alt={feature.title}
                          className="w-full h-full object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      <h4 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}

export default ChooseUs;