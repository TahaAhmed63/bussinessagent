import { Link } from "react-router-dom";
//import logo from '../assets/logoFooter.png'
const Footer = () => {
 

  return (
    <>
      <footer className="ltn__footer-area">
        <div className="footer-top-area section-bg-2 plr--5" style={{backgroundColor:'#171B2A'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      {/* <img
                        src={logo}
                        width="200px"
                        alt="Logo"
                      /> */}
                    </div>
                  </div>
                  <p>
                    Start working with Landrick that can provide everything you need to generate awareness, derive traffic, connect.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Services</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link to="/services">Assignment Help</Link>
                      </li>
                      <li>
                        <Link to="/DissertationHelp">Dissertation Help</Link>
                      </li>
                      <li>
                        <Link to="/EssayHelp">Essay Help</Link>
                      </li>
                      <li>
                        <Link to="/Livesession">Live Sessions</Link>
                      </li>
                      <li>
                        <Link to="/PresentationWriting">Presentation Writing</Link>
                      </li>
                      <li>
                        <Link to="/projectReport">Project Report</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <button style={{width:'100%',height:'50px',marginTop:'10px',borderRadius:'40px',outline:'none',border:'none'}}>
                        Subscribe
                      </button>
                      {/* <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          <i className="fas fa-location-arrow" />
                        </button>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;






