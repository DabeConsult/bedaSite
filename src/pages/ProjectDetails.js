import React from "react";
import NavBar from "../components/NavBar";
import ProjectDetailsSecA from "../components/ProjectDetailsSecA";
import BedaFooter from "../components/BedaFooter";
import FooterMain from "../components/FooterMain";

function ProjectDetails() {
  return (
    <div>
      <NavBar bgCl={"bg-[#0863bf]"} />
      <ProjectDetailsSecA />
      <div className="w-full flex justify-center px-[24px] md:px-[40px] pt-40 lg:px-[150px] bg-[#11112A]">
        <BedaFooter bgCl={`bg-[#11112A]`} />
      </div>
      <FooterMain bgClr={`bg-[#11112A]`} />
    </div>
  );
}

export default ProjectDetails;
