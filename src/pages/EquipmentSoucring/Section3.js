import React from 'react'
import "./Section3.css"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
// import img1 from "../../assets/banner/arrow-left 1.png"
// import img2 from "../../assets/banner/arrow-left 2.png"
import box_imag from "../../assets/banner/Rectangle 5.png"
import box_imag1 from "../../assets/banner/Rectangle 7.png"
import box_imag2 from "../../assets/banner/Rectangle 6.png"

const Section3 = () => {
    const data = [
        {
            image: box_imag,
            title:"Lorem Ipsum is simply dummy text",
            description:"Details",
            rate:"4.8"
        },
        {
            image: box_imag1,
            title:"Lorem Ipsum is simply dummy text",
            description:"Details",
            rate:"4.5",
        },
        {
            image: box_imag2,
            title:"Lorem Ipsum is simply dummy text",
            description:"Details",
            rate:"5.0",
        }
    ]
    return (
        <div className='container'>
            <div className='row d-flex justify-content-around align-items-center '>
                <div className='col-md-6 equip_sec3'>
                    Explore top destination
                </div>
                <div className='col-md-6 d-flex justify-content-end'>
                    {/* <img style={{ width: '20%' }} src={img1} alt='img' /> */}
                    <button className='btn btn-outline-primary equipment_btn me-3 d-flex justify-content-center align-items-center'>
                        <FaArrowLeft className='equipment_icon' />
                    </button>
                    <button className='btn btn-primary equipment_btn d-flex justify-content-center align-items-center'>
                        <FaArrowRight className='equipment_icon' />
                    </button>
                </div>
            </div>

            <div className='row justify-content-center mt-5'>
                {
                    data.map((val)=>{
                        return(
                            <div className='equipment_container p-0 m-4' >
                    <img className='equipment_box' src={val.image} alt='imag' />
                    <p style={{fontSize:"23px", fontWeight:"700", margin:"15px"}}>{val.title}</p>
                    <p style={{fontSize:"18px", color:"#191825BF", margin:"15px"}}>{val.description}</p>
                    <p style={{fontSize:"18px", margin:"15px", color:"#FF5722"}}>{val.rate} <AiFillStar /></p>
                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section3