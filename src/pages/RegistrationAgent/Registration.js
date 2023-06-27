import React from 'react'
import Navbar from '../../MainComponent/Navbar'
import mylogo from "../../assets/Business Agent-01 4.png"
import BannerR from './BannerR'
import "./style.css"
import WhyUs from './WhyUs'
const Registration = () => {
  return (
 <>
<Navbar logo={mylogo}  linkcolor="#fff"/> 

<BannerR/>
<WhyUs/>
 
 </>
  )
}

export default Registration