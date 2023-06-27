import React from 'react'
import "./Section4.css"
import icon_img from "../../assets/banner/Left.png"

const Section4 = () => {
    return (
        <div style={{ background: "#F6F6F6" }} className='container-fluid my-5 py-5'>
            <div className='container text-dark flex-column d-flex justify-content-center align-items-center' >
                <div className='col ' style={{ fontSize: "36px", fontWeight: "500" }} >
                    Light, Fast & Powerful
                </div>
                <div className='col text-center' style={{ fontSize: "16px", marginBottom: "15px" }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean  commodo ligula eget dolor. Aenean <br /> massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br />
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, <br /> sem. Nulla consequat massa quis enim.
                </div>
                <div className='row d-flex justify-content-around w-100 my-5'>
                    <div className='section4_box me-2' >
                        <img src={icon_img} alt="imag" />
                        <p style={{color:"#2A5AF8", fontSize:"16px", fontWeight:"500", marginTop:"15px"}}>Title Goes Here</p>
                        <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                    <div className='section4_box me-2' >
                    <img src={icon_img} alt="imag" />
                        <p style={{color:"#2A5AF8", fontSize:"16px", fontWeight:"500", marginTop:"15px"}}>Title Goes Here</p>
                        <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                </div>
                <div className='row d-flex justify-content-around w-100'>
                    <div className='section4_box me-2' >
                    <img src={icon_img} alt="imag" />
                        <p style={{color:"#2A5AF8", fontSize:"16px", fontWeight:"500", marginTop:"15px"}}>Title Goes Here</p>
                        <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                    <div className='section4_box me-2' >
                    <img src={icon_img} alt="imag" />
                        <p style={{color:"#2A5AF8", fontSize:"16px", fontWeight:"500", marginTop:"15px"}}>Title Goes Here</p>
                        <p style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Section4