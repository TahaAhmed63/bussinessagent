import React from 'react'
import imag from "../../assets/banner/Mockup.png"

const Section5 = () => {
    return (
        <div className='container'>
            <div className='row text-dark justify-content-center align-items-center vh-100' >
                <div className='col-md-6'>
                    <p style={{fontSize:"42px", fontWeight:'700'}} className='text-dark'>Classifications</p>
                    <p style={{fontSize:"14px"}}>it's a best-in-class product that isn't trying to replace the <br /> rest of your stack. That's why it integrates with everything <br /> else, including your spreadsheets, slide decks, flowcharts,<br /> task managers, and much more.</p>
                </div>
                <div className='col-md-6'>
               <img width="100%" src={imag} alt='image' />
                </div>
            </div>
        </div>
    )
}

export default Section5