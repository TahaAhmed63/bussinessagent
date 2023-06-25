import React from 'react'
import img from '../../assets/Maskgroup.png'
const Section3 = () => {
    return (
        <>
             <div class="container text-center Section31">
                    <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <h1 className='text-white text-start  heading3 '>Choose a Registered Agent</h1>
                                <p className='text-white text-start pera2'>To start an LLC, youll need to choose a name for your business, select a registered agent, file Articles of Organization with the state, create an operating agreement, obtain an Employer Identification Number (EIN) from the IRS, and pay any applicable state filing fees. LLC requirements vary state by state, so its important that you be well-versed in your specific state laws before proceeding. Generally, it comes down to these five basic steps in our How to Start an LLC guide below.</p>
                                <div className='col-lg-6 col-md-8 text-start'>
                                    <button type="button" class="btn btn-primary" id='Sectionbtn2'>Appoint a Registered Agent</button>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 Sec3box">
                            
                                <img src={img} alt="" className='w-100 Sectionimg3' />
                            </div>
                            <div class="col-lg-10 box3">
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Section3