import React from "react";
const WhyUs = () => {
  return (
    <>
      <section className="main-us">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-xxlg-12 col-md-12 col-sm-12">
              <h1 className="head-why">
                Join hundreds of successful organizations
              </h1>
              <p className="why-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="background-why">
              <div className="col-lg-12 col-md-12 col-sm-12 endset-2">
                <p className="bg-para">
                  “Peboo enabled everyone in our organization to focus on
                  results that matter, and got everyone pointed in the same
                  direction.”
                  <br/>
                  <br/>
                <em className="about-person">Shannon Lincoln</em> 
              
                <em className="about-person-smal">VP Finance, Shippo</em>  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
