import React from 'react';
import curlyLine from "../assets/Images/curlyLine2.png";

function FooterMain({bgClr}) {
  return (
    <div className={`w-full h-60 pt-3 relative overflow-hidden ${bgClr}`}>
        <div className='mx-6 md:mx-10 lg:mx-28 border-t border-t-[#5c5c5c]'></div>
        <div className='w-full pt-3 px-[24px] md:px-[40px] lg:px-[150px] mb-4 flex gap-2 justify-between overflow-hidden'>
            <p className='text-[#5c5c5c] text-xs lg:text-md'>Copyright © 2024 BEDA. All rights reserved.</p>
            <p className='text-[#5c5c5c] text-xs lg:text-md text-end'>Terms & Condition  |  Privacy Policy</p>
        </div>
        {/* <div className='w-full h-full absolute -bottom-20 footBg2 z-20'></div> */}
        <div className='w-full h-full absolute -bottom-12 opacity-35'>
            <img src={curlyLine} alt='img' className='w-full h-full object-cover opacity-35' />
        </div>
    </div>
  )
}

export default FooterMain