import React from 'react'
import './formllC.css'
import img from '../../assets/letter 1.png'
import img1 from '../../assets/choose 1.png'
import img2 from '../../assets/stamp 1.png'
import img3 from '../../assets/stamp 2.png'
import img4 from '../../assets/stamp 3.png'

const formllC = () => {
    const listings = [
        {
            img: img,
            title: "Name Your LLC"
        },
        {
            img: img1,
            title: "Choose a Registered Agent"
        },
        {
            img: img2,
            title: "File the Certificate of Formation / Articles of Organization"
        },
        {
            img: img3,
            title: "Create an Operating Agreement"
        },
        {
            img: img4,
            title: "Apply for an EIN and Review Tax Requirements"
        },

    ]
    return (
        <>
            <section className='sectiones1 col-lg-8'>
                {listings.map((listing, imdex) => {
                    return (
                        <div className="col-lg-4  box" key={imdex}>
                            <img src={listing.img} alt="ok" className='img1' />
                            <p className='tiltes'>{listing.title}</p>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default formllC