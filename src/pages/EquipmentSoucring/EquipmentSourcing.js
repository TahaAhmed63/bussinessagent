import React from 'react'
import "../EquipmentSoucring/EquipmentSourcing.css"
import Icon from "../../assets/banner/equipment_ICON.png"
import Section2 from '../EquipmentSoucring/Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

const EquipmentSourcing = () => {
    return (
        <>
            <div
                className="conatiner-fluid Equipment_img"
                style={{
                    paddingTop:'150px'
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pading_equipment">
                            <h1 className='text-white Moscow'>Moscow</h1>
                            <p className='text-white'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Massa sem enim tellus vel molestie donec quis. Est <br /> maecenas ultrices magna nibh mi habitasse elementum nisi.
                            </p>
                            <div className="btnBanner1 text-white">
                                More <img src={Icon} alt="Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </>
    )
}

export default EquipmentSourcing