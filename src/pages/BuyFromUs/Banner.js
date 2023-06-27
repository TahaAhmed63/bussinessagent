import React from "react";
const Banner = () => {
  return (
    <div
      className="container-fluid FroImgass d-flex justify-content-center align-items-center"
      style={{
        width: "100%",
      }}
    >
      <div className="container">
        <div className="row  ">
          <div className="col-md-5">
            <h1 style={{fontSize:'50px',lineHeight:'66px',fontWeight:'700'}}>Buy the right equipment from US</h1>
            <p style={{fontSize:'18px',lineHeight:'30px',color:'#505F98'}}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          <button style={{width:'196px',height:'41px',outline:'none',border:'none',backgroundColor:'#111B47',color:'white'}}>Start Now</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
