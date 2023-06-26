import React from 'react'
import dollar from "./../../assets/$50.png"
import check from "./../../assets/check.png"
import { Link } from 'react-router-dom'
const ResgistrationCard = () => {
  return (
   <>
<div className='container pd-10'>
<div className='row mx-auto'>
<div className='blog-wrap d-flex w-100 justify-content-space-around'>
<div className='blog-box'>
        <div className='red-bg'>
<h6 className='text-center w-100 card-head'>

EIN SERVICE
</h6>
        </div>
        <div className='text-center card-money'>
      <h4>$50</h4>
      <div className='underline'> 
<p ></p>
        </div>
        </div>

<div className='card-para'>
    <p>Have a social security number (SSN)? Great! Let us deal with the IRS and get your EIN fast.</p>
</div>
<div className='row justify-content-center d-flex main'>
    <div className='col-md-2 '>
        <img src={check} style={{
         width: "23.197px",
         height:" 21.213px"
        }}/>
    </div>
    <div className='col-md-10'>
       <p className='card-para-2'>No hassles</p>
       <div className='underline-2'>
        <p></p>
       </div>
    </div>


    <div className='col-md-2'>
        <img src={check} style={{
         width: "23.197px",
         height:" 21.213px"
        }}/>
    </div>
    <div className='col-md-10'>
    <p  className='card-para-2'>Stress free</p>
    <div className='underline-2'>
        <p></p>
    </div>
    </div>


    <div className='col-md-2'>
        <img src={check} style={{
         width: "23.197px",
         height:" 21.213px"
        }}/>

 
</div>
<div className='col-md-10'>
    <p  className='card-para-2'>Filed in 2 days</p>
    <div className='underline-2'>
    <div className='underline-2'>
        <p></p>
    </div>
    </div>
    </div>

    <div className='col-md-2'>
        <img src={check} style={{
         width: "23.197px",
         height:" 21.213px"
        }}/>


</div>
<div className='col-md-10'>
    <p  className='card-para-2'>   EIN received in 4 days</p>
    <div className='underline-2'>
    <div className='underline-2'>
        <p></p>
    </div>
    </div>
    </div>
</div>
<div className='d-flex justify-content-center align-items-center ' style={{
    position:"relative",
    top:"20px"
}}>
<Link className='buybtn' to="#" > Buy Now</Link>
</div>
 </div>
 <div className='blog-box'>
        <div className='red-bg'>
<h6 className='text-center w-100 card-head'>

EIN SERVICE
</h6>
        </div>
        <div className='text-center card-money'>
      <h4>$200</h4>
      <div className='underline'> 
<p ></p>
        </div>
        </div>

<div className='card-para'>
    <p>Have a social security number (SSN)? Great! Let us deal with the IRS and get your EIN fast.</p>
</div>
<div className='row justify-content-center d-flex main'>
    <div className='col-md-2 '>
        <img src={check} style={{
         width: "23.197px",
         height:" 21.213px"
        }}/>
    </div>
    <div className='col-md-10'>
       <p className='card-para-2'>We follow up with the IRSa</p>
       <div className='underline-2'>
        <p></p>
       </div>
    </div>


    <div className='col-md-2'>
        <img src={check} style={{
         width: "23.197px",
         height:" 21.213px"
        }}/>
    </div>
    <div className='col-md-10'>
    <p  className='card-para-2'>No hidden fees</p>
    <div className='underline-2'>
        <p></p>
    </div>
    </div>


    <div className='col-md-2'>
        <img src={check} style={{
         width: "23.197px",
         height:" 21.213px"
        }}/>

 
</div>
<div className='col-md-10'>
    <p  className='card-para-2'>Filed in 2 days</p>
    <div className='underline-2'>
    <div className='underline-2'>
        <p></p>
    </div>
    </div>
    </div>

    <div className='col-md-2'>
        <img src={check} style={{
         width: "23.197px",
         height:" 21.213px"
        }}/>


</div>
<div className='col-md-10'>
    <p  className='card-para-2'>   EIN received in 10 days</p>
    <div className='underline-2'>
    <div className='underline-2'>
        <p></p>
    </div>
    </div>
    </div>
</div>
<div className='d-flex justify-content-center align-items-center ' style={{
    position:"relative",
    top:"20px"
}}>
<Link className='buybtn' to="#" > Buy Now</Link>
</div>
 </div>

</div>
</div>
</div>
   
   </>
  )
}

export default ResgistrationCard