import React from 'react'
import Banner from './Banner'
import './FromAcorporation.css'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './section7'
import Navbar from '../../MainComponent/Navbar'
import logo from '../../assets/logoFooter.png'
const FromAcorporation = () => {
  return (
    <div>
    <Navbar logo={logo} linkcolor="white"/>
      <Banner/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    </div>
  )
}

export default FromAcorporation