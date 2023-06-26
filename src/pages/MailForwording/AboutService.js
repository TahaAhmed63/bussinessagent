import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import service1 from "../../assets/icon1.png"
import service2 from "../../assets/icon2.png"
import service3 from "../../assets/icon4.png"
import service4 from "../../assets/icon5.png"

const AboutService = () => {
  return (
   <>
   <section className='About-service'>
   <Container>
    <Row className='justify-content-center '>
        <Col xxl={12} lg={12} md={12} sm={12}>
            <div className='service1'>
                <div className='iconmsg'>
<img src={service1}  alt='sassa'/>
                </div>
                <div className='service-info'>
<h6>
Talk to me first
</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>


                </div>
                
            </div>
        </Col>
        <Col xxl={12} lg={12} md={12} sm={12}>
            <div className='service1'>
                <div className='iconmsg'>
<img src={service2}  alt='sassa'/>
                </div>
                <div className='service-info'>
<h6>
Schedule a meeting
</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>


                </div>
                
            </div>
        </Col>
        <Col xxl={12} lg={12} md={12} sm={12}>
            <div className='service1'>
                <div className='iconmsg'>
<img src={service3}  alt='sassa'/>
                </div>
                <div className='service-info'>
<h6>
Online consultation
</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>


                </div>
                
            </div>
        </Col>
        <Col xxl={12} lg={12} md={12} sm={12}>
            <div className='service1'>
                <div className='iconmsg'>
<img src={service4}  alt='sassa'/>
                </div>
                <div className='service-info'>
<h6>
Ready to start? Let’s talk!
</h6>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>


                </div>
                
            </div>
        </Col>

    </Row>
    
    </Container> 
    </section>
   </>
  )
}

export default AboutService