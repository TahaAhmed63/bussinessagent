import React from 'react'
import "./Section6.css"
import image1 from "../../assets/banner/social_icon/img1.png"
import image2 from "../../assets/banner/social_icon/img2.png"
import image3 from "../../assets/banner/social_icon/img3.png"
import image4 from "../../assets/banner/social_icon/img4.png"
import image5 from "../../assets/banner/social_icon/img5.png"
import image6 from "../../assets/banner/social_icon/img6.png"
import image7 from "../../assets/banner/social_icon/img7.png"

const Section6 = () => {

    const images = [
        {
            image: image1
        },
        {
            image: image2
        },
        {
            image: image3
        },
        {
            image: image4
        },
        {
            image: image5
        },
        {
            image: image6
        },
        {
            image: image7
        }
    ]

   

    return (
        <div className='container text-dark'>
            <div style={{ fontSize: '32px', fontWeight: "700" }} className='col text-center'>
                Our Trusted Clients
            </div>
            <div style={{ fontSize: '18px' }} className='col text-center my-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className='row flex-wrap justify-content-center' >
                {
                    images.map((val) => {
                        return (
                            <div className='section6_box m-2' >
                                <img src={val.image} alt="imag" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section6