import React from "react";
// import img from "../../assets/section3img.png";
const Section2 = () => {
  return (
    <div
      className="container mx-auto "
      style={{ marginBottom:'100px' }}
    >
      <div className="row align-items-center">
        <div className="col-md-6 ">
          {/* <img src={img} alt="Photos" width={"100%"} height={"326.52px"} /> */}
        </div>
        <div className="col-md-6 ">
          <h1 style={{ fontSize: "32px",paddingLeft:'10px' }}>Quick and Easy Filing</h1>
          <p style={{fontSize:'16px',lineHeight:'32px',paddingLeft:'10px'}}>
            No one is faster than Texan Registered Agent when it comes to
            preparing and submitting your corporation. Our expert filers fill
            out and digitally file your Certificate of Formation so you don’t
            have to. You shouldn’t have to wait to get your business up and
            running. With Texan Registered Agent, you won’t. Let us handle every
            aspect of your corporation formation: preparation, filing, follow up
            and annual compliance. Our experts leave nothing to chance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
