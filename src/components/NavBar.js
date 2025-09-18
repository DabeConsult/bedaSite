import React, { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link as RouteLink } from "react-router-dom";
import BedaLogo from "./BedaLogo";
import Frame from "../assets/Images/Frame 2.png";

function NavBar({ bgCl }) {
  const mainRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    mainRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      ref={mainRef}
      className={`w-full h-20 flex items-center border-b border-gray-200 relative ${bgCl}`}
    >
      {/* Logo Section */}
      <RouteLink to={"/"} className="flex items-center h-full px-5 md:px-10 lg:px-24">
        <img src={Frame} alt="Frame" className="h-16 w-auto object-contain" />
              
      </RouteLink>

      {/* Navigation Links */}
      <div className="flex-1 h-full px-6 md:px-10 lg:px-28 hidden lg:flex items-center justify-end">
        {/* <ul className="list-none flex gap-6 text-white cursor-pointer">
          <li className="text-[0.9em] hover:text-[#4ac9ff] transition">
            <RouteLink to={"/aboutUs"}>ABOUT US</RouteLink>
          </li>
          <li className="text-[0.9em] hover:text-[#4ac9ff] transition">
            <RouteLink to={"/services"}>SERVICES</RouteLink>
          </li>
          <li className="text-[0.9em] hover:text-[#4ac9ff] transition">
            <RouteLink to={"/projects"}>PROJECTS</RouteLink>
          </li>
          <li className="text-[0.9em] hover:text-[#4ac9ff] transition">
            <RouteLink to={"/blog"}>BLOG</RouteLink>
          </li>
        </ul> */}
        <RouteLink
          to={"https://calendly.com/beda-consult/30min"}
          target="_blank"
          className="bg-white px-8 py-[8px] text-sm ml-8 rounded-md font-semibold transition hover:bg-[#11112A] hover:text-white"
        >
          CONTACT
        </RouteLink>
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex-1 flex items-center justify-end px-3 text-white cursor-pointer lg:hidden">
        <IoMdMenu className="text-3xl" onClick={() => setShowMenu(!showMenu)} />
      </div>
      {showMenu && (
        <div className="w-80 p-5 bg-[#11112ab7] absolute -bottom-[80px] right-1 z-[99999] rounded-lg backdrop-blur-sm">
          <button
            className="w-full bg-white py-3 text-base rounded-md font-semibold transition-all duration-300 
             hover:bg-[#11112A] hover:text-white hover:shadow-lg active:scale-95"
            onClick={() => setShowMenu(!showMenu)}
          >
            <RouteLink to={"/contactUs"} className="w-full h-full flex items-center justify-center">
              CONTACT
            </RouteLink>
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;