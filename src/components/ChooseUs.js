import React, { useContext, useEffect, useState } from "react";
import img1 from "../assets/Images/chooseUsImg1.png";
import img2 from "../assets/Images/chooseUsImg2.png";
import img3 from "../assets/Images/chooseUsImg3.png";
import DataContext from "../reducers";

function ChooseUs() {
  const [homeData, setHomeData] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "homePage");
      setHomeData(content[0].fields);
    }
  }, [data, loading]);

  return (
    <section className="chooseUsBg2 w-full h-fit md:min-h-screen md:max-h-fit relative z-20">
      <div className="chooseUsBg w-full h-full absolute"></div>
      <div className="w-full min-h-60 max-h-fit flex flex-col justify-center">
        <div className="w-full md:w-5/6 px-[24px] md:px-[40px] lg:px-[150px] pt-8 z-20">
          <h3 className="text-3xl md:text-6xl text-white font-bold z-50">
            {homeData?.sec2Header}
          </h3>
        </div>
        <div className="w-full md:w-5/6 px-[24px] md:px-[40px] lg:px-[150px] pt-5">
          <p className=" text-white z-50">{homeData?.sec2SubHeader}</p>
        </div>
      </div>
      <div className="w-full min-h-80 max-h-fit flex items-center py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-2 mt-7 md:mt-0">
          <div className="flex flex-col gap-3 justify-center items-center py-4">
            <div className="w-2/3 h-52 ">
              <img
                src={img1}
                alt="img"
                className="w-full h-full object-contain"
              ></img>
            </div>
            <h4 className="font-bold text-white">Expertise</h4>
            <div className="w-2/3 text-center text-white z-20">
              <p>
                Our team of experienced experts have the knowledge and expertise
                to deliver innovative IT solutions that meet your unique needs.
              </p>
              {/* <FadeInText
                text={`
              Our team of experienced experts have the knowledge and expertise
              to deliver innovative IT solutions that meet your unique needs.
              `}
              /> */}
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center py-4">
            <div className="w-2/3 h-52 ">
              <img
                src={img2}
                alt="img"
                className="w-full h-full object-contain"
              ></img>
            </div>
            <h4 className="font-bold text-white">Solutions</h4>
            <div className="w-2/3 text-center text-white z-20">
              <p>
                We take a personalized approach to every project, working
                closely with you to understand your business and create
                solutions.
              </p>
              {/* <FadeInText
                text={`
              We take a personalized approach to every project, working closely
              with you to understand your business and create solutions.
              `}
              /> */}
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center py-4">
            <div className="w-2/3 h-52 ">
              <img
                src={img3}
                alt="img"
                className="w-full h-full object-contain"
              ></img>
            </div>
            <h4 className="font-bold text-white">Results</h4>
            <div className="w-2/3 text-center text-white z-20">
              <p>
                Our track record speaks for itself. We've helped businesses of
                all sizes and industries achieve their goals with our IT
                solutions.
              </p>
              {/* <FadeInText
                text={`
              Our track record speaks for itself. We've helped businesses of all
              sizes and industries achieve their goals with our IT solutions.
              `}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
