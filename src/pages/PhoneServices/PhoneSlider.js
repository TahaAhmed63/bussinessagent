import React from 'react'

import backround from "../../assets/background (2).png"
import stars from "./../../assets/star 2.png"
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/pagination";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);
const PhoneSlider = () => {
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
          slidesPerView: 1,
          spaceBetween: 20,
        },
        900:{
          slidesPerView: 1,
          spaceBetween: 20,
        }
      }
  return (
    
<>
<div className='container '>
    <div className='row justify-content-center'>
    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 mx-auto'>
<h6 className='text-center d-flex justify-content-center slider-head'>
Customer Testimonials

</h6>
<h4 className='text-center d-flex justify-content-center nest-slider-head'>
Trust our clients
</h4>

    </div>

    </div>
  
</div>
<div  className='persons-bg'>
    <div className='slide-wrap-2'>
<Swiper
      slidesPerView={2}
      spaceBetween={20}
      navigation={false}
      
      pagination={false}
      loop={true}
     className='whybest_slider'
     dots={true}
  breakpoints={breakpoints}
      autoplay={{
        delay:4000,
        disableOnInteraction: true
      }}>
        <SwiperSlide>
<div className='mx-auto d-block justify-content-center testimonial-box'>
    <h6 className='d-flex justify-content-center text-center slide-info-head' >
    Mark Smith / Travel Enthusiast
    </h6>
<div className='star-in-line d-flex mx-auto justify-content-center'>
<img src={stars} className='img-fluid' />
<img src={stars} className='img-fluid' />
<img src={stars} className='img-fluid'/>
<img src={stars} className='img-fluid'/>
</div>

<p className='slide-detail'>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
in a piece of classical Latin literature from 45 BC.
</p>
    

</div>
</SwiperSlide>
<SwiperSlide>
<div className='mx-auto d-block justify-content-center testimonial-box'>
    <h6 className='d-flex justify-content-center text-center slide-info-head' >
    Mark Smith / Travel Enthusiast
    </h6>
<div className='star-in-line d-flex mx-auto justify-content-center'>
<img src={stars} className='img-fluid'/>
<img src={stars} className='img-fluid'/>
<img src={stars} className='img-fluid'/>
<img src={stars} className='img-fluid'/>
</div>

<p className='slide-detail'>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
in a piece of classical Latin literature from 45 BC.
</p>
    

</div>
</SwiperSlide>
<SwiperSlide>
<div className='mx-auto d-block justify-content-center testimonial-box'>
    <h6 className='d-flex justify-content-center text-center slide-info-head' >
    Mark Smith / Travel Enthusiast
    </h6>
<div className='star-in-line d-flex mx-auto justify-content-center'>
<img src={stars} className='img-fluid'/>
<img src={stars} className='img-fluid'/>
<img src={stars} className='img-fluid'/>
<img src={stars} className='img-fluid'/>
</div>

<p className='slide-detail'>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
in a piece of classical Latin literature from 45 BC.
</p>
    

</div>
</SwiperSlide>
</Swiper>

</div>
 
  
</div>

</>
  )
}

export default PhoneSlider