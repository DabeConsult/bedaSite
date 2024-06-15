import React from "react";
import NavBar from "../components/NavBar";
import AppSrv1 from "../components/AppSrv1";
import AppSrv2 from "../components/AppSrv2";
import FooterMain from "../components/FooterMain";
import BedaFooter from "../components/BedaFooter";

function AppDevServices() {
  return (
    <div>
      <NavBar bgCl={"bg-[#0863bf]"} />
      <AppSrv1 />
      <AppSrv2 />
      <div className="w-full flex justify-center px-[24px] pt-40 md:px-[40px] lg:px-[150px] bg-[#00172e]">
        <BedaFooter bgCl={`bg-[#00172e]`} />
      </div>
      {/* <BedaFooter bgCl={`bg-[#00172e]`}/> */}
      <FooterMain bgClr={`bg-[#00172e]`} />
    </div>
  );
}

export default AppDevServices;
