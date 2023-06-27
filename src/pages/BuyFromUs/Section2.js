import React from "react";
import images from "../../assets/BuySection2.png";
import icons from "../../assets/Icon.png";
const Section2 = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-12 col-lg-6 col-12 " style={{marginTop:'70px'}}>
          <h1
            style={{ fontSize: "36px", fontWeight: "700", lineHeight: "48px" }}
          >
            Light, Fast & Powerful
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "26px" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus <br />{" "}
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-md-12 col-lg-6 col-12 ">
              <img src={icons} alt="sdasda" />
              <h3 style={{ fontSize: "16px", lineHeight: "26px" }}>
                Title Goes Here
              </h3>
              <p style={{ fontSize: "12px", lineHeight: "18px" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{" "}
              </p>
            </div>
            <div className="col-md-12 col-lg-6 col-12">
              <img src={icons} alt="sdasda" />
              <h3 style={{ fontSize: "16px", lineHeight: "26px" }}>
                Title Goes Here
              </h3>
              <p style={{ fontSize: "12px", lineHeight: "18px" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 col-12">
          <img src={images} alt="photos" width={"100%"} height={"524.313px"} />
        </div>
      </div>
    </div>
  );
};

export default Section2;
