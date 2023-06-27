import React from "react";

const Banner = () => {
  return (
    <div className="container-fluid FroImg d-flex justify-content-center align-items-center">
      <div className="col-md-10">
        <p
          style={{
            fontFamily: "Seaweed Script",
            fontSize: "50px",
            color: "#2E3192",
          }}
        >
          Limited Liability Company
        </p>
        <h1 style={{ fontSize: "85px", fontWeight: "700" }}>
          Dream big <br /> Do right.
        </h1>
        <p className="col-md-6" style={{fontSize:'14px',lineHeight:'26px'}}>
          A Limited Liability Company (LLC) is a business structure allowed by
          state statute. Each state may use different regulations, you should
          check with your state if you are interested in starting a Limited
          Liability Company.
        </p>
        <button className="BannerSellbtn">Get Started Now</button>
      </div>
    </div>
  );
};

export default Banner;
