import React from "react";
// import img from "../../assets/section5img.png";
const Section5 = () => {
  return (
    <div className="container mx-auto " style={{ marginTop:'100px',  }}>
      <div className="row align-items-center">
        <div className="col-md-6 ">
          {/* <img src={img} alt="Photos" width={"100%"} height={"376.08px"} /> */}
        </div>
        <div className="col-md-6 ">
          <h1 style={{ fontSize: "32px"}}>
            Free Phone Service for 60 Days – No-risk Trial
          </h1>
          <p style={{fontSize:'16px',lineHeight:'32px'}}>
            Need a business phone? We’ve got you covered with our convenient
            Phone Service. More than just call forwarding, Phone Service gives
            you a virtual phone number with your choice of area code, plus a
            bunch of easy-to-use features like customizable Caller ID and
            Voicemail. Get a free 60-day trial when you hire us to form your
            Texas corporation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
