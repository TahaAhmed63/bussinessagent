import React from 'react'
import icon1 from '../../assets/Sellicon1.png'
import icon2 from '../../assets/Sellicon2.png'
import icon3 from '../../assets/Sellicon3.png'
const Section2 = () => {
  return (
    <div className='container mt-5'>
         <div className='row '>
            <p className='text-center' style={{color:'#2E3192',fontSize:'18px',lineHeight:'24px'}}>What we Serve</p>
            <h1 className='text-center' style={{fontSize:'40px',lineHeight:'54px',textTransform:'capitalize'}}>fruit and vegetable delivered to your home</h1>
         </div>
         <div className='row mt-5 justify-content-around  gap-sm-5'>
            <div className='d-flex flex-column forHover justify-content-center align-items-center' style={{width:'300px',height:'310px'}}>
                <img src={icon1} alt='photos'/>
                <h3 style={{fontSize:'22px'}}>Lorem Ipsum</h3>
                <p style={{width:'243px',color:'#676767',marginTop:'10px',fontSize:'14px',textAlign:'center'}}>Enjoy Order in a hand using the fresness of groceries</p>
            </div>
            <div className='d-flex flex-column forHover justify-content-center align-items-center' style={{width:'300px',height:'310px'}}>
                <img src={icon2} alt='photos'/>
                <h3 style={{fontSize:'22px'}}>Lorem Ipsum</h3>
                <p style={{width:'243px',color:'#676767',marginTop:'10px',fontSize:'14px',textAlign:'center'}}>Enjoy Order in a hand using the fresness of groceries</p>
            </div>
            <div className='d-flex flex-column forHover justify-content-center align-items-center' style={{width:'300px',height:'310px'}}>
                <img src={icon3} alt='photos'/>
                <h3 style={{fontSize:'22px'}}>Lorem Ipsum</h3>
                <p style={{width:'243px',color:'#676767',marginTop:'10px',fontSize:'14px',textAlign:'center'}}>Enjoy Order in a hand using the fresness of groceries</p>
            </div>
         </div>
    </div>
  )
}

export default Section2