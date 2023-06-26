import React from 'react'
import "../EquipmentSoucring/Section2.css"
import faster from "../../assets/banner/equipment_Faster.png"
import cheaper from "../../assets/banner/equipment_cheaper.png"
import hand from "../../assets/banner/equipment_at hand.png"

const Section2 = () => {
    return (
        <div className='container my-5'>
            <div className='col about_us' >ABOUT US</div>
            <div className='row  justify-content-between'>
                <div className='col-md-6'>
                    <p className='equip_p'>Get Started With <br /> Educa Studya.</p>
                </div>
                <div className='col-md-6 d-flex flex-row-reverse align-items-end'>
                    <p className='equip'>View all</p>
                </div>
            </div>
            <div className='d-flex justify-content-between flex-wrap my-5' >
                <div style={{ width: "200px" }}>
                    <img style={{ width: '40%' }} src={faster} alt='faster' />
                    <span className='ms-3 faster'>Faster</span>
                </div>
                <div style={{ width: "200px" }}>
                    <img style={{ width: '40%' }} src={cheaper} alt='faster' />
                    <span className='ms-3 faster'>Cheaper</span>
                </div>
                <div style={{ width: "200px" }}>
                    <img style={{ width: '40%' }} src={hand} alt='faster' />
                    <span className='ms-3 faster'>At hand</span>
                </div>
            </div>
        </div>
    )
}

export default Section2