// React Basic and Bootstrap
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Button, P } from 'reactstrap';

// import images
import img1 from '../../assets/images/app/classic01.png';
import img2 from '../../assets/images/app/calender.png';
import appImg from '../../assets/images/app/app.png';
import playstoreImg from '../../assets/images/app/playstore.png';

//Import Components
import Section from './Section';
import Subscribe from './subscribe';
import Popup from '../../components/Layout/popup';

const IndexClassicApp = () => {
  useEffect(() => {
    document.body.classList = '';
    window.addEventListener('scroll', scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById('topnav');
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar != null) {
      if (top > 80) {
        navBar.classList.add('nav-sticky');
      } else {
        navBar.classList.remove('nav-sticky');
      }
    }
  };

  return (
    <React.Fragment>
      <section
        className="bg-half-170 d-table w-100 overflow-hidden"
        style={{ height: '90vh' }}
        id="home"
      >
        <Container>
          {/* -----------bannner------------ */}
          <Row className="align-items-center">
            <Col lg="9" md="11">
              <Row>
                <h1 className="my-4 fs-1" style={{ fontWeight: 'bold' }}>
                  Start an LLC
                </h1>
                <p className="fs-4">
                  Fast & simple online LLC formation from $0 with worry-free
                  services and support to form accurately and on time,
                  guaranteed!
                </p>
              </Row>
              <Row>
                <Col lg="8" className="mt-4">
                  <div className="d-grid gap-2">
                    <a href="#LLC" className="btn btn-dark" type="button">
                      1. Name Your LLC
                    </a>
                    <a href='#regAgent' className="btn btn-dark" type="button">
                      2. Choose a Registered Agent
                    </a>
                    <a href='#FCF' className="btn btn-dark" type="button">
                      3. File the Certificate of Formation/Articles of
                      Organization
                    </a>
                    <a href='#COA' className="btn btn-dark" type="button">
                      4. Create an Operating Agreement
                    </a>
                    <a href='#ERT' className="btn btn-dark" type="button">
                      5. Apply for an EIN and Review Tax Requirements
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
            <h1>How to Start an LLC</h1>
            <p>
              To start an LLC, youll need to choose a name for your business,
              select a registered agent, file Articles of Organization with the
              state, create an operating agreement, obtain an Employer
              Identification Number (EIN) from the IRS, and pay any applicable
              state filing fees. LLC requirements vary state by state, so its
              important that you be well-versed in your specific state laws
              before proceeding. Generally, it comes down to these five basic
              steps in our How to Start an LLC guide below.
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
              <h1>1. Name your LLC</h1>
            </Col>
            <Row>
              <Col>
                <p>
                  Now that youve decided you want to form an LLC (definition),
                  its time to bring your dream to life with its own name — and
                  yes, it must be unique. When naming your LLC, you must choose
                  something completely different from any other limited
                  liability companies in your state.
                  <br /> <br />
                  The rules as to how different your LLCs name must be from
                  others vary state by state. Although sometimes all it takes is
                  switching up the punctuation or changing a word from singular
                  to plural to qualify, its usually a smoother process when the
                  names are more distinct. However, one component that is always
                  required is the inclusion of “limited liability company” or an
                  abbreviation of it at the end of the business name. The
                  acceptable abbreviations also vary by state.
                </p>
              </Col>
            </Row>
          </Row>
          <Row>
            <Col>
              <h2>How to Get an LLC with a Unique Name</h2>
              <p>
                Its important to do your research to check if your desired
                business name is available. Google is helpful, as is checking
                around on social media, but you will also want to complete a
                business database search on your Secretary of State website.
              </p>
              <p>
                Your LLC name needs to be different from other LLCs, and it also
                cannot be previously trademarked. There are two kinds of
                trademarks to be aware of: federal and state. Visit the U.S.
                Patent and Trademark Office (USPTO) and search your business
                name or logo to make sure it hasnt been federally trademarked.
              </p>
              <p>
                Determining whether your desired business name already has a
                state trademark is trickier because many states dont have a
                search engine for checking existing trademarks. Fortunately, the
                USPTO has a page linking to the office overseeing trademarks in
                each state. You can get started by contacting the appropriate
                office in your state.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Registering a Trademark</h2>
              <p>
                Once you’ve determined that it’s available to use, you have the
                option of registering your own trademark. A state trademark is
                less expensive and much less complicated to get; however, it
                does restrict your trademark benefits to the state it’s
                recognized in.
              </p>
              <p>
                Your LLC name needs to be different from other LLCs, and it also
                cannot be previously trademarked. There are two kinds of
                trademarks to be aware of: federal and state. Visit the U.S.
                Patent and Trademark Office (USPTO) and search your business
                name or logo to make sure it hasnt been federally trademarked.
              </p>
              <p>
                On the other hand, federal trademarks are more costly and can
                take longer to get, but you can use your trademark nationwide,
                and there is much more protection provided for your company.
                Federal trademarks also allow for the ® symbol, whereas state
                trademarks only allow TM (trademark) or SM (service mark).
                Trademarking your LLC can keep other businesses from using the
                same name or anything too similar.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Registering a DBA Name for Your LLC</h2>
              <p>
                There is also an option to add a DBA name (“doing business as”)
                to your LLC. A DBA is just another name to call your business
                and can be very useful if your LLC offers multiple products or
                services. It can help differentiate between their specific
                business concerns.
              </p>
              <p>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  Each state has different regulations when it comes to naming
                  an LLC.
                </span>
                You will often find that certain words are prohibited, including
                those that are considered profane or obscene or that may mislead
                people about the nature of the business. Some words are
                restricted in most states, such as “bank” and other forms of the
                word (“banking” and “banker”), “engineering,” “insurance,” and
                “savings.” In some states, business owners who wish to use words
                such as these must have a certain license and/or fill out
                additional paperwork.
              </p>
              <p>
                You’ve spent time coming up with a name for your limited
                liability company and researching its availability — now you can
                think about securing it. Most states will allow you to reserve
                your desired name for a fee so that you don’t have to worry
                about someone else nabbing it before you can officially launch
                your business. Check with your state on the requirements to
                reserve your business name. Then, go one step further and
                reserve a domain name for your company website, so you have that
                set up and ready to go as soon as your business can launch.
              </p>
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: '50px', textAlign: 'center' }}>
              <h1 id='regAgent'>Name your LLC</h1>
              <p>Enter your desired business name</p>
              <div className="col-12 d-flex gap-2">
                <div className="col-2"></div>
                <input type="text" className="col-6 px-3" />
                <button className="btn  btn-primary col-2 ">START NOW</button>
                <div className="col-2"></div>
              </div>
            </Col>
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
              <h1>2. Choose a Registered Agent</h1>
            </Col>
            <Row>
              <Col>
                <p>
                  A registered agent essentially acts as the liaison between a
                  Limited Liability Company and the state it’s registered in.
                  This third-party individual or business entity acts as a point
                  of contact on behalf of the business and receives things like
                  tax forms and legal documents, government correspondences, and
                  notices of a lawsuit.
                </p>
                <p>
                  You can be your own registered agent so long as you have a
                  physical street address in the state in which your Limited
                  Liability Company is filed (P.O. boxes aren’t allowed);
                  however, hiring an outside registered agent service has its
                  benefits.
                </p>
                <p>
                  It allows you to have more privacy and flexibility and can
                  decrease the added stress that can come with being your own
                  agent. Using a third-party registered agent service, such as
                  the one offered at ZenBusiness, ensures that you are compliant
                  with the law, always protected, and strategically organized.
                </p>
              </Col>
            </Row>
            <Col lg="12 d-flex justify-content-center" id="FCF">
               <button className='col-md-4 btn btn-lg btn-primary'>
                Appoint a Registered Agent
               </button>
            </Col>
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
              <h1>3. File the Certificate of Formation / Articles of Organization</h1>
            </Col>
            <Row>
              <Col>
                <p>
                The official name for the paperwork filed to register your business depends on which state you are filing it in. Generally, the document is referred to as the Articles of Organization, but some states refer to it as a Certificate of Formation or Certificate of Organization. Regardless of what it’s called, the concept is the same: It is used to establish state recognition of the LLC and outline the details of its members.
                </p>
                <h4 id='COA'>Filing Requirements</h4>
                <p>
                Check your Secretary of State’s website to see the filing requirements, as these also vary state by state. You’ll always need basic information about the LLC and its members, including the LLC name and mailing address and the registered agent’s name and address. You might also be asked to state the purpose of the LLC and list any current LLC members and/or managers.
                </p>
                <p>
                A few parts of the form might be unfamiliar to someone who is just entering the business world. You may be asked whether your LLC is member-managed or manager-managed. In a member-managed LLC, the members take it upon themselves to handle day-to-day operations and decide who’s responsible for what. In a manager-managed LLC, one or more supervisors are chosen by the members to be in charge.
                </p>
                <p>You will also need to list the location of operations, which should be the place in which members work together. If the business is operated from a private home, list your home address. If mail is not deliverable to the place of work, make sure to include a USPS-verified mailing address</p>
                <p>The final, and most important, step is having an organizer of the LLC sign the form. Then, you are all set to submit it. In most states, this can be done online or by mail. Any instructions for submitting the signed form and payment can be found on your Secretary of State’s website.</p>
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
              <h1>4. Create an Operating Agreement</h1>
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
              <h1>5. Apply for an EIN and Review Tax Requirements</h1>
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
  )
};

export default IndexClassicApp;
