import React, { useContext, useEffect, useState } from "react";
import curlyLine from "../assets/Images/curlyLine2.png";
import paper from "../assets/Images/paper.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as RouteLink } from "react-router-dom";
import DataContext from "../reducers";
import Markdown from "react-markdown";

function Believe() {
  const [homeData, setHomeData] = useState();
  const {data, loading} = useContext(DataContext);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if(!loading){
      const content = data.filter(item => item.id === 'homePage')
      setHomeData(content[0].fields)
    }
  }, [data, loading])
  
  return (
    <section className="believeBg2 overflow-hidden">
      <div className=" w-full h-screen md:h-[110vh] px-5 md:px-0 relative flex flex-col items-center ">
        <div className="w-full h-52 absolute top-5 opacity-25">
          <img
            src={curlyLine}
            alt="img"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="w-full h-3/5 max-h-fit mt-10 z-20">
          <div className="h-3/6 overflow-hidden flex flex-col items-center justify-center">
            <p className="text-white text-2xl md:text-5xl lg:text-6xl font-bold z-20">
              We believe that
              <span className="text-black font-normal italic">technology</span>
            </p>
            <p className="text-black text-2xl md:text-5xl font-bold pt-4 z-20">
              Can <span className="text-outline ">change</span> the world.
            </p>
          </div>
          <div className="w-full h-3/6 flex justify-center items-start py-5">
            <div className="md:w-3/4 lg:w-2/4 h-fit  text-white text-sm text-center z-20 textFormatter">
              <Markdown>{homeData?.sec3Details}</Markdown> 
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/6 h-2/5 px-2 md:px-0 flex md:flex-row items-center md:items-start justify-center relative">
          <div className="w-fit text-[#3ed2ff] z-20 ">
            <p className="text-center text-xl md:text-3xl font-bold">{homeData?.sec3Count1}</p>
            <p className="text-center text-xs md:text-md">
            {homeData?.sec3Count1Name}
            </p>
          </div>
          <div className="w-1/5 h-full flex items-center md:items-start md:pt-5 ">
            <div className="w-full border border-[#3ed2ff] z-20"></div>
          </div>
          <div className="w-fit text-[#3ed2ff] z-20 ">
            <p className="text-center text-xl md:text-3xl font-bold">{homeData?.sec3Count2}</p>
            <p className="text-center text-xs md:text-md">{homeData?.sec3Count2name}</p>
          </div>
          <div className="w-1/5 flex items-center md:items-start md:pt-5 ">
            <div className="w-full border border-[#3ed2ff] z-20"></div>
          </div>
          <div className="w-fit px-3 text-[#3ed2ff] z-20">
            <p className="text-center text-xl md:text-3xl font-bold">{homeData?.sec3Count3}</p>
            <p className="text-center text-xs md:text-md">{homeData?.sec3Count3name}</p>
          </div>
          <RouteLink to={"/aboutUs"}>
            <button className="absolute -left-2 bottom-16 md:bottom-auto md:top-28 md:left-2 lg:left-14 lg:top-20 px-2 text-sm md:text-md md:px-5 py-2 bg-white text-[#11112A] font-semibold rounded-md z-50 transition hover:bg-[#11112A] hover:text-white">
            {/* <button className="absolute -left-2 bottom-10 md:left-2 lg:left-5 lg:bottom-20 px-2 text-sm md:text-md md:px-5 py-2 bg-white text-[#11112A] font-semibold rounded-md z-50 transition hover:bg-[#11112A] hover:text-white"> */}
              Read More
            </button>
          </RouteLink>
          <div  ref={ref}
            className="w-full h-52 absolute left-auto -bottom-3 md:bottom-auto md:-top-10 lg:-top-12 opacity-30"
            // className="w-full h-52 absolute left-auto -bottom-10 md:bottom-56 lg:bottom-14 opacity-30"
          >
            <motion.div
              initial={{ y: 1000 }} // Initial position off the screen to the bottom
              animate={{ y: inView ? 0 : 1000 }} // Final position at 0 (centered) if in view, else off-screen
              transition={{ duration: 1, type: "spring", stiffness: 50 }} // Animation transition
              className="w-full h-full"
            >
              <img src={paper} alt="img" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Believe;
