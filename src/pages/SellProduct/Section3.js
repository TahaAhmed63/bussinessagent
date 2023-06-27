import React from "react";
import image from "../../assets/sectionsellproduct.png";
const Section3 = () => {
  return (
    <div className="container-fuild" style={{marginTop: "100px",paddingTop:'50px',paddingBottom:'30px',backgroundColor:'#f2f9ff' }}>
        <div className="container" >
      <div className="row">
        <div className="col-md-12 col-lg-6 col-12 mt-5">
          <h1 className="Section3H1" >Classifications</h1>
          <h2 style={{fontSize:'42px',lineHeight:'52px',fontWeight:'700'}}>Where collaboration meets knowledge</h2>
          <p style={{fontSize:'14px',lineHeight:'24px',marginTop:'10px'}}>
            Depending on elections made by the LLC and the number of members,
            the IRS will treat an LLC as either a corporation, partnership, or
            as part of the LLC’s owner’s tax return (a “disregarded entity”).
            Specifically, a domestic LLC with at least two members is classified
            as a partnership
          </p>
        </div>
        <div className="col-md-12 col-lg-6 col-12 ">
          <img src={image} alt="photos" width={'100%'} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section3;
