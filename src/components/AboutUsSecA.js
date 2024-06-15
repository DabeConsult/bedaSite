import React, { useContext, useEffect, useState } from "react";
import { FaSquare } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import moon from "../assets/Images/moon.png";
import { RxCaretRight } from "react-icons/rx";
import { Link as RouteLink } from "react-router-dom";
import DataContext from "../reducers";
import Markdown from "react-markdown";

function AboutUsSecA() {
  const [aboutData, setAboutData] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data?.filter((item) => item?.id === "aboutUsPage");
      setAboutData(content[0]?.fields);
    }
  }, [data, loading]);

  return (
    <div className="aboutBg2 w-full">
      <div className="w-full pb-40 grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
        <div className="aboutBg2 w-full px-[24px] md:px-[40px] lg:px-[150px]">
          <div className="w-full h-60 flex items-center">
            <div className="text-white z-20">
              <p className="flex text-slate-300 items-center">
                <RouteLink to="/" className="z-50 hover:text-[#5DE6EF]">
                  Home
                </RouteLink>
                &nbsp; <RxCaretRight /> &nbsp; About Us&nbsp;
              </p>
              <p className="text-6xl font-bold pt-2">About Us</p>
            </div>
          </div>

          <p className="text-3xl md:text-4xl text-[#17D8E4] pb-3">
            {aboutData?.sec1Header}
          </p>
          <div className="w-full md:w-4/5 text-white textFormatter">
            <Markdown>{aboutData?.sec1SubHeader1}</Markdown>
          </div>
          <div className="w-4/5 mt-5">
            <div className="  text-white">
              <div className="flex items-center gap-2">
                <FaSquare className="text-[0.6em]" />
                <p className="w-full text-sm text-[#1BBCFF]">
                  {aboutData?.sec1List1a}
                </p>
              </div>
              <p className="w-full pl-16 text-sm text-[#86C6FF]">
                {aboutData?.sec1List1b}
              </p>
            </div>
          </div>
          {/* second */}
          <div className="w-4/5 mt-5">
            <div className="text-white">
              <div className="flex items-center gap-2">
                <FaSquare className="text-[0.6em]" />
                <p className="w-full text-sm text-[#1BBCFF] z-20">
                  {aboutData?.sec1List2a}
                </p>
              </div>
              <p className="w-full pl-16 text-sm text-[#86C6FF]">
                {aboutData?.sec1List2b}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-start mt-10">
            <RouteLink to="/services">
              <button className="text-white px-5  py-3 mb-2 rounded-md shadow-md z-50 bg-[#0D58E1] hover:bg-[#162646]">
                <span className=" h-full flex items-center justify-center">
                  Our Services
                  <HiArrowLongRight className="text-3xl pt-1" />
                </span>
              </button>
            </RouteLink>
          </div>
        </div>
        <div className="aboutBg2 w-full px-[24px] md:px-[40px] lg:px-[150px]">
          <div className="w-full h-60 flex items-center">
            <div className="w-full md:w-4/6 text-[#17D8E4] textFormatter">
              <Markdown>{aboutData?.sec1SubHeader2}</Markdown>
            </div>
          </div>
          <div className="w-full h-40 flex justify-center items-start ">
            <div className="w-2/3 h-full">
              <img
                src={moon}
                alt="img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="w-full h-fit mt-3 ">
            <div className="w-full text-white textFormatter">
              <Markdown>{aboutData?.sec1SubHeader3}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSecA;
