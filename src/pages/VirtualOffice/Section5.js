import React from 'react'
import "../VirtualOffice/Section5.css"
import imagjustin from "../../assets/banner/justin5.png"

const Section5 = () => {
    return (
        <div className='container'>
            <div className='col d-flex justify-content-center testimonials'>
                TESTIMONIALS
            </div>
            <div className='col d-flex justify-content-center customer'>
                What our customer say
            </div>
            <div className='row my-5'>
                <img src={imagjustin} alt='imagjustin' />
                {/* <div className='col-md-6'></div>
                <div className='col-md-6'>
                    <p className='justin'>Justin</p>
                    <p className='CEO'>CEO</p>
                    <p className='candidate'>“Really Jobfind is the best platform to get any kind <br /> of job, aspecially their support was awesome, They <br /> have tried to level best to give best support of new <br /> candidate.”</p>
                </div> */}
            </div>
        </div>
    )
}

export default Section5