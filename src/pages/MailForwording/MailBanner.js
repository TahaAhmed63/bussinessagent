import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import mybanner from "./../../assets/MailPageBanner/MailBanner.png"

const MailBanner = () => {
  return (
<>
<div className="overlay"></div>
<Container>
        <Row className="banenr-head-wrap">
<Col md={6} lg={6} xxlg={6} sm={12} className="main-head-wrap">
    <div className="head-1">
        <h4>
        MAIL FORWARDING
        </h4>  
    </div>
<div className="big-head">
    <h1>
    We are Startup <span>Creative Landrick Agency</span> 
    </h1>
</div>
<div className="banner-para">
    <p>
    Launch your campaign and benefit from our expertise on 
designing and managing conversion centered bootstrap v5 html page.
    </p>
</div>
<div className="mail-btn">
 <Link to=""> Get Started</Link>
</div>
</Col>
<Col md={6} lg={6} xxlg={6} sm={12} className="banner-main-img">
<div className="banner-img-wrap">
        <img src={mybanner} className="img-fluid" alt="asa"/>
    </div>
</Col>
        </Row>
</Container>


</>
  )
}

export default MailBanner