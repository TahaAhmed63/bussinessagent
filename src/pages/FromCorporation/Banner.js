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
     <div className="row justify-content-center">
        <div className="col-md-11">
          <h1 className="h1">Start an Form a <br/> Corporate</h1>
          <p className="p">
          Protect Your Privacy: $445 Corporation
          </p>
          <button className="btnBanner">
            Start Now
          </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Banner;
