import { Link } from "react-router-dom";
import logo from '../assets/logoFooter.png'
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
                      <img
                        src={logo}
                        width="200px"
                        alt="Logo"
                      />
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
                        <Link to="/Llc">From A LLc</Link>
                      </li>
                      <li>
                        <Link to="/corporation">From A Corporation</Link>
                      </li>
                      <li>
                        <Link to="/registration">Register Agent</Link>
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
                        <Link to="/services">Abc Help</Link>
                      </li>
                      <li>
                        <Link to="/DissertationHelp">Abc Help</Link>
                      </li>
                      <li>
                        <Link to="/EssayHelp">ABC Help</Link>
                      </li>
                      <li>
                        <Link to="/Livesession">Abc Sessions</Link>
                      </li>
                      <li>
                        <Link to="/PresentationWriting">ABc Writing</Link>
                      </li>
                      <li>
                        <Link to="/projectReport">ABc Report</Link>
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
                      <button style={{width:'100%',height:'50px',marginTop:'10gpx',borderRadius:'40px',outline:'none',border:'none'}}>
                        Subscribe
                      </button>
                     
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






