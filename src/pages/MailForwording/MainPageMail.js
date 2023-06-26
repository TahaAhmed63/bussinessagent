import React from 'react'
import Navbar from '../../MainComponent/Navbar'
import mylogo from "./../../Assets/Logo7.png"
import MailBanner from './MailBanner'
import "./style.css"
import MailServices from './MailServices'
import RegistrationAgentServices from './RegistrationAgentServices'
import AboutService from './AboutService'
import WeOffer from './WeOffer'
const MainPageMail = () => {
  return (
 <> 
<Navbar logo={mylogo}  linkcolor="rgb(19 19 19 / 93%)"/> 

<MailBanner/>

  <MailServices/>

  <RegistrationAgentServices/>


  <AboutService/>

  <WeOffer/>

 </>
  )
}

export default MainPageMail