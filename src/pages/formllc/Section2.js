import React from 'react'
import img from '../../assets/Rectangle 13.png'
import './formllC.css'

const Section2 = () => {
    return (
        <>
                <div class="container text-center Section2">
                    <div class="row">
                            <div class="col-lg-6">
                                <h1 className='col-lg-12 text-white text-start heading2'>How to Start an LLC</h1>
                                <p className='col-lg-12 text-white text-start pera2'>To start an LLC, youll need to choose a name for your business, select a registered agent, file Articles of Organization with the state, create an operating agreement, obtain an Employer Identification Number (EIN) from the IRS, and pay any applicable state filing fees. LLC requirements vary state by state, so its important that you be well-versed in your specific state laws before proceeding. Generally, it comes down to these five basic steps in our How to Start an LLC guide below.</p>
                                <div className='col-lg-6 text-start'>
                                    <button type="button" class="btn btn-primary" id='Sectionbtn2'>Create Your LLC Now!</button>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <img src={img} alt="" className='w-100' />
                            </div>
                        </div>
                    </div>
            <section className='Section2 col-lg-12'>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 className='col-lg-12 text-white text-center heading3'>Name your LLC</h1>
                            <p className='col-lg-12 text-white text-center pera3'>Now that youve decided you want to form an LLC (definition), its time to bring your dream to life with its own name — and yes, it must be unique. When naming your LLC, you must choose something completely different from any other limited liability companies in your state.
                                The rules as to how different your LLCs name must be from others vary state by state. Although sometimes all it takes is switching up the punctuation or changing a word from singular to plural to qualify, its usually a smoother process when the names are more distinct. However, one component that is always required is the inclusion of “limited liability company” or an abbreviation of it at the end of the business name. The acceptable abbreviations also vary by state.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2