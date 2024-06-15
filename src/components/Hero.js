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
  const {data, loading} = useContext(DataContext);

  useEffect(() => {
    if(!loading){
      const content = data.filter(item => item.id === 'homePage')
      setHomeData(content[0].fields)
    }
  }, [data, loading])


  const { ref, inView } = useInView({
    // threshold: 0.5, // Adjust threshold as needed
  });

  return (
    
    <div>
      <section className="homeBg2  homeHeight overflow-hidden">
        <div className="homeBg h-full w-full flex flex-col-reverse justify-end gap-10 md:justify-center md:flex-row md:gap-0">
          <div className="w-full md:w-[60%] flex pt-5 flex-col justify-center ">
            <div className="w-full lg:w-[95%] z-50 ">
              <p className=" text-4xl md:text-5xl lg:text-6xl leading-[1.3] md:leading-[1.3] lg:leading-[1.3] text-white font-bold px-[24px] md:px-[40px] lg:px-0 lg:ml-[150px] z-50">
                {homeData && homeData.sec1Header}
              </p>
            </div>
            <div className="w-full mt-1 md:w-[85%] lg:w-[95%] relative ">
              <p className="text-2xl md:text-xl lg:text-2xl text-white font-bold px-[24px] md:px-[40px] lg:px-[150px] z-20">
                {homeData && homeData.sec1SubHeader}
              </p>
              <div className="w-16 h-16 absolute -top-[80%] right-[20%] md:-top-[90%] md:right-[18%] lg:-top-[53px]  lg:right-[27%] ">
                <img src={ballSmall} alt="img" className="object-contain" />
              </div>
            </div>
            <div className="w-full md:w-[90%] mt-3 ">
            {/* <div className="w-full md:w-[90%] lg:w-[80%] mt-3 "> */}
              <div className=" px-[24px] md:px-[40px] lg:px-[150px] text-white text-xs z-50">
                <FadeInText
                  text={homeData && homeData.sec1Details}
                  classNm={`px-5 lg:px-16 text-white text-xs`}
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/6 h-1/3 md:h-auto pr-6 flex items-center justify-center md:justify-end relative">
            <div ref={ref} className="w-5/6 h-5/6 z-20 relative">
              <motion.div
                initial={{ x: 1000 }} // Initial position off the screen to the left
                animate={{ x: inView ? 0 : 1000 }} // Final position at 0 (centered)
                transition={{ duration: 0.2, type: "spring", stiffness: 25 }} // Animation transition
                className="w-full h-full"
              >
                <img
                src={homeData && homeData.sec1Image.fields.file.url}
                alt="img"
                className="w-full h-full object-contain relative"
              />
              </motion.div>
              <div className="w-20 md:w-28 h-28 absolute -left-5 -bottom-10 md:bottom-40 md:-left-28 lg:bottom-3 lg:-left-14 z-20">
                <img src={ballLarge} alt="img" />
              </div>
            </div>

            <div className="absolute -top-[30px] right-4">
              <img
                src={cubeBottom}
                alt="img"
                className="opacity-35 brightness-125 filterHue"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
