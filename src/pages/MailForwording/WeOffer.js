import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import offer1 from "../../Assets/location 2.png"
import offer2 from "../../Assets/calendar 1.png"
import offer3 from "../../Assets/ticket 1.png"
import owner1 from "../../Assets/owner.png.png"
//import owner2 from "../../Assets/owner2.png.png"
const WeOffer = () => {
  return (
<>
<Container>
    <Row>
        <Col xxl={6} lg={6} md={12} sm={12}>
           <div className='offer-main-wrap'>
            <div className='offer-wrap'>
                <h1>
                We offer best services
                </h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
from 45 BC.</p>
            </div>
            <div className='offer-box'>
                <div className='offer-icon'>
                    <img src={offer1} alt='asas'/>
                </div>
                <div className='offer-info'>
<h6>Schedule your trip</h6>
<p>It has roots in a piece of classical</p>
                </div>
            </div>
            </div>
            <div className='offer-box'>
                <div className='offer-icon'>
                    <img src={offer2} alt='asas'/>
                </div>
                <div className='offer-info'>
<h6>We offer best services</h6>
<p>Lorem Ipsum is not simply random text</p>
                </div>
            </div>
            <div className='offer-box'>
                <div className='offer-icon'>
                    <img src={offer3} alt='asas'/>
                </div>
                <div className='offer-info'>
<h6>Get discounted coupons</h6>
<p>Lorem Ipsum is not simply random text</p>
                </div>
            </div>


        </Col>
        <Col xxl={6} lg={6} md={12} sm={12} className='mx-auto'>
          <div className='side-img-wrap'>
            <img src={owner1} alt='asasa' className='img-fluid'/>
          </div>


        </Col>
    </Row>
</Container>
</>
  )
}

export default WeOffer