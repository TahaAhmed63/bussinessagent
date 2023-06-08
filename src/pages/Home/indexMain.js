// React Basic and Bootstrap
import React, { Component } from 'react';

// Import Generic Components
import Section from '../Business/section';
import Partners from './Partners';
import HowItWorks from './HowItWorks';
import Testi from './Testi';
import Pricing from '../Business/Pricing';
import Faq from './Faq';
import Popup from '../../components/Layout/popup';
import Cta from '../Business/Cta';
import AboutUs from '../Finance/AboutUs';
import Faqs from '../Marketing/Faqs';
import Features from '../Pages/CorporateServices/Features';
import Feature from '../SeoAgency/Feature';
import Website from '../SeoAgency/Website';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
//Import Icons
import FeatherIcon from 'feather-icons-react';
import build from '../../assets/images/real/build.png';

class IndexMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricingData: [
        {
          id: 1,
          price: 0,
          title: 'FREE',
          action: 'Buy Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
          ],
        },
        {
          id: 2,
          price: 39,
          title: 'STARTER',
          action: 'Get Started',
          isBest: true,
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
            { id: 3, subItem: 'Free Appointments' },
          ],
        },
        {
          id: 3,
          price: 59,
          title: 'BUSINESS',
          action: 'Try It Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Source Files' },
            { id: 3, subItem: '1 Domain Free' },
            { id: 4, subItem: 'Enhanced Security' },
          ],
        },
        {
          id: 4,
          price: 79,
          title: 'ENTERPRISE',
          action: 'Started Now',
          isChildItem: [
            { id: 1, subItem: 'Full Access' },
            { id: 2, subItem: 'Enhanced Security' },
            { id: 3, subItem: 'Source Files' },
            { id: 4, subItem: '1 Domain Free' },
            { id: 5, subItem: 'Free Installment' },
          ],
        },
      ],

      cardData: [
        { title: 'Speedy', icon: 'uil uil-tachometer-fast-alt' },
        { title: 'Reliable', icon: 'uil uil-compact-disc' },
        { title: 'Scalable', icon: 'uil uil-weight' },
        { title: 'Supported', icon: 'uil uil-envelope-question' },
      ],
    };
    this.scrollNavigation = this.scrollNavigation.bind(this);
  }

  componentDidMount() {
    document.body.classList = '';
    // document.querySelector(".shoppingbtn").classList.add("btn-primary");
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById('topnav');
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar != null) {
      if (top > 80) {
        navBar.classList.add('nav-sticky');
      } else {
        navBar.classList.remove('nav-sticky');
        // document.querySelector(".shoppingbtn").classList.add("btn-primary");
        document.querySelector('.shoppingbtn').classList.remove('btn-light');
        document.querySelector('.settingbtn').classList.add('btn-soft-primary');
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* Home Section */}
        <Section />
        <section>
          <Container>
             <Row >
                 <h1 className='text-center' style={{marginBottom:'30px'}}>What We Do ?</h1>
             </Row>
          </Container>
        </section>
        {/* Feature */}
        <Features />

        {/* Cta */}
        <Cta />
       
        {/* import AboutUs */}
        <Feature />

        {/* Testi */}
        <Website />

        <section className="section bg-white pt-0"
          style={{ background: `url(${build}) bottom no-repeat` }}> 
          <Container className="mt-100 mt-60">
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">Why Shared Hosting ?</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              {this.state.cardData.map((item, key) => (
                <Col key={key} lg={3} md={6} xs={12} className="mt-4 pt-2">
                  <Card className="features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                    <span className="h1 icon2 text-primary">
                      <i className={item.icon}></i>
                    </span>
                    <CardBody className="p-0 content">
                      <h5>{item.title}</h5>
                      <p className="para text-muted mb-0">
                        It is a long established fact that a reader will be of
                        at its layout.
                      </p>
                    </CardBody>

                    <div className="position-absolute top-0 end-0">
                      <i className={item.icon + ' display-1 opacity-05'}></i>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row>
              <Col md={6} xs={12}>
                <div className="d-flex">
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
                  <div className="flex-1">
                    <h5 className="mt-0">
                      How our <span className="text-primary">Landrick</span>{' '}
                      work ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance: human perception
                      is tuned to recognize certain patterns and repetitions in
                      texts.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="d-flex">
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
                  <div className="flex-1">
                    <h5 className="mt-0">
                      {' '}
                      What is the main process open account ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      If the distribution of letters and 'words' is random, the
                      reader will not be distracted from making a neutral
                      judgement on the visual impact
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} xs={12} className="mt-4 pt-2">
                <div className="d-flex">
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
                  <div className="flex-1">
                    <h5 className="mt-0">
                      {' '}
                      How to make unlimited data entry ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      Furthermore, it is advantageous when the dummy text is
                      relatively realistic so that the layout impression of the
                      final publication is not compromised.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md={6} xs={12} className="mt-4 pt-2">
                <div className="d-flex">
                  <FeatherIcon
                    icon="help-circle"
                    className="fea icon-ex-md text-primary me-2 mt-1"
                  />
                  <div className="flex-1">
                    <h5 className="mt-0">
                      {' '}
                      Is <span className="text-primary">Landrick</span> safer to
                      use with my account ?
                    </h5>
                    <p className="answer text-muted mb-0">
                      The most well-known dummy text is the 'Lorem Ipsum', which
                      is said to have originated in the 16th century. Lorem
                      Ipsum is composed in a pseudo-Latin language which more or
                      less corresponds to 'proper' Latin.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Faq */}

        {/* <Faqs /> */}

        {/* <div className="position-relative">
          <div className="shape overflow-hidden text-light">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <Faq />

        <div className="position-relative">
          <div className="shape overflow-hidden text-footer">
            <svg
              viewBox="0 0 2880 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 125L2160 0H2880V250H0V125H720Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <Popup /> */}
      </React.Fragment>
    );
  }
}

export default IndexMain;
