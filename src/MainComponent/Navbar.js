import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import {FaBars} from 'react-icons/fa'
import {MdKeyboardArrowDown} from 'react-icons/md'

const Navbar = (props) => {
  const { linkcolor, logo } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const linkStyle = {
    color: linkcolor,
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <div className="header-area header-transparent">
        <div className="main-header header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-2 ">
                <div className="logo">
                  <Link to="index.html">
                    <img src={logo} className="img-fluid" alt="sadsa" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-sm-10 col-md-10 hide-mb">
                <div className="main-menu f-right d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link style={linkStyle} to="">Home</Link>
                      </li>
                      <li >
                        <Link style={linkStyle} className="dropdown-head" to="">Form A Us Company</Link>
                        <ul className="submenu">
                          <li>
                            <Link  style={linkStyle} to="blog.html">Blog</Link>
                          </li>
                          <li>
                            <Link  style={linkStyle} to="blog_details.html">Blog Details</Link>
                          </li>
                          <li>
                            <Link  style={linkStyle} to="elements.html">Elements</Link>
                          </li>
                        </ul>
                       <MdKeyboardArrowDown/>
                      </li>
                      <li>
                        <Link style={linkStyle} to="" className="dropdown-head">US Banking</Link>
                        <ul className="submenu">
                          <li>
                            <Link  style={linkStyle} to="blog.html">Blog</Link>
                          </li>
                          <li>
                            <Link  style={linkStyle} to="blog_details.html">Blog Details</Link>
                          </li>
                          <li>
                            <Link  style={linkStyle} to="elements.html">Elements</Link>
                          </li>
                        </ul>
                       <MdKeyboardArrowDown/>
                      </li>
                      <li>
                        <Link style={linkStyle} to="" className="dropdown-head">Business Tools</Link>
                        <ul className="submenu">
                          <li>
                            <Link  style={linkStyle} to="blog.html">Blog</Link>
                          </li>
                          <li>
                            <Link  style={linkStyle} to="blog_details.html">Blog Details</Link>
                          </li>
                          <li>
                            <Link  style={linkStyle} to="elements.html">Elements</Link>
                          </li>
                        </ul>
                       <MdKeyboardArrowDown/>
                      </li>
                      <li>
                        <Link  style={linkStyle} to="contact.html" className="dropdown-head">Other Services</Link>
                        <ul className="submenu">
                          <li>
                            <Link  style={linkStyle} to="blog.html">Blog</Link>
                          </li>
                          <li>
                            <Link  style={linkStyle} to="blog_details.html">Blog Details</Link>
                          </li>
                          <li>
                            <Link  style={linkStyle} to="elements.html">Elements</Link>
                          </li>
                        </ul>
                       <MdKeyboardArrowDown/>
                      </li>
                      <li>
                        <Link  style={linkStyle} to="blog.html" className="dropdown-head">Go Offshare</Link>
                        <ul className="submenu">
                          <li>
                            <Link  style={linkStyle} to="blog.html">Blog</Link>
                          </li>
                          <li>
                            <Link  style={linkStyle} to="blog_details.html">Blog Details</Link>
                          </li>
                          <li>
                            <Link  style={linkStyle} to="elements.html">Elements</Link>
                          </li>
                        </ul>
                       <MdKeyboardArrowDown/>
                      </li>

                    </ul>
               
                 
                
                  </nav>
                </div>
                
        
              </div>
          

                   <div className="sidebar-toggle" onClick={handleToggleSidebar}>
                        <FaBars/>
                
                    </div>
              
              <div className="col-12">
                <div className="">
              
                  <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                  
                    <ul className="sidebar-menu">
                        <li>
                        <div className="logo">
                  <Link to="index.html">
                    <img  src={logo} className="img-fluid" alt="sadsa" />
                  </Link>
                </div>
                        </li>
                      <li>
                        <Link to="">Home</Link>
                      </li>
                      <li>
                        <Link to="">Form A Us Company</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="blog.html">Blog</Link>
                          </li>
                          <li>
                            <Link to="blog_details.html">Blog Details</Link>
                          </li>
                          <li>
                            <Link to="elements.html">Elements</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="">US Banking</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="blog.html">Blog</Link>
                          </li>
                          <li>
                            <Link to="blog_details.html">Blog Details</Link>
                          </li>
                          <li>
                            <Link to="elements.html">Elements</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="">Business Tools</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="blog.html">Blog</Link>
                          </li>
                          <li>
                            <Link to="blog_details.html">Blog Details</Link>
                          </li>
                          <li>
                            <Link to="elements.html">Elements</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="">Other Services</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="blog.html">Blog</Link>
                          </li>
                          <li>
                            <Link to="blog_details.html">Blog Details</Link>
                          </li>
                          <li>
                            <Link to="elements.html">Elements</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="">Go Offshare</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="blog.html">Blog</Link>
                          </li>
                          <li>
                            <Link to="blog_details.html">Blog Details</Link>
                          </li>
                          <li>
                            <Link to="elements.html">Elements</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    //call navbar
 //<Navbar logo={mylogo}  linkcolor="rgb(19 19 19 / 93%)"/> 
  );
};

export default Navbar;



