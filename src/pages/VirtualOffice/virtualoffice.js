import React from 'react'
import "../VirtualOffice/virtualoffice.css"
import Section1 from './Section1'
import Section2 from './section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Navbar from '../../MainComponent/Navbar'
import logo from "../../assets/Logo7.png";

const Virtualoffice = () => {
    return (
       <div className='text-white'>
          <Navbar logo={logo} linkcolor="white" />

      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
       </div>
    )
}

export default Virtualoffice