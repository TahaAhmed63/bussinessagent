import React from "react";
import image1 from '../../assets/importSection5.png'
const Section5 = () => {
  return (
    <div className="container mt-5">
        <div className="row ">
            <h1 className="text-center">Latest News</h1>
        </div>
      <div className="row mt-3">
        <div className="col-md-4">
          <div class="card">
            <img class="card-img-top" src={image1} alt="Cardimagecap" />
            <div class="card-body" style={{padding:'24px 28px'}}>
              <h3 style={{fontSize:'24px',lineHeight:'32px',fontWeight:'700'}}>Balancing your love and work life.</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
            <img class="card-img-top" src={image1} alt="Cardimagecap" />
            <div class="card-body" style={{padding:'24px 28px'}}>
              <h3 style={{fontSize:'24px',lineHeight:'32px',fontWeight:'700'}}>Balancing your love and work life.</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
            <img class="card-img-top" src={image1} alt="Cardimagecap" />
            <div class="card-body" style={{padding:'24px 28px'}}>
              <h3 style={{fontSize:'24px',lineHeight:'32px',fontWeight:'700'}}>Balancing your love and work life.</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
          <button className="section5btn mx-auto">Read More</button>
      </div>
    </div>
  );
};

export default Section5;
