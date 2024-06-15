import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import Believe from '../components/Believe'
import ServicesMain from '../components/ServicesMain'
import ProjectsMain from '../components/ProjectsMain'
import FooterMain from '../components/FooterMain'
import FaqMain from '../components/FaqMain';



function Home() {

  return (
    <div >
      <NavBar bgCl={"bg-[#094889]"}/>
      <Hero />
      <ChooseUs />
      <Believe/>
      <ServicesMain/>
      <ProjectsMain/>
      <FaqMain/>
      <FooterMain bgClr={`bg-[#11112A]`} />
    </div>
  )
}

export default Home