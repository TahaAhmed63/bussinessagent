import React, { useState } from 'react';
import { Card, Col, Container, Form, Input, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from 'feather-icons-react';
//import Images
import logoLight from '../../../assets/images/logo-light.png';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { replace } from 'formik/dist';
import Swal from 'sweetalert2';

const PageLoginFive = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const histroy = useHistory();
  const login = async () => {
    setLoader(true);
    try {
      const formData = new FormData();
      formData.append('email', Email);
      formData.append('password', Password);

      var config = {
        method: 'post',
        url: `http://businessagentapi.dev-sh.xyz/api/login`,
        data: formData,
        headers: {
          Accept: 'application/json',
        },
      };
      await axios(config)
        .then((response) => {
          setLoader(false);
          console.log('signup user--->', response);
          localStorage.setItem('userToken', response?.data?.data?.token);
          Swal.fire({
            toast: true,
            icon: 'success',
            title: response.data.message,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          redirect();
          //   histroy.push('http://businessagentuser.dev-bt.xyz/dashboard');
          localStorage.setItem('email', response?.data?.data?.user?.fname);
          // console.log(response?.data?.data?.user?.id, "id------>")
        })
        .catch((e) => {
          setLoader(false);
          console.log(e);
          Swal.fire({
            toast: true,
            icon: 'error',
            title: e.response?.data?.data?.message,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
        });
    } catch (e) {
      setLoader(false);
      console.log(e);
      Swal.fire({
        toast: true,
        icon: 'error',
        title: e.response?.data?.data?.message,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    }
  };

  const redirect = () => {
    window.location.href = 'http://businessagentuser.dev-bt.xyz/dashboard';
  };

  return (
    <React.Fragment>
      <div className="back-to-home">
        <Link to="/" className="back-button btn btn-icon btn-primary">
          <i>
            <FeatherIcon icon="arrow-left" className="icons" />
          </i>
        </Link>
      </div>
      <section className="position-relative">
        <div className="bg-video-wrapper">
          <iframe
            src="https://player.vimeo.com/video/405282090?background=1&autoplay=1&loop=1&byline=0&title=0"
            title="uniqueTitle4"
          ></iframe>
        </div>
        <div className="bg-overlay bg-linear-gradient-2"></div>
        <Container fluid>
          <Row>
            <Col className="col-12 p-0">
              <div className="d-flex flex-column min-vh-100 p-4">
                <div className="text-center">
                  <Link to="#">
                    <img src={logoLight} alt="" />
                  </Link>
                </div>

                <div className="title-heading text-center my-auto">
                  <Card className="form-signin px-4 py-5 rounded-md shadow-sm">
                    <Form>
                      <h5 className="mb-4">Login</h5>
                      <Row>
                        <Col lg={12}>
                          <div className="form-floating mb-2">
                            <Input
                              type="email"
                              className="form-control"
                              id="LoginEmail"
                              placeholder="name@example.com"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <Label htmlFor="LoginEmail">Email Address:</Label>
                          </div>
                        </Col>

                        <Col lg={12}>
                          <div className="form-floating mb-3">
                            <Input
                              type="password"
                              className="form-control"
                              id="LoginPassword"
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <Label htmlFor="LoginPassword">Password:</Label>
                          </div>
                        </Col>

                        <Col lg={12}>
                          <div className="d-flex justify-content-between">
                            <div className="mb-3">
                              {/* <div className="form-check align-items-center d-flex mb-0">
                                                                <Input className="form-check-input mt-0" type="checkbox" value="" id="RememberMe" />
                                                                <Label className="form-check-label text-muted ms-2" htmlFor="RememberMe">Remember me</Label>
                                                            </div> */}
                            </div>
                            <small className="text-muted mb-0">
                              <Link
                                to="/auth-forgot-password-bg-video"
                                className="text-muted fw-semibold"
                              >
                                Forgot password ?
                              </Link>
                            </small>
                          </div>
                        </Col>

                        <Col lg={12}>
                          <button
                            className="btn btn-primary rounded-md w-100"
                            type="button"
                            onClick={login}
                          >
                            {loader ? (
                              <ThreeDots
                                height="50"
                                width="50"
                                radius="9"
                                color="#fff"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                }}
                                wrapperClassName=""
                                visible={true}
                              />
                            ) : (
                              'Login'
                            )}
                          </button>
                        </Col>

                        {/* <Col className="col-12 text-center mt-4">
                                                    <small><span className="text-muted me-2">Don't have an account ?</span> <Link to="#auth-signup-bg-video.html" className="text-dark fw-bold">Sign Up</Link></small>
                                                </Col> */}
                      </Row>
                    </Form>
                  </Card>
                </div>
                <div className="text-center">
                  <p className="mb-0 text-white">
                    © {new Date().getFullYear()} Business Agent. Design with{' '}
                    <i className="mdi mdi-heart text-danger"></i> by{' '}
                    <Link
                      to="/#https://themesbrand.com//"
                      target="_blank"
                      className="text-reset"
                    >
                      HNH Tech Solutions
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <ThemeSwitcher/> */}
    </React.Fragment>
  );
};

export default PageLoginFive;
