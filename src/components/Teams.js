import React, { useContext, useEffect, useState } from "react";

import DataContext from "../reducers";

const Team = () => {


  const [aboutData, setAboutData] = useState();
  const [teamArr, setTeamArr] = useState();
  const {data, loading} = useContext(DataContext);

  useEffect(() => {
    if(!loading){
      const content = data.filter(item => item.id === 'aboutUsPage')
      setAboutData(content[0].fields);
      setTeamArr(content[0].fields.teamCards)
    }
  }, [data, loading])

  return (
    <div className="w-full min-h-screen max-h-fit bg-[#11112A]">
      <div className="w-full pt-20 flex flex-col items-center">
        <p className="text-6xl text-white font-bold">{aboutData?.sec2Header}</p>
        <p className="text-white mt-1 text-center px-2 ">
          {aboutData?.sec2SubHeader}
        </p>
      </div>
      <div className="w-full flex justify-center mt-20">
        <div className="w-full md:w-5/6 auto-rows-auto px-6 md:px-0 lg:px-12 grid-container gap-y-5 md:gap-y-10 md:gap-x-4">
        {/* <div className="w-full md:w-5/6 auto-rows-auto px-6 md:px-10 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-y-10 md:gap-x-4"> */}
          {teamArr?.map((item, index) => (
            <div key={index} className="">
              {item?.fields?.position?.toLowerCase() !== 'ceo' && (
                  <div key={index} className="w-64 relative group z-20 mx-auto">
                    <div className="w-64 h-72 rounded-lg overflow-hidden ">
                      <img
                        src={item?.fields.photo.fields.file.url}
                        alt="img"
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <div className="w-full h-20 flex flex-col justify-center">
                      <p className="text-white text-sm">{item?.fields?.position}</p>
                      <p className="text-white font-bold">{item?.fields?.name}</p>
                    </div>
                  </div>
                )} 
              {item?.fields?.position?.toLowerCase() === 'ceo' && (
                <div className="w-64 h-full relative z-20 mx-auto">
                  <div className="w-64 h-full rounded-lg overflow-hidden">
                    <img
                      src={item?.fields.photo.fields.file.url}
                      alt="img"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="w-full lg:w-5/6 h-20 flex flex-col justify-center absolute bottom-0 ">
                    <p className="text-black px-3  text-sm ">{item?.fields?.position}</p>
                    <p className="text-black px-3  font-bold">{item?.fields?.name}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
