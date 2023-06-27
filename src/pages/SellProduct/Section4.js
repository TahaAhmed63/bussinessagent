import React from "react";
import image from "../.././assets/sellsection4.png";
import {BsArrowRight} from 'react-icons/bs'
const Section4 = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: "100px",
        paddingTop: "50px",
        paddingBottom: "30px",
      }}
    >
      <div className="row">
        <div className="col-md-12 col-lg-6 col-12 ">
          <img src={image} alt="photos" width={"100%"} />
        </div>
        <div className="col-md-12 col-lg-6 col-12 mt-4 ">
          <h1
            style={{ fontSize: "70px", lineHeight: "90px", fontWeight: "700" }}
          >The overview you’ve always wanted
          </h1>
         
          <p
            style={{ fontSize: "18px", lineHeight: "26px", marginTop: "10px" }}
          >
            Depending on elections made by the LLC and the number of members,
            the IRS will treat an LLC as either a corporation, partnership, or
            as part of the LLC’s owner’s tax return (a “disregarded entity”).
            Specifically, a domestic LLC with at least two members is classified
            as a partnership
          </p>
          <p className="mt-5" style={{color:'blue'}}>Learn More <BsArrowRight/></p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
