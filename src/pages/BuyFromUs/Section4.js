import React from "react";
import img from "../../assets/buysection4.png";
const Section4 = () => {
  return (
    <div
      className="container mx-auto "
      style={{ marginTop: "140px", marginBottom: "140px", height: "" }}
    >
      <div className="row align-items-center justify-content-center">
        <div className="col-md-12 col-lg-4 col-12 img-fluid">
          <img src={img} alt="Photos" width={"100%"} height={"343.823px"} />
        </div>
        <div className="col-lg-1 col-md-12" />
        <div className="col-md-12 col-lg-6 col-12">
          <h1 style={{ fontSize: "32px" }}>Light, Fast & Powerful</h1>
          <p style={{ fontSize: "16px", lineHeight: "32px" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            <br/>
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <button className="Section2btn">Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default Section4;
