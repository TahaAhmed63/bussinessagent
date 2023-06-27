import React from "react";
import image from "../../assets/buySecyion3.png";
import { BsArrowRight } from "react-icons/bs";
const Section3 = () => {
  return (
    <div
      className="container-fuild"
      style={{
        marginTop: "100px",
        paddingTop: "50px",
        paddingBottom: "30px",
        backgroundColor: "#f2f9ff",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 col-12 mt-5">
            <h1 className="Section3H1">
              Finally a place where it all comes together
            </h1>
            <p
            className="col-md-6"
              style={{
                fontSize: "20px",
                lineHeight: "140%",
                marginTop: "20px",
              }}
            >
              Bring together your strategy with the goals that need to deliver
              your strategy, and the people that need to deliver those goals.
            </p>
          <p className="mt-5" style={{color:'blue'}}>Learn More <BsArrowRight/></p>

          </div>
          <div className="col-md-12 col-lg-6 col-12 ">
            <img src={image} alt="photos" height={'100%'} width={"100%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
