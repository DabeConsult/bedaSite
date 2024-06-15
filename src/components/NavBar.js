import React, { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link as RouteLink } from "react-router-dom";
import BedaLogo from "./BedaLogo";

function NavBar({ bgCl }) {
  const mainRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    mainRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      ref={mainRef}
      className={`w-full h-20 flex border-b border-gray-200 relative ${bgCl}`}
    >
      <RouteLink to={"/"} className="w-3/4 md:w-2/5 lg:w-1/4 h-full">
        <div className="w-full h-full pl-5 md:pl-10 lg:pl-24 cursor-pointer">
          <BedaLogo />
        </div>

        {/* <div className="w-full h-full flex items-center px-14 cursor-pointer">
          <div className="w-fit h-5/6 flex items-center justify-start pr-2 ">
            <img
              src={logo}
              alt="Logo"
              className=" h-full w-fit object-contain"
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center ">
            <p className={`text-white text-3xl`}>BEDA</p>
            <span className={` text-white text-[0.6em]`}>
              TECH FOR ALL, IN ALL
            </span>
          </div>
        </div> */}
      </RouteLink>

      <div className="w-3/4 h-full px-6 md:px-10 lg:px-28 hidden lg:flex items-center justify-end ">
        <ul className="list-none flex gap-6 text-white cursor-pointer">
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
        </ul>
        <RouteLink
          to={"/contactUs"}
          className="bg-white px-8 py-[8px] text-sm ml-16 rounded-md font-semibold transition hover:bg-[#11112A] hover:text-white"
        >
          CONTACT
        </RouteLink>
      </div>

      <div className="w-1/4 md:w-3/5 flex items-center justify-end px-3 text-white cursor-pointer lg:hidden">
        <IoMdMenu className="text-3xl" onClick={() => setShowMenu(!showMenu)} />
      </div>
      {showMenu && (
        <div className="w-80 p-5 bg-[#11112ab7] absolute -bottom-[285px] right-1 z-[99999]">
          <ul className="list-none flex flex-col gap-6 text-white cursor-pointer">
            <li
              className="h-5 text-[0.9em] hover:text-[#4ac9ff] transition"
              onClick={() => setShowMenu(!showMenu)}
            >
              <RouteLink to={"/"}>Home</RouteLink>
            </li>
            <li
              className="h-5 text-[0.9em] hover:text-[#4ac9ff] transition"
              onClick={() => setShowMenu(!showMenu)}
            >
              <RouteLink to={"/aboutUs"}>ABOUT US</RouteLink>
            </li>
            <li
              className="h-5 text-[0.9em] hover:text-[#4ac9ff] transition"
              onClick={() => setShowMenu(!showMenu)}
            >
              <RouteLink to={"/services"}>SERVICES</RouteLink>
            </li>
            <li
              className="h-5 text-[0.9em] hover:text-[#4ac9ff] transition"
              onClick={() => setShowMenu(!showMenu)}
            >
              <RouteLink to={"/projects"}>PROJECTS</RouteLink>
            </li>
            <li
              className="h-5 text-[0.9em] hover:text-[#4ac9ff] transition"
              onClick={() => setShowMenu(!showMenu)}
            >
              <RouteLink to={"/blog"}>BLOG</RouteLink>
            </li>
          </ul>
          <button
            className="w-full bg-white py-[8px] mt-3 text-sm rounded-md font-semibold transition hover:bg-[#11112A] hover:text-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            <RouteLink to={"/contactUs"}>CONTACT</RouteLink>
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
