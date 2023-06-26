import React from 'react'
import imvideo5 from "../../assets/banner/Video player 5.png"
import "../VirtualOffice/Section3.css"

const Section3 = () => {
    return (
        <div style={{ height: "600px" }} className='container'>
            <div className='position-relative'>
                <div style={{ background: "#939393" }} className='row mt-5 p-3  height_maindiv'>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h1 >Are you ready to transform your life?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h1 style={{fontSize:"19px"}}>Online consultation
                        </h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt.</p>
                        <h1 style={{fontSize:"19px"}}>Online consultation</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div className="position-absolute top-100 start-50 translate-middle">
                    <img className='img-fluid' src={imvideo5} alt='videimg5' style={{ width: "60vw" }} />
                </div>
            </div>
        </div>
    )
}

export default Section3