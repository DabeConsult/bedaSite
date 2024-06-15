import React, { useContext, useEffect, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import DataContext from "../reducers";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";

function AppSrv2() {
  const { appID } = useParams();
  const [srvArr, setSrvArr] = useState([]);
  const [cardDetails, setCardDetails] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "homePage");

      if (content.length > 0) {
        const serviceCards = content[0]?.fields?.serviceCards || [];
        setSrvArr(serviceCards);

        const filteredCardDetails = serviceCards.filter(
          (item) => item?.fields?.cardTitle === appID
        );
        setCardDetails(filteredCardDetails[0] || null);
      } else {
        setSrvArr([]);
        setCardDetails(null);
      }
    }
  }, [loading, data, appID, srvArr]);

  const cards = [
    {
      icon: cardDetails?.fields?.featureAIcon?.fields?.file?.url,
      title: cardDetails?.fields?.featureATitle,
      info: cardDetails?.fields?.featureADetails,
    },
    {
      icon: cardDetails?.fields?.featureBIcon?.fields?.file?.url,
      title: cardDetails?.fields?.featureBTitle,
      info: cardDetails?.fields?.featureBDetails,
    },
    {
      icon: cardDetails?.fields?.featureCImage?.fields?.file?.url,
      title: cardDetails?.fields?.featureCTitle,
      info: cardDetails?.fields?.featureCDetails,
    },
    {
      icon: cardDetails?.fields?.featureDImage?.fields?.file?.url,
      title: cardDetails?.fields?.featureDTitle,
      info: cardDetails?.fields?.featureDDetails,
    },
  ];

  return (
    <div className="w-full min-h-screen max-h-fit px-[24px] md:px-[40px] lg:px-[150px] pt-20 bg-[#00172e] pb-40">
      {/* <div className="w-full min-h-screen max-h-fit px-6 md:px-16 lg:px-28 pt-20 bg-[#00172e] pb-40"> */}
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-10"> */}
        <div className="w-[340px] md:w-[650px] lg:w-auto">
          {cards.map(
            (item, index) =>
              index <= 1 && (
                <div
                  key={index}
                  className="w-full rounded-lg min-h-60 max-h-fit  p-7 bg-[#0B579D] text-white my-5"
                >
                  <div className="w-[40px] h-10 ">
                    <img
                      src={item?.icon}
                      alt="img"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="pt-5 text-xl font-bold">{item?.title}</p>
                  <div className="pt-3 text-sm textFormatter">
                    <Markdown>{item?.info}</Markdown>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="w-full h-[550px] md:h-[650px] lg:h-[500px] flex justify-center my-5">
          <div className="w-[260px] md:w-[270px] h-full ">
            {/* <div className="w-3/4 md:w-1/2 lg:w-3/4 h-full "> */}
            <img
              src={cardDetails?.fields?.featureMainImage?.fields?.file?.url}
              alt="img"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
        <div className="w-[340px] md:w-[650px] lg:w-auto">
          {cards.map(
            (item, index) =>
              index >= 2 && (
                <div
                  key={index}
                  className="rounded-lg min-h-60 max-h-fit p-7 bg-[#0B579D] text-white my-5"
                >
                  <div className="w-[40px] h-10 ">
                    <img
                      src={item?.icon}
                      alt="img"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="pt-5 text-xl font-bold">{item?.title}</p>
                  <p className="pt-3 text-sm">{item?.info}</p>
                </div>
              )
          )}
        </div>
      </div>
      <div className="min-h-80 max-h-fit mt-32 mx-5 md:mx-12 lg:mx-0 py-10 px-5 md:px-8 lg:px-16 rounded-t-xl appSrvCardBg2">
        {/* <div className="min-h-80 max-h-fit mt-32 mx-5 md:mx-12 lg:mx-20 py-10 px-5 md:px-8 lg:px-16 rounded-t-xl appSrvCardBg2"> */}
        <p className="w-full md:w-3/5 lg:w-2/5 text-xl md:text-2xl lg:text-4xl font-bold text-white leading-[1.1]">
          Ready to take your{" "}
          <span className="font-normal italic">Business'</span> &nbsp;IT to the
          next level?
        </p>
        <div className="w-full  mt-20">
          <button className="text-[#00172e] font-semibold px-6 md:px-12 py-3 rounded-md shadow-md z-50 transition-all bg-white hover:bg-[#0D58E1] hover:text-white">
            <a
              href="https://calendly.com/beda-consult"
              className=" h-full flex items-center justify-center gap-2 md:gap-3"
            >
              Get Free consultation
              <HiArrowLongRight className="text-3xl pt-1" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppSrv2;
