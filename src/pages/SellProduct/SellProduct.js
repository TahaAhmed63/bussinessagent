import React from 'react'
import Banner from './Banner'
import './SellProduct.css'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section2 from './Section2'
import Navbar from '../../MainComponent/Navbar'
import Logo from '../../assets/Logo7.png'

const SellProduct = () => {
  return (
    <div>
       <Navbar logo={Logo} linkcolor="Black"/>

        <Banner/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
    </div>
  )
}

export default SellProduct