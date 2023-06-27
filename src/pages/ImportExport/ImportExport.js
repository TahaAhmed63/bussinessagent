import React from 'react'
import Banner from './Banner'
import './ImportExport.css'
import Section3 from './Section3'
import Section2 from './Section2'
import Section4 from './section4'
import Section5 from './Section5'
import Accordion from './Section6'
import Section7 from './section7'
import Navbar from '../../MainComponent/Navbar'
import Logo from '../../assets/logoFooter.png'
const ImportExport = () => {
  return (
    <div>
       <Navbar logo={Logo} linkcolor="Black"/>
        <Banner/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Accordion/>
        <Section7/>
    </div>
  )
}

export default ImportExport