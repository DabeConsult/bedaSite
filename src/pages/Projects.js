import React from 'react'
import NavBar from '../components/NavBar'
// import BedaFooter from '../components/BedaFooter'
import FooterMain from '../components/FooterMain'
import ProjectCards from '../components/ProjectCards'
import Services1Footer from '../components/Services1Footer'

function Projects() {
  return (
    <div>
        <NavBar bgCl={"bg-[#0C6AB5]"}/>
        <ProjectCards />
        <Services1Footer/>
        <FooterMain bgClr={`bg-[#11112A]`} />
    </div>
  )
}

export default Projects