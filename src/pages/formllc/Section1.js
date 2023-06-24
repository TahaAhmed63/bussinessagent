import React from 'react'
import './formllC.css'
import img from '../../assets/s4.png'

const formllC = () => {
    const listings = [
        {
            img: img,
            title: "Name Your LLC"
        },
        {
            img: img,
            title: "Choose a Registered Agent"
        },
        {
            img: img,
            title: "File the Certificate of Formation / Articles of Organization"
        },
        {
            img: img,
            title: "Create an Operating Agreement"
        },
        {
            img: img,
            title: "Apply for an EIN and Review Tax Requirements"
        },

    ]
    return (
        <>
            <section className='sectiones1'>
                                    {listings.map((listing ,imdex) => {
                                        return (
                <div className="container-fluid box">
                                            <div className="" key={imdex}>
                                                <img src={listing.img} alt="ok" className='img1'/>
                                                <p className='tiltes'>{listing.title}</p>
                                            </div>
                                </div>
                                )
                            })}
            </section>
        </>
    )
}

export default formllC