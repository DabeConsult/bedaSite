import React from "react";
import NavBar from "../components/NavBar";
import BedaFooter from "../components/BedaFooter";
import FooterMain from "../components/FooterMain";
import BlogDetailsSecA from "../components/BlogDetailsSecA";

function BlogDetails() {
  return (
    <div>
      <NavBar bgCl={"bg-[#0863bf]"} />
      <BlogDetailsSecA />
      <div className="w-full flex justify-center pt-40 px-[24px] md:px-[40px] lg:px-[150px] bg-[#11112A]">
        <BedaFooter bgCl={`bg-[#11112A]`} />
      </div>
      <FooterMain bgClr={`bg-[#11112A]`} />
    </div>
  );
}

export default BlogDetails;
