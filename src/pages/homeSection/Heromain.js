import React from 'react'
import HerosSectins from './HerosSectins'
import HerosSction1 from './HerosSction1'
import './Homesection.css'
import Navbar from '../../MainComponent/Navbar'
import Logo from '../../assets/Logo7.png'
const Heromain = () => {
  return (
    <>
    <Navbar logo={Logo} linkcolor="black"/>
    <HerosSectins />
    <HerosSction1 />
    </>
  )
}

export default Heromain