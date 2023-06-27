import React from 'react'
import icon5_1 from "../../assets/blog1icon.png"
import icon5_2 from "../../assets/blog2icon.png"
import icon5_3 from "../../assets/blog3icon.png"
import icon5_4 from "../../assets/blog4icon.png"
import icon5_5 from "../../assets/blog5icon.png"
import { Link } from 'react-router-dom'
const PhoneMain = () => {

  
     const box_data = [
        {
            image1: icon5_1,
            title: "Close to Home",
            describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida  "
        },
        {
            image1: icon5_2,
            title: "Simple Setup",
            describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida "
        },
        {
            image1: icon5_3,
            title: "Device-Flexible",
            describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida "
        },
        {
            image1: icon5_4,
            title: "Business Friendly",
            describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida "
        },
        {
            image1: icon5_5,
            title: "Genuine Support",
            describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida "
        }
    ]

    return (
        <>
        <div className='container phoneMain p-5'>
            <div className='row justify-content-around'>
                <div className='box_1 py-4 my-2'>
                    <p className=' h3 text-dark'>Northwest Phone Service — Privacy Made Simple
</p>
                    <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                
                  
                   
                            <div className='box2 box py-4 my-2 span-box'>
                                <img className='icon_color' src={box_data[0].image1} alt='icon5_1' />
                                <p className='creative'>{box_data[0].title}</p>
                                <p className='creative2'>{box_data[0].describtion}</p>
                            </div>
                            <div className='box2 box py-4 my-2 '>
                                <img className='icon_color' src={box_data[1].image1} alt='icon5_1' />
                                <p className='creative'>{box_data[1].title}</p>
                                <p className='creative2'>{box_data[1].describtion}</p>
                            </div>
                            <div className='box2 box py-4 my-2'>
                                <img className='icon_color' src={box_data[2].image1} alt='icon5_1' />
                                <p className='creative'>{box_data[2].title}</p>
                                <p className='creative2'>{box_data[2].describtion}</p>
                            </div>
                            <div className='box2 box py-4 my-2'>
                                <img className='icon_color' src={box_data[3].image1} alt='icon5_1' />
                                <p className='creative'>{box_data[3].title}</p>
                                <p className='creative2'>{box_data[3].describtion}</p>
                            </div>
                            <div className='box2 box py-4 my-2'>
                                <img className='icon_color' src={box_data[4].image1} alt='icon5_1' />
                                <p className='creative'>{box_data[4].title}</p>
                                <p className='creative2'>{box_data[4].describtion}</p>
                            </div>
                        
                  
                
            </div>
            <div className='row py-5 justify-content-center '>
                <div className='col-xxl-12 col-lg-12 col-md-12 col-sm-12  justify-content-center  main-btn'>
                <Link to="#">Sign Up For Free</Link>
                </div>
                <div className='col-xxl-12 col-lg-12 col-md-12 col-sm-12  py-5  justify-content-center mx-auto'>
                    <h4 className='little-detail'>
                    How Does VoIP Phone Service Work?
                    </h4>
                    <p className='little-detail-para'>
                    Your VoIP phone number looks and acts like an ordinary local number—you’ll be able to call, text, check your voicemail, save contacts and more. But to do these things, you’ll need a good internet connection. Here’s how it actually works.
                    </p>
                </div>
            </div>

        </div>
    
    </>
  )
}

export default PhoneMain