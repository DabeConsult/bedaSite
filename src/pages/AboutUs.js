import React from "react";
import NavBar from "../components/NavBar";
import AboutUsSecA from "../components/AboutUsSecA";
import Team from "../components/Teams";
import Services1Footer from "../components/Services1Footer";
import FooterMain from "../components/FooterMain";

function AboutUs() {
  return (
    <div>
      <section className=" min-h-screen max-h-fit">
        <NavBar bgCl={"bg-[#0863bf]"} />
        <AboutUsSecA />
        <Team />
        <Services1Footer />
        <FooterMain bgClr={`bg-[#11112A]`}/>
      </section>
    </div>
  );
}

export default AboutUs;
