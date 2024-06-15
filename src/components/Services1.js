import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RxCaretRight } from "react-icons/rx";
import { Link as RouteLink } from "react-router-dom";
import DataContext from "../reducers";

function Services1() {
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
      <div className="w-full h-40 pt-20 px-[24px] md:px-[40px] lg:px-[120px]">
        <div className="text-white">
          <p className="flex text-slate-300 items-center">
            <RouteLink to="/" className="z-50 hover:text-[#5DE6EF]">
              Home
            </RouteLink>
            &nbsp; <RxCaretRight /> &nbsp; Services &nbsp;
          </p>
          <p className="text-6xl font-bold">Services</p>
        </div>
      </div>
      <div className="w-[95%] h-fit pt-20 px-[24px] md:px-[40px] lg:px-[120px]">
        <div className="w-full grid-container gap-5 md:gap-y-5 md:gap-x-0">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-5"> */}
          {srvArr?.map((item, index) => (
            <RouteLink
              to={"/app/" + item?.fields?.cardTitle}
              key={index}
              className="w-[300px] min-h-[360px] mx-auto md:mx-0 max-h-fit p-2 mb-4 cursor-pointer rounded-xl shadow-md bg-[#3A5581] overflow-hidden z-20 hover:bg-[#5DE6EF] transition group shd"
            >
              {/* <RouteLink to={"/app/"+item?.fields?.cardTitle} key={index} className="w-80 lg:w-full min-h-[340px] max-h-fit p-2 mb-4 cursor-pointer rounded-xl shadow-md bg-[#3A5581] overflow-hidden z-20 hover:bg-[#5DE6EF] transition group shd"> */}
              <div className="w-full h-2/6 overflow-hidden p-5 flex items-center justify-between">
                <div className="w-1/3  h-full">
                  <img
                    src={item?.fields?.cardIcon?.fields?.file?.url}
                    alt="img"
                    className="w-2/3 h-full object-contain"
                  />
                </div>
                {/* change to image*/}
                <div className=" p-3 rounded-full bg-transparent transition group-hover:bg-white ">
                  <FaArrowRight className="text-white text-4xl transition group-hover:text-[#5DE6EF]" />
                </div>
              </div>
              <div className="w-5/6 h-2/6 p-3">
                <p className="text-4xl text-white font-bold">
                  {item?.fields?.cardTitle}
                </p>
              </div>
              <div className="w-full h-2/6 p-3">
                <p className="text-white text-sm">{item?.fields?.cardInfo} </p>
              </div>
            </RouteLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services1;
