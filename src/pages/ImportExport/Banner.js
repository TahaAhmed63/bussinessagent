import React from "react";

const Banner = () => {
  return (
    <div
      className="conatiner-fluid FroImg d-flex justify-content-center align-items-center"
      style={{
        width: "100%",
      }}
    >
      <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <h1 className="h1">
              IMPORT & EXPORT SERVICE
            </h1>
            <p className="p"> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla sapien lectus sit tristique rhoncus, nisi,
              malesuada. Tellus consequat Get Started</p>
            <button className="btnBanner">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
