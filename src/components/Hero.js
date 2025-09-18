import React, { useContext, useEffect, useState } from "react";
import ballLarge from "../assets/Images/ball_large.png";
import ballSmall from "../assets/Images/ball_small.png";
import cubeBottom from "../assets/Images/cubeBottom.png";
import FadeInText from "./FadeInText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DataContext from "../reducers";

function Hero() {
  const [homeData, setHomeData] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data.filter(item => item.id === 'homePage');
      setHomeData(content[0].fields);
    }
  }, [data, loading]);

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <div>
      <section className="homeBg2 homeHeight overflow-hidden">
        <div className="homeBg h-full w-full flex flex-col-reverse justify-end gap-10 md:justify-center md:flex-row md:gap-0">
          <div className="w-full md:w-[60%] flex pt-5 flex-col justify-center">
            {/* Enhanced Main Header */}
            <div className="w-full lg:w-[95%] z-50">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
                         leading-tight md:leading-tight lg:leading-none 
                         text-white font-black tracking-tighter
                         px-6 md:px-10 lg:px-0 lg:ml-[150px] z-50
                         drop-shadow-2xl antialiased subpixel-antialiased
                         bg-gradient-to-br from-white via-slate-100 to-blue-50 bg-clip-text text-transparent
                         selection:bg-blue-500/30 selection:text-white
                         filter brightness-110 contrast-110"
              >
                {homeData && homeData.sec1Header}
              </motion.h1>
            </div>

            {/* Enhanced Subheader */}
            <div className="w-full mt-6 md:w-[85%] lg:w-[95%] relative">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
                         text-blue-50/95 font-semibold 
                         px-6 md:px-10 lg:px-[150px] z-20
                         leading-relaxed tracking-wide
                         drop-shadow-lg antialiased
                         selection:bg-blue-500/30 selection:text-white
                         max-w-4xl"
              >
                {homeData && homeData.sec1SubHeader}
              </motion.h2>
              
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 200 }}
                className="w-14 h-14 md:w-16 md:h-16 absolute -top-[80%] right-[20%] 
                         md:-top-[90%] md:right-[18%] lg:-top-[53px] lg:right-[27%]
                         drop-shadow-xl"
              >
                <img src={ballSmall} alt="decorative element" className="object-contain w-full h-full" />
              </motion.div>
            </div>

            
         
          </div>

          {/* Enhanced Image Section */}
          <div className="w-full md:w-3/6 h-1/3 md:h-auto pr-6 flex items-center justify-center md:justify-end relative">
            <div ref={ref} className="w-5/6 h-5/6 z-20 relative">
              <motion.div
                initial={{ x: 1000, opacity: 0, scale: 0.8 }}
                animate={{ 
                  x: inView ? 0 : 1000, 
                  opacity: inView ? 1 : 0,
                  scale: inView ? 1 : 0.8
                }}
                transition={{ 
                  duration: 1, 
                  type: "spring", 
                  stiffness: 60,
                  damping: 20
                }}
                className="w-full h-full"
              >
                <img
                  src={homeData && homeData.sec1Image.fields.file.url}
                  alt="Hero illustration"
                  className="w-full h-full object-contain relative 
                           drop-shadow-2xl filter brightness-105 contrast-105
                           hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0, rotate: 180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.8, 
                  type: "spring", 
                  stiffness: 100 
                }}
                className="w-20 md:w-28 lg:w-32 h-20 md:h-28 lg:h-32 
                         absolute -left-5 -bottom-10 md:bottom-40 md:-left-28 
                         lg:bottom-3 lg:-left-14 z-20 drop-shadow-2xl"
              >
                <img 
                  src={ballLarge} 
                  alt="decorative element" 
                  className="w-full h-full object-contain hover:rotate-12 transition-transform duration-300" 
                />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute -top-[30px] right-4 opacity-20 hover:opacity-30 transition-opacity duration-500"
            >
              <img
                src={cubeBottom}
                alt="decorative background element"
                className="brightness-125 filterHue drop-shadow-lg 
                         hover:rotate-12 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;