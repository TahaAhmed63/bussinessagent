import React from 'react'
import "../VirtualOffice/Section6.css"
import icon5_1 from "../../assets/banner/icon5_1.png"
import icon5_2 from "../../assets/banner/icon5_2.png"
import icon5_3 from "../../assets/banner/icon5_3.png"
import icon5_4 from "../../assets/banner/icon5_4.png"
import icon5_5 from "../../assets/banner/icon5_5.png"

const Section6 = () => {
    const box_data = [
        {
            image1: icon5_1,
            title: "Creative Ideas",
            describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida "
        },
        {
            image1: icon5_2,
            title: "Creative Ideas",
            describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida "
        },
        {
            image1: icon5_3,
            title: "Creative Ideas",
            describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida "
        },
        {
            image1: icon5_4,
            title: "Creative Ideas",
            describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida "
        },
        {
            image1: icon5_5,
            title: "Creative Ideas",
            describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida "
        }
    ]

    return (
        <div className='container section6 p-5'>
            <div className='row justify-content-around'>
                <div className='box_1 py-4 my-2'>
                    <p className=' h3 text-dark'>Committed to<br /> People, Committed </p>
                    <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                {
                    box_data?.map((val) => {
                        return (
                            <div className='boxs py-4 my-2'>
                                <img className='icon_colors' src={val.image1} alt='icon5_1' />
                                <p className='creatives'>{val.title}</p>
                                <p className='creative2s'>{val.describtion}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section6