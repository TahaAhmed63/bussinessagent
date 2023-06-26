import React from 'react'
import lady from "../../Assets/My project 1.png"
import {Container,Row,Col} from 'react-bootstrap'

const RegistrationAgentServices = () => {
  return (
  <>
<section className='registration-agent'>


<div className='all-blue'>
<div className='img-wrap'>
    <img src={lady} alt='asAA' className='img-fluid'/>
    {/* <div className='discount-btn'>
        <Link to='#'> Discounted Price</Link>
    </div> */}
</div>



        
   
</div>

<div className='main-wrap-lady mx-auto'>
<div className='lady-para-head'>
    <h4>Free Mail Forwarding with Registered Agent Service</h4>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.

    </p>
</div>
<Container>
    <Row className='gy-3'>
        <Col lg={6} xxlg={6} md={6} sm={6} >
<div className='lady-detail'>

<div className='package-box'>
    <h6>500+</h6>
    <p>Holiday Package</p>
</div>
</div>
</Col>

<Col lg={6} xxlg={6} md={6} sm={6} >
<div className='lady-detail'>

<div className='package-box'>
    <h6>100</h6>
    <p>Luxury Hotel</p>
</div>
</div>
</Col>
<Col lg={6} xxlg={6} md={6} sm={6} >
<div className='lady-detail'>

<div className='package-box'>
    <h6>7</h6>
    <p>Premium Airlines</p>
</div>
</div>
</Col>
<Col lg={6} xxlg={6} md={6} sm={6} >
<div className='lady-detail'>

<div className='package-box'>
    <h6>2k+</h6>
    <p>Happy Customer</p>
</div>
</div>
</Col>
</Row>
</Container>
</div>


</section>
    
  </>
  )
}

export default RegistrationAgentServices