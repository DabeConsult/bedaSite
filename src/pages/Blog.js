import React from "react";
import NavBar from "../components/NavBar";
import BedaFooter from "../components/BedaFooter";
import FooterMain from "../components/FooterMain";
import BlogCards from "../components/BlogCards";

function Blog() {
  return (
    <div>
      <NavBar bgCl={"bg-[#0863bf]"} />
      <BlogCards />
      <div className="w-full flex justify-center px-[24px] md:px-[40px] pt-40 lg:px-[150px] bg-[#00172e]">
        <BedaFooter bgCl={`bg-[#00172e]`} />
      </div>
      <FooterMain bgClr={`bg-[#00172e]`} />
    </div>
  );
}

export default Blog;
