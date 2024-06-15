import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import DataContext from "../reducers";
import Markdown from 'react-markdown'

function HowItWorks() {
  const { ref1, inView1 } = useInView({});

  const [srvArr, setSrvArr] = useState();
  const [srvHead, setSrvHead] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "servicesPage");
      setSrvArr(content[0].fields.sec2);
      setSrvHead(content[0].fields.sec2Header);
    }
  }, [loading, data]);

  return (
    <div className="worksBg2 w-full min-h-screen max-h-fit pb-40 relative">
      <div className="worksBg w-full h-full absolute"></div>
      <div className="w-full flex flex-col items-center pt-40 z-20">
        <p className="text-4xl md:text-6xl text-white font-bold z-20">
          {srvHead}
        </p>
        {srvArr?.map((item, index) => (
          <div key={index} className="w-full flex flex-col items-center z-50"> {/* here ==*/}
            <div ref={ref1} className="pt-20 pb-10 flex flex-col items-center">
              <p
                className={`w-4 h-4 rounded-full ${
                  inView1 ? "bg-white" : "bg-[#5DE6EF]"
                } z-20`}
              ></p>
              <p
                className={`w-1 h-28 ${
                  inView1 ? "bg-white" : "bg-[#5DE6EF]"
                } z-20`}
              ></p>
              <p
                className={`w-4 h-4 rounded-full ${
                  inView1 ? "bg-white" : "bg-[#5DE6EF]"
                } z-20`}
              ></p>
            </div>
            <div className="w-20 h-20 z-20 rounded-md shadow-md flex items-center justify-center bg-[#3A5581] opacity-65">
              <div className="w-full h-full">
                <img
                  src={item?.fields?.iconImage.fields.file.url}
                  alt="img"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="py-10">
              <p className="text-white font-bold">{item?.fields?.smallText}</p>
            </div>

            <div className="pb-5">
              <p className="text-3xl text-[#5DE6EF] font-bold z-50 opacity-100">{item?.fields?.title}</p>
            </div>
            <div className="py-10">
              <div className="w-60 text-center text-white textFormatter">
                <Markdown>{item?.fields?.info}</Markdown>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
