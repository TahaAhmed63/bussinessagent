import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Alert,
  Button,
  P,
} from 'reactstrap';
import bannerRegister from '../../assets/images/banner-4.jpg';

const EinPage = () => {
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
        style={{ height: '90vh', backgroundImage: `url(${bannerRegister})`,position: "relative",top:"13vh",marginBottom:"15%" }}
        id="home"
      >
        <Container>
          <Row className="align-items-center mt-5">
            <Col lg="6" md="11">
              <h1 className=''>Get Your Federal Employer Identification Number</h1>
              <p className="fs-3">When You Want More</p>
              <p className="mt-5">
                A Federal Employer Identification Number, or EIN, is a unique
                9-digit number obtained from the IRS, and most businesses need
                one. When you hire Northwest, you can leave the paperwork for
                your EIN filing to us, and we'll get your order processed in a
                matter of days. We can get an EIN for your business on its own,
                if that's all you need, or we can bundle our EIN service with
                our incorporation service if you need to first form your LLC,
                corporation, or nonprofit.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={4} className="col-12 mt-4 pt-2">
              <Card className="overflow-hidden ein-card d-flex justify-content-between">
                <div className="card-body-ein">
                  <h2 className="card-title">$50 EIN Service</h2>
                  <p className="mt-3">
                    Have a social security number (SSN)? Great! Let us deal with
                    the IRS and get your EIN fast.
                  </p>
                  <ul>
                    <li>No hassles</li>
                    <li>Stress free</li>
                    <li>Filed in 2 days</li>
                    <li>EIN received in 4 days</li>
                  </ul>
                </div>
                <Link to={'/form'}>
                <button
                  className=" fs-5"
                  style={{
                    padding: '10px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    width:'100%'
                  }}
                >
                  Hire Us - $50{' '}
                </button>
                </Link>
              </Card>
            </Col>

            <Col lg={4} className="col-12 mt-4 pt-2">
              <Card className=" overflow-hidden ein-card d-flex justify-content-between">
                <div className="card-body-ein">
                  <h2 className="card-title">$200 EIN Service</h2>
                  <p className="mt-3">
                    Not a US citizen or don’t have a social security number
                    (SSN)? No problem.
                  </p>
                  <ul>
                    <li>We follow up with the IRS</li>
                    <li>No hidden fees</li>
                    <li>Filed in 2 days</li>
                    <li>EIN received in 30 days</li>
                  </ul>
                </div>
               <Link to={'/form'}> <button
                  className=" fs-5"
                  style={{
                    padding: '10px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    width:'100%'
                  }}
                >
                  Hire Us - $200
                </button></Link>
              </Card>
            </Col>

            <Col lg={4} className="col-12 mt-4 pt-2">
              <Card className="border-0 overflow-hidden ein-card d-flex justify-content-between">
                <div className="card-body-ein ">
                  <h2 className="card-title">EIN & Incorporation</h2>
                  <p>
                    Get incorporation, registered agent service, business forms
                    and your EIN.
                  </p>
                  <h2 style={{ color: 'blue' }}>$275 + State Fees</h2>
                </div>
                <Link to={'/form'}>
                <button
                  className=" fs-5"
                  style={{
                    padding: '10px',
                    backgroundColor: 'blue',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    width:'100%'
                  }}
                >
                  Hire Us - $506xhb
                </button>
                </Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="my-5">
        <Container>
          <Row>
            <Col>
              <h1>What Is An EIN?</h1>
              <p>
                An EIN (also called a Federal Employment Identification Number
                or FEIN) is a unique nine-digit tax ID number that the IRS
                assigns to businesses. Similar to a person’s social security
                number, an EIN is used by businesses to open bank accounts,
                apply for loans and licenses, fulfill tax obligations, and to
                help protect the identity of the business owner.
              </p>
              <h3>Do I Need An EIN?</h3>
              <p>
                Most businesses will need an EIN to pay federal taxes or if they
                intend to hire employees. Additionally, many banks require an
                EIN to open a business bank account
              </p>
              <p>
                If you aren’t sure if your business needs an EIN, just ask
                yourself these questions:
              </p>
              <ul>
                <li>Is my business a partnership or corporation?</li>
                <li>Do I have employees?</li>
                <li>Is my business involved with mortgage investments?</li>
                <li>
                  Do I withhold taxes on any income other than wages paid to a
                  nonresident alien?
                </li>
                <li>Is my business involved with nonprofit organizations?</li>
                <li>Does my business handle estates, trusts or IRAs?</li>
                <li>
                  Do I file a return for employment, tobacco, alcohol, firearms
                  or excise taxes?
                </li>
                <li>
                  Does my business have a Keogh plan (a retirement plan for
                  self-employed individuals or those who work for unincorporated
                  businesses)?
                </li>
              </ul>
               <Link to={'/form'}>
               <button className='btn btn-primary fs-5' style={{width:'200px'}}>
                   Get Started
              </button>
               </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default EinPage;
