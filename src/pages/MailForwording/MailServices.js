import React from 'react'
import { Container } from 'react-bootstrap'
import boxicon from "./../../assets/booking 1.png"
import boxicon1 from "../../assets/destination 1.png"
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/pagination";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const MailServices = () => {
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,

    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,

    },
    // when window width is >= 640px
    780: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    900:{
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
  return (
    <>

<section className='services'>
<Container className='d-flex set-mb'>

    <div className='d-flex slide-info' >
<div className='service-head-wrap'>
<h6>Services</h6>
<h4>Mail Forwarding Service by State
</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
</p>
</div>
</div>
    
   
    <div className='slide-wrap'>
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      navigation={false}
      
      pagination={false}
      loop={true}
     className='whybest_slider'
  breakpoints={breakpoints}
      autoplay={{
        delay:4000,
        disableOnInteraction: true
      }}>
      
 

    <SwiperSlide>

    <div className='main-box'>
      <div className='iconBox'>
      <img src={boxicon} alt='asa' className='img-fluid'/>

      </div>
      <div className='service-box-head'>

<h4>California Mail Forwarding Service</h4>
      </div>
      <div className='box-para'>
        <p>What looked like a small patch of purple grass, above five feet.</p>
      </div>

    </div>
    </SwiperSlide>
 
  
    
     
      <SwiperSlide>
      <div className='main-box'>
      <div className='iconBox'>
      <img src={boxicon1} alt='asa' className='img-fluid'/>

      </div>
      <div className='service-box-head'>

<h4>Delaware Mail Forwarding Service</h4>
      </div>
      <div className='box-para'>
        <p>Square, was moving across the sand in their direction.</p>
      </div>

    </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='main-box'>
      <div className='iconBox'>
      <img src={boxicon1} alt='asa' className='img-fluid'/>

      </div>
      <div className='service-box-head'>

<h4>Delaware Mail Forwarding Service</h4>
      </div>
      <div className='box-para'>
        <p>Square, was moving across the sand in their direction.</p>
      </div>

    </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='main-box'>
      <div className='iconBox'>
      <img src={boxicon1} alt='asa' className='img-fluid'/>

      </div>
      <div className='service-box-head'>

<h4>Delaware Mail Forwarding Service</h4>
      </div>
      <div className='box-para'>
        <p>Square, was moving across the sand in their direction.</p>
      </div>

    </div>
    </SwiperSlide>
    </Swiper>
</div>



</Container>
</section>
    </>
  )
}
export default MailServices