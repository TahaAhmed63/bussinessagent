import React from 'react'
import Navbar from '../../MainComponent/Navbar'
import mylogo from "./../../assets/Logo7.png"
import "./style.css"
import Banner2 from './Banner2'
import AboutPhone from './AboutPhone'
import PhoneMain from './PhoneMain'
import PhoneSlider from './PhoneSlider'

const PhoneService = () => {
  return (
<>
<Navbar logo={mylogo}  linkcolor="#000"/> 
<Banner2/>
<AboutPhone/>
<PhoneMain/>
<PhoneSlider/>

</>
  )
}

export default PhoneService