import React from 'react'
import NavBar from '../components/NavBar'
import Services1 from '../components/Services1'
import HowItWorks from '../components/HowItWorks'
import Services1Footer from '../components/Services1Footer'
import FooterMain from '../components/FooterMain';


function Services() {
  return (
    <div>
        <NavBar bgCl={"bg-[#0863bf]"}/>
        <Services1 />
        <HowItWorks />
      <Services1Footer />
      <FooterMain bgClr={"bg-[#11112A]"}/>
    </div>
  )
}

export default Services