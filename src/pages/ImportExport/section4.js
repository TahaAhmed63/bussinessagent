import React from "react";
import Card from "./Card";
import image1 from "../../assets/Image-100.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Section4 = () => {
  const data = [
    {
      image: image1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s",
      company: "ABC Company",
      Name: "John Smith, CEO",
    },
    {
      image: image1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s",
      company: "ABC Company",
      Name: "John Smith, CEO",
    },
    {
      image: image1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s",
      company: "ABC Company",
      Name: "John Smith, CEO",
    },
    {
      image: image1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s",
      company: "ABC Company",
      Name: "John Smith, CEO",
    },
    {
      image: image1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s",
      company: "ABC Company",
      Name: "John Smith, CEO",
    },
    {
      image: image1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text eversince the 1500s",
      company: "ABC Company",
      Name: "John Smith, CEO",
    },
  ];
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "50px",
              color: "black",
            }}
          >
            Join Thousands of Satisfied Customers
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "32px", color: "black" }}>
            Don't just take our word for it. Hear what our customers have to say
            about their experience with <br /> TechVantage.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data?.map((datal, index) => {
            return (
              <SwiperSlide key={index}>
                 <Card data={datal} />
              </SwiperSlide>
            );
          })}
        
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section4;
