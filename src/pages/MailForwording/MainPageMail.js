import React from 'react'
import Navbar from '../../MainComponent/Navbar'
import mylogo from "./../../Assets/Logo7.png"
import MailBanner from './MailBanner'
import "./style.css"

const MainPageMail = () => {
  return (
 <> 
<Navbar logo={mylogo}  linkcolor="rgb(19 19 19 / 93%)"/> 
<div >
<MailBanner/>
</div>
 
 </>
  )
}

export default MainPageMail