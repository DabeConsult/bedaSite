import React, { useContext, useEffect, useState } from "react";
import { FaSearch, FaSkype } from "react-icons/fa";
import { RxCaretRight } from "react-icons/rx";
import { FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import BedaLogo from "./BedaLogo";
import curlyLine from "../assets/Images/curlyLine2.png";
import { Link as RouteLink, useParams } from "react-router-dom";
import DataContext from "../reducers";
import Markdown from 'react-markdown'

function AppSrv1() {
  const { appID } = useParams();
  const [searchWord, setSearchWord] = useState("");
  const [filteredList, setFilteredList] = useState();
  const [srvArr, setSrvArr] = useState([]);
  const [cardDetails, setCardDetails] = useState();
  const [contactDetails, setContactDetails] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "homePage");
      const content2 = data.filter((item) => item.id === "contactDetails");

      if (content2.length > 0) {
        setContactDetails(content2[0])
      }

      if (content.length > 0) {
        const serviceCards = content[0]?.fields?.serviceCards || [];
        setSrvArr(serviceCards);

        const filteredCardDetails = serviceCards.filter(
          (item) => item?.fields?.cardTitle.trim() === appID.trim()
        );
        setCardDetails(filteredCardDetails[0] || null);
      } else {
        setSrvArr([]);
        setCardDetails(null);
      }
    }
  }, [loading, data, appID, srvArr]);

  const searchServices = (srh) => {
    setSearchWord(srh);
    setFilteredList(
      srvArr?.filter((item) => {
        return item?.fields?.cardTitle
          ?.toLowerCase()
          .includes(srh.toLowerCase());
      })
    );
  };

  const contact = [
    {
      value: <a href={`skype:${contactDetails?.fields?.phone}?call`} > Start Call</a>,
      icon: <FaSkype className="text-[#0B579D] text-xs" />,
    },
    {
      value: contactDetails?.fields?.email,
      icon: <FiMail className="text-[#0B579D] text-xs" />,
    },
    {
      value: contactDetails?.fields?.address,
      icon: <IoLocationOutline className="text-[#0B579D] text-xs" />,
    },
  ]

  return (
    <div className="srvBg2 w-full min-h-screen max-h-fit relative">
      <div className="srvBg w-full h-full absolute"></div>
      <div className="w-full h-44 flex flex-col justify-center px-[24px] md:px-[40px] lg:px-[150px]">
        <div className="text-white z-20">
          <p className="flex items-center">
            <RouteLink to="/" className="z-50 hover:text-[#5DE6EF]">
              Home
            </RouteLink>
            &nbsp; <RxCaretRight />
            &nbsp;
            <RouteLink to="/services" className="z-50 hover:text-[#5DE6EF]">
              Services
            </RouteLink>
            &nbsp; <RxCaretRight /> &nbsp; {appID} &nbsp;
          </p>
          <p className=" text-3xl md:text-5xl lg:text-6xl font-bold mt-2">
            {cardDetails?.fields?.cardTitle}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between px-[24px] md:px-[40px] lg:px-[150px]">
        {/* <div className="w-[340px] md:w-[650px] lg:w-[790px] h-fit"> */}
        <div className="w-full md:w-[670px]  lg:w-[50%] h-fit z-50">
          <div className="max-w-full w-[340px] md:w-[650px] lg:w-auto h-[390px] rounded-lg overflow-hidden z-50">
            <img
              src={cardDetails?.fields?.serviceMainImage?.fields?.file?.url}
              alt="img"
              className="w-full h-full object-fill z-50"
            />
          </div>
          <div>
            <div className="text-white text-sm pt-10 whitespace-pre-wrap textFormatter">
              <Markdown>
                {cardDetails?.fields?.cardDetails}
                </Markdown>
            </div>
          </div>
        </div>

        <div className="w-[340px] md:w-[650px] lg:w-[35%] mt-10 lg:mt-0 z-50">
        {/* <div className="w-full md:w-2/3 mt-10 lg:mt-0 lg:w-[35%] z-50"> */}
          <div className="rounded-lg px-10 py-7 appSearchBg">
            <p className="text-white text-2xl font-bold">Search</p>
            <div className="w-full h-fit relative mt-5">
              <input
                onInput={(e) => searchServices(e.target.value)}
                className="w-full pl-1 pr-10 text-white outline-none border-b border-b-white bg-transparent focus:border-b-[#5DE6EF]"
                placeholder="Enter your keywords ..."
              />
              <FaSearch className="text-white font-normal absolute right-0 top-0 cursor-pointer" />
              {searchWord && (
                <div className="w-full min-h-52 shadow-md bg-white absolute top-7">
                  <ul className="list-none text-black">
                    {filteredList.map((item, index) => (
                      <RouteLink to={"/app/" + item?.fields?.cardTitle}>
                        <li
                          key={index}
                          className="text-black px-5 py-2 border-b cursor-pointer hover:bg-slate-300"
                          onClick={() => setSearchWord("")}
                        >
                          {item?.fields?.cardTitle}
                        </li>
                      </RouteLink>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="rounded-lg px-10 py-7 bg-[#0B579D] mt-7">
            <p className="text-white text-2xl font-bold">Services</p>
            <ul className="list-none mt-3">
              {srvArr?.map((item, index) => (
                <RouteLink key={index} to={"/app/" + item?.fields?.cardTitle}>
                  <li
                    className={`${
                      item?.fields?.cardTitle === appID
                        ? "text-[#5DE6EF] pl-3"
                        : "text-white"
                    } py-2 transition-all hover:pl-3 cursor-pointer`}
                  >
                    <div className="flex items-center gap-1">
                      <RxCaretRight className="" />
                      <p>{item?.fields?.cardTitle}</p>
                    </div>
                  </li>
                </RouteLink>
              ))}
            </ul>
          </div>

          <div className="rounded-lg px-10 pt-7 bg-[#0B579D] mt-7 relative overflow-hidden">
            <p className="text-white text-2xl font-bold">Contact</p>
            <ul className="list-none mt-3">
              {contact.map((item, index) => (
                <li key={index} className="py-2">
                  <div className="flex items-center gap-2 text-[white]">
                    <div className="rounded-full p-2 bg-[#5DE6EF]">
                      {item?.icon}
                    </div>
                    <p className="text-sm">{item?.value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-4/6 h-24 mt-20 mb-10">
              <BedaLogo />
            </div>
            <div className="w-full h-full absolute left-0 -bottom-36 opacity-65">
              <img
                src={curlyLine}
                alt="img"
                className="w-full h-full object-contain opacity-65"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppSrv1;
