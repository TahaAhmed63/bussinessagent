import React from "react";
import img from "../../assets/Section2img.png";
const Section2 = () => {
  return (
    <div className="container mx-auto " style={{marginTop:'140px',marginBottom:'140px',height:''}}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 style={{fontSize:'32px'}}>How to Start an LLC</h1>
          <p style={{fontSize:'16px',lineHeight:'32px'}}>
            Can you start a Texas corporation without sacrificing your privacy?
            Absolutely. When we form your corporation we list our Texas business
            address in lieu of personal addresses for every director. We do this
            because everything contained in your Certificate of Formation
            becomes a matter of public record, available to anyone, once it gets
            submitted to the Secretary of State. Create Your LLC Now!
          </p>
          <button className="Section2btn">
          Create Your LLC Now!
          </button>
        </div>
        <div className="col-md-6 img-fluid">
         <img src={img} alt="Photos" width={'100%'} height={'343.823px'} />
        </div>
      </div>
    </div>
  );
};

export default Section2;
