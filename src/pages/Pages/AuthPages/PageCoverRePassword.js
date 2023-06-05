// React Basic and Bootstrap
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Input,
  Label,
  Card,
  CardBody,
  FormFeedback
} from "reactstrap";

//Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Icons
import FeatherIcon from "feather-icons-react";
import ThemeSwitcher from "../../../components/Layout/ThemeSwitcher";
// import images
import user03 from "../../../assets/images/user/03.jpg";
import axios from 'axios';
import Swal from "sweetalert2";

const PageCoverRePassword = () => {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [loader, setLoader] = useState(false);

const histroy = useHistory();

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: "",
      code: "",
      Password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
      code: Yup.string("Enter your code").required("Code is required"),
      Password: Yup.string("Enter your Password").required("Password is required"),
    }),


    onSubmit: (values) => {
      setLoader(true);
      try {
        const formData = new FormData();
        formData.append('email', Email);
  
        var config = {
          method: 'post',
          url: `http://businessagentapi.dev-sh.xyz/api/reset-password`,
          data: formData,
          headers: {
            Accept: 'application/json',
          },
        };
         axios(config)
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
            // history.push('/auth-cover-re-password')
          })
          .catch((e) => {
            setLoader(false);
            console.log(e);
            Swal.fire({
              toast: true,
              icon: 'error',
              title: e.response.data.data.message,
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
          title: e.response.data.data.message,
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
    }
  });



  return (
    <React.Fragment>
      <div className="back-to-home">
        <Link to="/" className="back-button btn btn-icon btn-primary">
          <i>
            <FeatherIcon icon="arrow-left" className="icons" />
          </i>
        </Link>
      </div>

      <section className="cover-user">
        <Container fluid className="px-0">
          <Row className="g-0 position-relative">
            <Col lg={4} xs={{ order: 2 }} className="cover-my-30">
              <div className="cover-user-img d-flex align-items-center">
                <Row>
                  <Col xs={12}>
                    <Card
                      className="border-0"
                      style={{ zIndex: 1 }}
                    >
                      <CardBody className="p-0">
                        <h4 className="card-title text-center">
                          Reset New Password
                        </h4>
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                          }}
                          className="login-form mt-4"
                        >
                          <Row>
                            <Col lg={12}>
                              {/* <p className="text-muted">
                                Please enter your email address. You will
                                receive a link to create a new password via
                                email.
                              </p> */}
                              <div className="mb-3">
                                <Label className="form-label" for="email">
                                  Email address{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <div className="form-icon position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="mail"
                                      className="fea icon-sm icons"
                                    />
                                  </i>
                                </div>
                                <Input
                                  type="text"
                                  className="form-control ps-5"
                                  name="email"
                                  id="email"
                                  placeholder="Enter Your Email Address"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.email || ""}
                                  invalid={
                                    validation.touched.email && validation.errors.email ? true : false
                                  }
                                />
                                {validation.touched.email && validation.errors.email ? (
                                  <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                ) : null}
                              </div>
                            </Col>
                            <Col lg={12}>
                              <p className="text-muted">
                                Please Check your email. You will
                                receive code to create a new password via
                                email.
                              </p>
                              <div className="mb-3">
                                <Label className="form-label" for="email">
                                  Code{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <div className="form-icon position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="eye"
                                      className="fea icon-sm icons"
                                    />
                                  </i>
                                </div>
                                <Input
                                  type="text"
                                  className="form-control ps-5"
                                  name="code"
                                  id="code"
                                  placeholder="Enter Your Code"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.code || ""}
                                  invalid={
                                    validation.touched.code && validation.errors.code ? true : false
                                  }
                                />
                                {validation.touched.code && validation.errors.code ? (
                                  <FormFeedback type="invalid">{validation.errors.code}</FormFeedback>
                                ) : null}
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="mb-3">
                                <Label className="form-label" for="email">
                                Password{" "}
                                  <span className="text-danger">*</span>
                                </Label>
                                <div className="form-icon position-relative">
                                  <i>
                                    <FeatherIcon
                                      icon="eye"
                                      className="fea icon-sm icons"
                                    />
                                  </i>
                                </div>
                                <Input
                                  type="Password"
                                  className="form-control ps-5"
                                  name="Password"
                                  id="Password"
                                  placeholder="Enter Your Password"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.Password || ""}
                                  invalid={
                                    validation.touched.Password && validation.errors.Password ? true : false
                                  }
                                />
                                {validation.touched.Password && validation.errors.Password ? (
                                  <FormFeedback type="invalid">{validation.errors.Password}</FormFeedback>
                                ) : null}
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="d-grid">
                                <Button color="primary">
                                  Send
                                </Button>
                              </div>
                            </Col>
                            <div className="mx-auto">
                              <p className="mb-0 mt-3">
                                <small className="text-dark me-2">
                                  Remember your password ?
                                </small>{" "}
                                <Link
                                  to="/auth-login-bg-video"
                                  className="text-dark fw-bold"
                                >
                                  Sign in
                                </Link>
                              </p>
                            </div>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              lg={{ size: 8, offset: 4 }}
              xs={{ order: 1 }}
              className="padding-less img"
              style={{ backgroundImage: `url(${user03})` }}
            ></Col>
          </Row>
        </Container>
      </section>

      <ThemeSwitcher/>
    </React.Fragment>
  );
};
export default PageCoverRePassword;
