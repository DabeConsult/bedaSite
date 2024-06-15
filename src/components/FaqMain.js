import React, { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import { Link as RouteLink } from "react-router-dom";
import Markdown from 'react-markdown'
import DataContext from "../reducers";
import BedaFooter from "./BedaFooter";

function FaqMain() {
  const [showDetails, setShowDetails] = useState("");
  const [faqArr, setFaqArr] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "homePage");
      setFaqArr(content[0].fields?.faq);
    }
  }, []);

  const showAnswer = (ind) => {
    if (showDetails === ind) {
      setShowDetails("");
    } else {
      setShowDetails(ind);
    }
  };
  return (
    <div className="w-full min-h-screen max-h-fit px-[24px] md:px-[40px] lg:px-[150px] pt-40 bg-[#11112A] ">
      <div className="w-full min-h-80 max-h-fit flex flex-col md:flex-row relative">
        <div className="w-full h-full ">
          <p className="w-full px-3 md:px-0 md:w-3/6 h-2/3 lg:mt-8 text-2xl md:text-4xl lg:text-6xl text-white font-bold">
            Got Any Questions?
          </p>
        </div>
        <div className="w-full h-fit px-2 mt-10 md:mt-0 mb-40">
          {faqArr?.map((item, index) => (
            <div key={index} className="w-full h-fit">
              <div
                onClick={() => showAnswer(index)}
                className={
                  showDetails === index
                    ? "w-full h-12 px-2 cursor-pointer text-[#4ac9ff] font-semibold flex items-center justify-between border-b border-b-transparent hover:text-[#4ac9ff]"
                    : "w-full h-12 px-2 cursor-pointer text-white font-semibold flex items-center justify-between border-b border-b-[#ededed] hover:text-[#4ac9ff]"
                }
              >
                <p>{item?.fields?.question}</p>
                {showDetails === index ? <FaMinus /> : <FaPlus />}
              </div>
              {showDetails === index && (
                <div>
                  <div className="w-3/4 text-white text-xs mt-3 px-2 textFormatter">
                    <Markdown>{item?.fields?.answer}</Markdown>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="ml-3 md:ml-0 absolute bottom-10 px-10 py-2 bg-[#036cd5]  text-white font-semibold rounded-md transition hover:bg-[#22476c]">
          <RouteLink to="/blog" className="flex items-center gap-3">
            Read More
            <FaArrowRight className="pt-1" />
          </RouteLink>
        </button>
      </div>
      <div className="w-full flex justify-center pt-40">
        <BedaFooter bgCl={`bg-[#11112A]`} />
      </div>
    </div>
  );
}

export default FaqMain;
