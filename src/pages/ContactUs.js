import React from "react";
import NavBar from "../components/NavBar";
import ContactUsComp from "../components/ContactUsComp";
import Services1Footer from "../components/Services1Footer";
import FooterMain from "../components/FooterMain";

function ContactUs() {
  return (
    <div>
      <NavBar bgCl={"bg-[#0863bf]"} />
      <ContactUsComp />
      <Services1Footer />
      <FooterMain bgClr={`bg-[#11112A]`} />

    </div>
  );
}

export default ContactUs;
