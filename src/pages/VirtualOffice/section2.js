import React from 'react'
import image5 from "../../assets/banner/Logos5.png"

const Section2 = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center mx-auto mt-5'>
                <p className='texform'>From startups to the world’s largest companies</p>
                <div>
                    <img className='image-fluid' src={image5} alt='image5' width="100%" />
                </div>
            </div>
        </div>
    )
}

export default Section2