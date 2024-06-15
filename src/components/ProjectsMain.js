import React, { useContext, useEffect, useState } from "react";
import lamp from "../assets/Images/lamp.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as RouteLink } from "react-router-dom";
import DataContext from "../reducers";

function ProjectsMain() {
  const [homeData, setHomeData] = useState();
  const [cardArr, setCardArr] = useState();
  const { data, loading } = useContext(DataContext);

  const bgClr = ["bg-[#5DE6EF]", "bg-[#5D5FEF]", "bg-[#F178B6]"];

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "homePage");
      setHomeData(content[0].fields);
      setCardArr(content[0].fields?.projectCard);
    }
  }, [data, loading]);

  return (
    <section className="prjctBg2 min-h-screen max-h-fit pb-[420px] relative">
      <div className="prjctBg w-full h-full absolute z-10"></div>
      <div className="w-full px-[24px] md:px-[40px] lg:px-[150px] py-20 flex flex-col md:flex-row md:justify-between">
        <p className="w-full md:w-1/2 text-5xl text-white font-bold">
          {homeData?.sec5Header}
        </p>
        <p className="w-full mt-4 md:mt-0 md:w-1/2 text-white">
          {homeData?.sec5SubHeader}
        </p>
      </div>
      <div
      id="scrollbarDesign"
        ref={ref}
        className="w-full h-fit overflow-hidden overflow-x-scroll z-50 relative"
      >
        <div>
          <motion.div
            initial={{ x: "100%" }} // Initial position off the screen to the bottom
            animate={{ x: inView ? 0 : "100%" }} // Final position at 0 (centered) if in view, else off-screen
            transition={{ duration: 1, type: "spring", stiffness: 20 }} // Animation transition
            className="w-fit h-fit flex gap-10 px-16 py-5 z-50"
          >
            {cardArr?.map((card, index) => {
              const colorClass = bgClr[index % bgClr.length];
              return (
                <div
                  key={index}
                  className={`z-50 w-[270px] h-72 p-5 box-border rounded-3xl shadow-md text-white flex flex-col items-center justify-center ${colorClass} cursor-pointer transition group shd`}
                >
                  <div className="w-full h-3/6">
                    <p className="h-1/6 text-center text-sm font-thin mb-1 text-slate-100">
                      {card?.fields.projectCategory}
                    </p>
                    <p className="w-full h-4/6 text-center text-lg overflow-hidden text-ellipsis whitespace-break-spaces font-bold flex items-end justify-center ">
                      {card?.fields.clientName}
                    </p>
                    <p className="h-1/6 font-thin text-sm text-center text-slate-100">
                      {card?.fields.clientType}
                    </p>
                  </div>
                  <div className="w-5/6 h-3/6 overflow-hidden flex flex-col items-center justify-center gap-2 ">
                    <p className="w-full h-fit overflow-hidden text-sm text-center">
                      {card?.fields.projectDetails}
                    </p>
                    <button className=" px-5 py-2 text-sm bg-white text-[#11112A] font-semibold rounded-md transition group-hover:bg-[#11112A] group-hover:text-white">
                      <RouteLink to={"projectsDet/" + card?.fields.clientName}>
                        Read More
                      </RouteLink>
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="w-2/5 h-72 absolute -bottom-28 md:-bottom-24 lg:-bottom-20 left-[30%]">
        <img src={lamp} alt="img" className="w-full h-full object-contain" />
      </div>
    </section>
  );
}

export default ProjectsMain;
