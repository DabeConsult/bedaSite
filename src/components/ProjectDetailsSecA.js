import React, { useContext, useEffect, useState } from "react";
import { RxCaretRight } from "react-icons/rx";
import curlyLine from "../assets/Images/curlyLine3.png";
import { Link as RouteLink, useParams } from "react-router-dom";
import DataContext from "../reducers";
import { client } from "../pages/GetData";
import Markdown from "react-markdown";

function ProjectDetailsSecA() {
  const { projectID } = useParams();

  const [srvArr, setSrvArr] = useState([]);
  const [cardDetails, setCardDetails] = useState();
  const { data, loading } = useContext(DataContext);
  const [prjResults, setPrjResults] = useState([]);

  const fetchEntry = async (ids) => {
    const resArr = [];
    for (const id of ids) {
      try {
        const entry = await client.getEntry(id);
        resArr.push(entry);
      } catch (error) {
        console.log(error);
      }
    }
    return resArr;
  };

  useEffect(() => {
    const processContent = async () => {
      if (!loading) {
        const content = data.filter((item) => item.id === "projectsPage");

        if (content.length > 0) {
          const serviceCards = content[0]?.fields?.projectCards || [];
          setSrvArr(serviceCards);

          const filteredCardDetails = serviceCards.filter(
            (item) => item?.fields?.clientName?.toLowerCase().trim() === projectID?.toLowerCase().trim()
          );

          if (filteredCardDetails.length > 0) {
            setCardDetails(filteredCardDetails[0] || null);
            const ids =
              filteredCardDetails[0]?.fields?.projectResults?.map(
                (result) => result.sys.id
              ) || [];
            const results = await fetchEntry(ids);
            setPrjResults(results);
          }
        } else {
          setSrvArr([]);
          setCardDetails(null);
        }
      }
    };

    processContent();
  }, [loading, data, projectID]);

  const projectData = [
    {
      name: "YEAR",
      value: cardDetails?.fields?.year,
    },
    {
      name: "CLIENT",
      value: cardDetails?.fields?.clientName,
    },
    {
      name: "INDUSTRY",
      value: cardDetails?.fields?.clientType,
    },
    {
      name: "Services",
      value: cardDetails?.fields?.projectCategory,
    },
  ];

  return (
    <div className="cnctBg2 w-full min-h-screen max-h-fit relative">
      {/* <div className="srvBg w-full h-full absolute"></div> */}
      <div className="w-full h-44 flex flex-col justify-center px-[24px] md:px-[64px] lg:px-[150px]">
        <div className="text-white z-20 ">
          <p className="flex items-center ">
            <RouteLink to="/" className="z-50 hover:text-[#5DE6EF]">
              Home
            </RouteLink>
            &nbsp; <RxCaretRight />
            &nbsp;
            <RouteLink to="/projects" className="z-50 hover:text-[#5DE6EF]">
              Projects
            </RouteLink>
            &nbsp; <RxCaretRight /> &nbsp; {projectID} &nbsp;
          </p>
          <p className=" text-2xl md:text-4xl lg:text-5xl font-bold mt-2">
            {cardDetails?.fields?.projectCategory}
          </p>
        </div>
      </div>
      <div className="w-full md:min-h-72 max-h-fit px-[24px] md:px-[64px] lg:px-[150px] mt-5">
        <div className="max-w-full w-[340px] md:w-[650px] lg:w-[790px] h-72 md:h-[370px] rounded-xl overflow-hidden shadow-lg mb-5">
          {/* <div className="w-full md:w-[670px] lg:w-[75%] h-72 md:h-[370px] rounded-xl overflow-hidden shadow-lg mb-5"> */}
          <img
            src={cardDetails?.fields?.mainImage?.fields?.file?.url}
            alt=""
            className="w-full h-full object-fill"
          />
        </div>
        <div className="w-full lg:w-5/6 min-h-32 max-h-fit grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-5">
          {projectData.map((data, index) => (
            <div key={index} className="w-full min-h-20 max-h-fit last:col-span-2">
              <p className="text-white text-xs font-semibold">{data?.name}</p>
              <p className="pt-3 font-bold text-slate-400">{data?.value}</p>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-5/6 h-fit mt-10 md:mt-10">
          <h2 className="text-5xl text-white font-bold">Challenge</h2>
          <div className="mt-4 text-white text-sm textFormatter">
            <Markdown>{cardDetails?.fields?.projectChallenge}</Markdown>
          </div>
        </div>
        <div className="w-full h-fit lg:w-5/6 mt-14 flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl text-white font-semibold">Solutions</h2>
            <div className="mt-4 text-white text-sm textFormatter">
              <Markdown>{cardDetails?.fields?.projectSolutions}</Markdown>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-10 rounded-t-xl strategyBg2">
            <h2 className="text-4xl text-white font-bold">Strategy</h2>
            <ul className="list-disc text-white px-5 mt-2">
              {cardDetails?.fields?.projectStrategy?.map((item, index) => (
                <li className="py-1 font-bold" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-5/6 h-fit mt-16 relative">
          {/* <div className="w-[90vw] rsltsBg absolute top-0 z-20"></div> */}
          <h2 className="text-4xl text-white font-bold">Results</h2>
          <div className="w-full mt-7 relative">
            <div className="w-full absolute top-3 opacity-10">
              <img src={curlyLine} alt="img" />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 ">
              {prjResults?.map((res, index) => (
                <div key={index} className="w-4/5 md:w-full min-h-64 z-50">
                  <div className="w-full h-16">
                    <p className="w-fit px-6 py-4 rounded-full bg-[#0A136F] text-white">
                      {index + 1}
                    </p>
                  </div>
                  <div className="w-full flex flex-col items-end">
                    <div className="w-4/6">
                      <p className="min-h-14 max-h-fit text-xl text-white font-bold">
                        {res?.fields?.resultHeader}
                      </p>
                      <div className="text-white text-sm pt-3 textFormatter">
                        <Markdown>{res?.fields?.resultSubHeader}</Markdown>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsSecA;
