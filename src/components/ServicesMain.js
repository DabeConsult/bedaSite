import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import wheel from "../assets/Images/wheel.png";
import FadeInText from "./FadeInText";
import { Link as RouteLink } from "react-router-dom";
import DataContext from "../reducers";

function ServicesMain() {

  const [homeData, setHomeData] = useState();
  const { data, loading } = useContext(DataContext);
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "homePage");
      setHomeData(content[0].fields);
      const midpoint = Math.ceil(content[0].fields.serviceCards.length / 2);
      setFirstHalf(content[0].fields.serviceCards.slice(0, midpoint));
      setSecondHalf(content[0].fields.serviceCards.slice(midpoint));
    }
  }, []);

  return (
    <section className="srvBg2 min-h-screen max-h-fit">
      <div className="homeBg min-h-screen max-h-fit w-full flex flex-col-reverse lg:flex-row px-[20px]  md:px-[40px] lg:px-[90px] py-5">
      {/* <div className="homeBg min-h-screen max-h-fit w-full flex flex-col-reverse lg:flex-row px-5  md:px-10 lg:px-28 py-5"> */}
        <div className="w-full lg:w-3/5 flex  items-center gap-3 md:gap-7">
          <div className="w-44 md:w-64 flex flex-col gap-4">
            {firstHalf.map(
              (item, index) => (
                  <RouteLink key={index} to={`app/${item?.fields.cardTitle}`}>
                    <div className="w-full h-48 p-2 md:p-5 rounded-xl bg-[#357bb9a9] flex flex-col justify-end gap-3 cursor-pointer transition group hover:bg-[#11112A] shadow-lg">
                      <span className="h-1/5 text-white hidden group-hover:flex ">
                        <FaArrowRight />
                      </span>
                      <p className="w-3/5 h-3/5 text-lg md:text-3xl font-bold leading-[1.3] text-[#11112A] group-hover:text-[#5DE6EF]">
                        {item?.fields.cardTitle}
                      </p>
                    </div>
                  </RouteLink>
                )
            )}
          </div>
          <div className="w-44 md:w-64 mt-24 flex flex-col gap-4">
            {secondHalf.map((item, index) => (
              <RouteLink key={index} to={`app/${item?.fields.cardTitle}`}>
                <div className="w-full h-48 p-2 md:p-5 rounded-xl bg-[#357bb9a9] flex flex-col justify-end gap-3 cursor-pointer transition group hover:bg-[#11112A] shadow-lg">
                  <span className="h-1/5 text-white hidden group-hover:flex ">
                    <FaArrowRight />
                  </span>
                  <p className="w-3/5 h-3/5 text-lg md:text-3xl font-bold leading-[1.3] text-[#11112A] group-hover:text-[#5DE6EF]">
                  {item?.fields.cardTitle}
                  </p>
                </div>
              </RouteLink>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/5 pt-12 lg:px-5 ">
          <div className="w-full h-1/2 flex flex-col justify-center">
            <p className="text-6xl font-bold text-[#11112A]">
              {homeData?.sec4Header}
            </p>
            <div className="w-3/4 mt-3 text-white">
              <FadeInText text={homeData?.sec4SubHeader} />
            </div>
          </div>
          <div className="w-full h-1/2 mt-5 lg:mt-0 ">
            <RouteLink
              to={"/services"}
              className="px-5 py-2 bg-white text-[#11112A] font-semibold rounded-md transition hover:bg-[#11112A] hover:text-white"
            >
              Read More
            </RouteLink>
            {/* <button className="px-5 py-2 bg-white text-[#11112A] font-semibold rounded-md transition hover:bg-[#11112A] hover:text-white">
                Read More
              </button> */}

            <div className="w-full h-44 lg:h-5/6">
              <img
                src={wheel}
                alt="img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesMain;
