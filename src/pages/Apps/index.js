// React Basic and Bootstrap
import React, { useEffect } from "react";
import { Container, Row, Col, Alert, Button, P } from 'reactstrap';

// import generic component
import Section from "./Section";
import Feature from "./Feature";
import ShowCase from "./ShowCase";
import Pricing from "./Pricing";
import Testi from "./Testi";
import Popup from "../../components/Layout/popup";
import bannerCorporate from '../../assets/images/banner-2.jpg';

const Index = () => {
  useEffect(() => {
    document.body.classList = "";
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById("topnav");
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar != null) {
      if (top > 80) {
        navBar.classList.add("nav-sticky");
      } else {
        navBar.classList.remove("nav-sticky");
      }
    }
  };

  return (
    <React.Fragment>
    <section
      className="bg-half-170 d-table w-100 overflow-hidden"
      style={{height: '90vh', backgroundImage: `url(${bannerCorporate})`,position: "relative",top:"13vh",marginBottom:"15%"}}
      id="home"
    >
      <Container>
        {/* -----------bannner------------ */}
        <Row className="align-items-center">
          <Col lg="9" md="11">
            <Row>
              <h1 className="my-4 fs-1" style={{ fontWeight: 'bold' }}>
                Start an Form a Corporate
              </h1>
              <p className="fs-4">
              Protect Your Privacy: $445 Corporation
              </p>
            </Row>
            <Row>
              <Col lg="8" className="mt-4">
                <div className="d-grid gap-2">
                  <a href="#LLC" className="btn btn-dark" type="button">
                    1. Quick and Easy Filing
                  </a>
                  <a href='#regAgent' className="btn btn-dark" type="button">
                    2. Free Mail Forwarding
                  </a>
                  <a href='#FCF' className="btn btn-dark" type="button">
                    3. Free Phone Service for 60 Days – No-risk Trial
                  </a>
                  <a href='#COA' className="btn btn-dark" type="button">
                    4. Free Custom Initial Resolution & Bylaws
                  </a>
                  <a href='#ERT' className="btn btn-dark" type="button">
                    5. 1 Year of Texas Registered Agent Service
                  </a>
                  <button
                    className="btn btn-primary btn-lg mt-2"
                    type="button"
                  >
                    START NOW
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    {/* -----------------llc------------ */}
    <Container>
      <Row className="align-items-center">
        <Col id="LLC">
          <h1>How to Start Form a Corporate</h1>
          <p>
          Can you start a Texas corporation without sacrificing your privacy? Absolutely. When we form your corporation we list our Texas business address in lieu of personal addresses for every director. We do this because everything contained in your Certificate of Formation becomes a matter of public record, available to anyone, once it gets submitted to the Secretary of State.

          </p>
          <Col className="align-items-center d-flex justify-content-center">
            <button
              className="btn col-md-3 btn-primary btn-lg mx-auto"
              type="button"
            >
              Create Your LLC Now!
            </button>
          </Col>
        </Col>
      </Row>
      <section
        style={{
          boxShadow: '0 4px 16px 2px rgba(0,0,0,.12)',
          padding: '25px 18px',
          marginTop: '20px',
          borderRadius: '10px',
        }}
      >
        <Row>
          <Col className="col-12" style={{ borderBottom: '1px solid black' }}>
            <h1>1. Quick and Easy Filing</h1>
          </Col>
          <Row>
            <Col>
              <p>
              No one is faster than Texan Registered Agent when it comes to preparing and submitting your corporation. Our expert filers fill out and digitally file your Certificate of Formation so you don’t have to.
                <br /> <br />
                You shouldn’t have to wait to get your business up and running. With Texan Registered Agent, you won’t. Let us handle every aspect of your corporation formation: preparation, filing, follow up and annual compliance. Our experts leave nothing to chance.
              </p>
            </Col>
          </Row>
        </Row>
        
      </section>
      <section
        style={{
          boxShadow: '0 4px 16px 2px rgba(0,0,0,.12)',
          padding: '25px 18px',
          marginTop: '20px',
          borderRadius: '10px',
        }}
      >
        <Row>
          <Col className="col-12" style={{ borderBottom: '1px solid black' }}>
            <h1>2. Free Mail Forwarding</h1>
          </Col>
          <Row>
            <Col>
            <p>
            Our Texas incorporation package includes free basic mail forwarding—up to 10 regular mail scans per year. If you don’t expect to receive much non-state mail for your Texas corporation, this is a great option. Just as with any official mail we receive for your business, we’ll send you a notification when you have a new document to view in your account. For business owners who need a completely unique Texas business address, we have 3 full-service mail forwarding options you can add at checkout, both of which include a newly created suite number.
            </p>
            </Col>
          </Row>
         
        </Row>
      </section>
      <section
        style={{
          boxShadow: '0 4px 16px 2px rgba(0,0,0,.12)',
          padding: '25px 18px',
          marginTop: '20px',
          borderRadius: '10px',
        }}
      >
        <Row>
          <Col className="col-12" style={{ borderBottom: '1px solid black' }}>
            <h1>3. Free Phone Service for 60 Days – No-risk Trial</h1>
          </Col>
          <Row>
            <Col>
              <p>
              Need a business phone? We’ve got you covered with our convenient Phone Service. More than just call forwarding, Phone Service gives you a virtual phone number with your choice of area code, plus a bunch of easy-to-use features like customizable Caller ID and Voicemail. Get a free 60-day trial when you hire us to form your Texas corporation.
              </p>
            </Col>
          </Row>
          
        </Row>
      </section>
      <section
        style={{
          boxShadow: '0 4px 16px 2px rgba(0,0,0,.12)',
          padding: '25px 18px',
          marginTop: '20px',
          borderRadius: '10px',
        }}
      >
        <Row>
          <Col className="col-12" style={{ borderBottom: '1px solid black' }}>
            <h1>4.Free Custom Initial Resolution & Bylaws</h1>
          </Col>
          <Row>
            <Col>
              <p>
              Although LLC Operating Agreements are not required in every state, it’s a smart business move to have one. This legally binding document provides clear and concise definitions of all ownership terms and rules or management decisions. An operating agreement protects owners’ personal assets and outlines ownership percentages, responsibilities, voting power, and a succession plan if an owner decides to leave the business
              </p>
              <p>
              Having an Operating Agreement can prevent any miscommunication and resolve any conflicts between members. It is not required by law to file an LLC Operating Agreement with the Secretary of State, so once all parties have agreed upon the terms and signed it, it’s advisable to keep the document safe and secure with other important paperwork.
              </p>
              <h4 id='ERT'>Create an LLC Operating Agreement Online</h4>
              <p>
              Utilizing an Operating Agreement template can set you up for success regarding having the right business structure and format for this important document. ZenBusiness offers various plan options that include a customizable LLC Operating Agreement template at a very reasonable price.
              </p>
            </Col>
          </Row>
          
        </Row>
      </section>
      <section
        style={{
          boxShadow: '0 4px 16px 2px rgba(0,0,0,.12)',
          padding: '25px 18px',
          marginTop: '20px',
          borderRadius: '10px',
        }}
      >
        <Row>
          <Col className="col-12" style={{ borderBottom: '1px solid black' }}>
            <h1>5. 1 Year of Texas Registered Agent Service</h1>
          </Col>
          <Row>
            <Col>
              <p>
              After officially forming your LLC, you should consider registering it with the federal government by applying for an Employer Identification Number (EIN) from the IRS.
              </p>
              <p>
              An EIN is the business equivalent of a personal Social Security number and is required if your LLC has multiple partners or employees. It’s free to apply for a Federal Tax ID Number aka EIN (Employer Identification Number) and can conveniently be done on the IRS website. When done online, the EIN is issued immediately.
              </p>
            </Col>
          </Row>
          
        </Row>
      </section>
    </Container>
  </React.Fragment>
  );
}

export default Index;
