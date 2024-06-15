import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import BedaFooter from "../components/BedaFooter";

function Services1Footer() {
  return (
    <div className="w-full min-h-screen max-h-fit bg-[#11112A] z-20">
      <div className="w-full h-fit pt-32 flex flex-col items-center justify-center">
        <p className="text-white text-4xl md:text-6xl font-bold">
          Need IT Solutions?
        </p>
        <p className="text-white text-3xl md:text-5xl italic pt-2">
          <span className="font-bold not-italic">Let's</span> start now
        </p>
        <div className="w-full flex justify-center mt-10">
          <button className="text-white px-10 md:px-12 py-3 rounded-md shadow-md z-50 bg-[#0D58E1] hover:bg-[#162646]">
            <a
              href="https://calendly.com/beda-consult"
              className=" h-full flex items-center justify-center"
            >
              Get Free consultation
              <HiArrowLongRight className="text-3xl pt-1" />
            </a>
          </button>
        </div>
        <div className="w-full flex justify-center pt-40 px-[24px] md:px-[40px] lg:px-[150px] bg-[#11112A]">
          <BedaFooter bgCl={`bg-[#11112A]`} />
        </div>
      </div>
    </div>
  );
}

export default Services1Footer;
