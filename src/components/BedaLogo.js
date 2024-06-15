import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../reducers';

function BedaLogo() {

  const [logo, setLogo] = useState();
  const { data, loading } = useContext(DataContext);

  useEffect(() => {
    if (!loading) {
      const content = data.filter((item) => item.id === "bedaLogo");
      setLogo(content[0]?.fields?.logo?.fields?.file?.url);
    }
  }, [data, loading]);

  return (
    <div className='w-full h-full flex items-center '>
          <div className="w-[50%] md:w-[50%] lg:w-[90%]  h-[90%] flex items-center justify-start pr-2 ">
            <img
              src={logo}
              alt=""
              className=" h-full w-full object-contain "
            />
          </div>
          {/* <div className="w-2/3 h-full flex flex-col justify-center logoFont font-bold">
            <p className={`w-fit text-3xl logoFontBg drop-shadow-xl`}>BEDA</p>
            <span className={` text-white text-[0.6em] drop-shadow-xl`}>
              TECH FOR ALL, IN ALL
            </span>
          </div> */}
        </div>
  )
}

export default BedaLogo