import React from 'react'
import img from '../../assets/Rectangle 13.png'
import './formllC.css'

const Section2 = () => {
  return (
    <>
    
            <section className='Section2 col-lg-12'>
                <div class="col-lg-12 container-fluid d-flex align-items-center justify-cintent-center position-relative">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 className='text-white text-start heading2'>How to Start an LLC</h1>
                                <p className='text-white text-start pera2'>To start an LLC, youll need to choose a name for your business, select a registered agent, file Articles of Organization with the state, create an operating agreement, obtain an Employer Identification Number (EIN) from the IRS, and pay any applicable state filing fees. LLC requirements vary state by state, so its important that you be well-versed in your specific state laws before proceeding. Generally, it comes down to these five basic steps in our How to Start an LLC guide below.</p>
                                <div className='col-lg-6 text-start'>
                                    <button type="button" class="btn btn-primary" id='Sectionbtn2'>Create Your LLC Now!</button>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img src={img} alt="" width='100%' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     </>
  )
}

export default Section2