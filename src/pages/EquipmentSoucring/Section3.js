import React, { useRef } from "react";
import box_imag from "../../assets/banner/Rectangle 5.png"
import box_imag1 from "../../assets/banner/Rectangle 7.png"
import box_imag2 from "../../assets/banner/Rectangle 6.png"
import "./Section3.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import Slider from "react-slick";

const Section3 = () => {
    const data = [
        {
            image: box_imag,
            title: "Lorem Ipsum is simply dummy text",
            description: "Details",
            rate: "4.8"
        },
        {
            image: box_imag1,
            title: "Lorem Ipsum is simply dummy text",
            description: "Details",
            rate: "4.5",
        },
        {
            image: box_imag2,
            title: "Lorem Ipsum is simply dummy text",
            description: "Details",
            rate: "5.0",
        },
        {
            image: box_imag2,
            title: "Lorem Ipsum is simply dummy text",
            description: "Details",
            rate: "5.0",
        }
    ]

    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };
    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    //   dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='container'>
                <div className='row d-flex justify-content-around align-items-center '>
                    <div className='col-md-6 equip_sec3'>
                        Explore top destination
                    </div>
                    <div className='col-md-6 d-flex justify-content-end'>
                        {/* <img style={{ width: '20%' }} src={img1} alt='img' /> */}
                        <button onClick={previous} className='btn btn-outline-primary equipment_btn me-3 d-flex justify-content-center align-items-center'>
                            <FaArrowLeft className='equipment_icon' />
                        </button>
                        <button onClick={next} className='btn btn-primary equipment_btn d-flex justify-content-center align-items-center'>
                            <FaArrowRight className='equipment_icon' />
                        </button>
                    </div>
                </div>

                <div className=' mt-5'>
                    <Slider ref={sliderRef} {...settings}>
                        {data.map((item, index) => (
                            <div className='text-dark equipment_container ' >
                                <img width={'100%'} height={'250px'} src={item.image} alt="photos" />
                                <p style={{ fontSize: "23px", fontWeight: "700", margin: "15px" }}>{item.title}</p>
                                <p style={{ fontSize: "18px", color: "#191825BF", margin: "15px" }}>{item.description}</p>
                                <p style={{ fontSize: "18px", margin: "15px", color: "#FF5722" }}>{item.rate} <AiFillStar /></p>
                            </div>
                        ))}
                    </ Slider>
                    {/* {
                    data.map((val, index) => {
                        return (
                            <div className='text-dark equipment_container p-0 m-4' >
                                <img className='equipment_box' src={val.image} alt="photos" />
                                <p style={{ fontSize: "23px", fontWeight: "700", margin: "15px" }}>{val.title}</p>
                                <p style={{ fontSize: "18px", color: "#191825BF", margin: "15px" }}>{val.description}</p>
                                <p style={{ fontSize: "18px", margin: "15px", color: "#FF5722" }}>{val.rate} <AiFillStar /></p>
                            </div>
                        )
                    })
                } */}
                </div>

            </div>

        </>
    );
};

export default Section3;