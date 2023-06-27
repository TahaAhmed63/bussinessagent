import React from "react";

const Section5 = () => {
  return (
    <div className="container-fluid FroSectionbg d-flex justify-content-center align-items-center" style={{ width: "100%" }}>
      <div className="container text-center">
       <div className="row">
       <h1 style={{fontSize:'36px',lineHeight:'48px',fontWeight:'700'}}>A Price To Suit Everyone</h1>
        <p className="col-md-12 col-lg-6 mx-auto col-12" style={{fontSize:'16px',lineHeight:'26px',color:'#6F7CB2'}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{" "}
        </p>
        <h3 className="mt-5"style={{fontSize:'50px',lineHeight:'66px',color:'#6F7CB2'}} >$40</h3>
        <p style={{fontSize:'16px',lineHeight:'26px',color:'#6F7CB2'}}>UI Design Kit</p>
        <p style={{fontSize:'16px',lineHeight:'26px',color:'#5D6970',marginTop:'30px'}}>See, One price. Simple.</p>
        <button className="mx-auto" style={{width:'196px',height:'41px',outline:'none',border:'none',backgroundColor:'#111B47',color:'white'}}>Purchase Now</button>
       </div>
      </div>
    </div>
  );
};

export default Section5;
