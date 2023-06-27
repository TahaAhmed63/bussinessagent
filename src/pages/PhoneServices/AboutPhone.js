import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
const AboutPhone = () => {
  return (
   <>
   <section className='about-phone'>
   <Container>
    <Row>
      <Col xxl={6} xl={6} lg={6} md={6} className='center'>
        <h1 className='about-head'>I can help you in these particular areas.</h1>
      </Col>
      <Col xxl={6} xl={6} lg={6} md={6}>
        <p  className='about-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
        <br/>
        <p className='about-para'> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </Col>
      </Row>
   </Container>
   </section>
   </>
  )
}

export default AboutPhone