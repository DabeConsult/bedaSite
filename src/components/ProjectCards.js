import React, { useContext, useEffect, useState } from "react";
import { RxCaretRight } from "react-icons/rx";
import { Link as RouteLink } from "react-router-dom";
import DataContext from "../reducers";

function ProjectCards() {
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredDiv, setHoveredDiv] = useState("");

  const [prjArr, setPrjArr] = useState();
  const [prjCatArr, setPrjCatArr] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "projectsPage");
      setPrjCatArr(content[0].fields?.projectCategories);
      setPrjArr(content[0].fields.projectCards);
    }
  }, [data, loading]);

  return (
    <div className="prjctBg2 w-full min-h-screen max-h-fit px-[24px] md:px-[64px] lg:px-[150px] relative">
      {/* <div className="srvBg w-full h-full absolute"></div> */}
      <div className="w-full h-44 flex flex-col justify-center ">
        <div className="text-white z-20">
          <p className="flex text-slate-300 items-center">
            <RouteLink to="/" className="z-50 hover:text-[#5DE6EF]">
              Home
            </RouteLink>
            &nbsp; <RxCaretRight /> &nbsp; Projects &nbsp;
          </p>
          <p className=" text-3xl md:text-5xl lg:text-6xl font-bold mt-2">
            Projects
          </p>
        </div>
      </div>
      <div className="w-full py-10 ">
        <ul className="list-none text-white flex items-center gap-3 cursor-pointer">
          <li
            onClick={() => setActiveTab("All")}
            className={
              activeTab === "All"
                ? "text-[#92DEED] text-sm  md:text-xl border-b-2 border-b-[#92DEED] font-bold"
                : `text-sm md:text-xl transition-all hover:text-[#92DEED] font-bold`
            }
          >
            All
          </li>
          {prjCatArr?.map((item, index) => (
            <RouteLink key={index} to={item?.link}>
              <li
                onClick={() => setActiveTab(item?.fields?.categoryName)}
                className={
                  activeTab === item?.fields?.categoryName
                    ? "text-[#92DEED] text-sm  md:text-xl border-b-2 border-b-[#92DEED] font-bold"
                    : `text-sm md:text-xl transition-all hover:text-[#92DEED] font-bold`
                }
              >
                {item?.fields?.categoryName}
              </li>
            </RouteLink>
          ))}
        </ul>
      </div>
      <div className="w-full  py-10 grid-container gap-3 md:gap-x-0 md:gap-y-10">
        {/* <div className="w-full px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-x-10 lg:gap-y-5"> */}
        {prjArr
          ?.filter(
            (itm) =>
              activeTab === "All" || itm.fields.projectCategory === activeTab
          )
          .map((itm, index) => (
            <div
              onMouseEnter={() => setHoveredDiv(itm?.fields?.clientName)}
              onMouseLeave={() => setHoveredDiv("")}
              key={index}
              style={{
                backgroundImage:
                  hoveredDiv !== itm?.fields?.clientName
                    ? `url(${itm?.fields?.thumbnailImage?.fields?.file?.url})`
                    : "none",
                backgroundSize: "cover", // Optional: adjust background properties
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className={`w-[300px] h-72 mx-auto md:mx-0 flex flex-col rounded-lg relative cursor-pointer transition-all overflow-hidden ${
                hoveredDiv === itm?.fields?.clientName
                  ? "justify-start p-5 text-[#11112A] bg-[#5DE6EF] shd"
                  : "justify-end"
              }`}
            >
              {hoveredDiv !== itm?.fields?.clientName && (
                <div className="bg-[#00000041] p-5">
                  <p className="text-white text-xs">{itm?.fields?.year}</p>
                  <p className="h-[40px] overflow-hidden whitespace-nowrap text-ellipsis text-white text-2xl font-bold">
                    {itm?.fields?.clientName}
                  </p>
                </div>
              )}
              {hoveredDiv === itm?.fields?.clientName && (
                <div>
                  <p className="w-full h-[40px] text-wrap py-1 text-center font-semibold text-sm">
                    {itm?.fields?.projectCategory}
                  </p>
                  <p className="w-full h-[40px] overflow-hidden whitespace-nowrap text-ellipsis py-2 text-center text-2xl font-bold">
                    {itm?.fields?.clientName}
                  </p>
                  <p className="w-full h-[40px] text-wrap flex items-end justify-center pt-1 text-center font-semibold text-sm">
                    {itm?.fields?.clientType}
                  </p>
                  {/* <p className="w-full h-[90px] overflow-hidden whitespace-nowrap text-ellipsis text-wrap py-1 text-center  text-xs">
                    {itm?.clientInfo}
                  </p> */}
                  <RouteLink
                    to={"/projectsDet/" + itm?.fields?.clientName}
                    className="w-full flex justify-center"
                  >
                    <button className="w-fit h-[40px] mt-2 text-center text-white px-5  py-2 mb-2 rounded-md shadow-md z-50 bg-[#162646] hover:bg-[#0D58E1]">
                      {/* <RouteLink
                        to="/projectsDet"
                        className=" h-full flex items-center justify-center"
                      > */}
                      Read More
                      {/* <HiArrowLongRight className="text-3xl pt-1" /> */}
                      {/* </RouteLink> */}
                    </button>
                  </RouteLink>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProjectCards;
