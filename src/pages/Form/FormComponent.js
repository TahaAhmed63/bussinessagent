/* eslint-disable eqeqeq */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
// import Header from "../../Components/Header";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import Footer from "../../Components/Footer";
import axios from "axios";
// import BaseURL from "../../BaseUrl/BaseURL";
import { ThreeDots } from "react-loader-spinner";

import'./style.css';
import Swal from "sweetalert2";


const FormComponent = () => {
  const user_id = localStorage.getItem("user_id");
  const userToken = localStorage.getItem("userToken");

  const [isFixed, setIsFixed] = useState(false);
  const [checkboxes, setCheckboxes] = useState([]);
  const [loader, setLoader] = useState(false);
  const [businessType, setBusinessType] = useState();
  const [companyName, setCompanyName] = useState();
  const [taxAddress, setTaxAddress] = useState();
  const [notifyAttorney, setNotifyAttorney] = useState();
  const [attorneyEmail, seAttorneyEmail] = useState();
  const [CheckboxValue, setCheckboxValue] = useState([]);
  const [phoneService, setPhoneService] = useState(false);
  const [trademarkService, setTrademarkService] = useState(false);
  const [ourTaxAddressType, setOurTaxAddressType] = useState(0);
  const [OurTaxAddressValue, setOurTaxAddressValue] = useState("");
  const [Option, setOption] = useState([]);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short - should be 8 chars minimum."),
    password_confirmation: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Must be same your password"),
    fname: Yup.string().required("enter your first name"),
    lname: Yup.string().required("enter your last name"),
    phone: Yup.string().required("enter your phone number"),
    sec_phone: Yup.string().required("enter your secondary phone number"),
    fax: Yup.string().required("enter your fax number"),
    address: Yup.string().required("enter your complete address"),
    city: Yup.string().required("enter your city name"),
    state: Yup.string().required("enter your state"),
    postal: Yup.string().required("enter your area postal code"),
  });


  useEffect(() => {
    getOptiondata();
    // var doc = document.documentElement;
    // const navBar = document.getElementById('topnav');
    // console.log(navBar,"navbar")
    // var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    // if (navBar != null) {
    //   if (top > 80) {
    //     navBar.classList.add('nav-sticky');
    //   } else {
    //     navBar.classList.remove('nav-sticky');
    //     document.querySelector(".shoppingbtn").classList.add("btn-primary");
    //     document.querySelector('.shoppingbtn').classList.remove('btn-light');
    //     document.querySelector('.settingbtn').classList.add('btn-soft-primary');
    //   }
    // }
  }, [])

  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.value);
    const { name, checked, value } = event.target;
    if (checked) {
      // Add the checkbox value to the array
      setCheckboxes([...checkboxes, name]);
    } else {
      // Remove the checkbox value from the array
      setCheckboxes(checkboxes.filter((checkbox) => checkbox !== name));
    }
    if (checked) {
      // Add the checkbox value to the array
      setCheckboxValue([...CheckboxValue, Number(value)]);
    } else {
      // Remove the checkbox value from the array
      setCheckboxValue(CheckboxValue.filter((V) => V !== value));
    }
  };

  const total = CheckboxValue.reduce(
    (previous, current) => previous + current,
    0
  );
  console.log(CheckboxValue, total, "=========>");

  const getOptiondata = () => {
    try {
      var config = {
        method: "get",
        url: `http://businessagentapi.dev-sh.xyz/api/business/mail`,
      };
      axios(config)
        .then((response) => {
          console.log(response);
          setOption(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOrder = async (userId) => {
    setLoader(true)
    try {
      const formData = new FormData();
      formData.append("user_id", userId);
      formData.append("des_comp_name", companyName);
      formData.append("business_entity_type", businessType);
      formData.append("noti_attorney_lawsuit", notifyAttorney);
      formData.append("attorney_email", attorneyEmail);
      formData.append("business_mail_delivered", taxAddress);
      {
        taxAddress === "Our Texas Address" &&
          formData.append("business_mail_id", ourTaxAddressType);
      }
      {
        attorneyEmail === 1 && formData.append("attorney_email", attorneyEmail);
      }

      var config = {
        method: "post",
        url: `http://businessagentapi.dev-sh.xyz/api/orders`,
        data: formData,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      };
      await axios(config)
        .then((response) => {
          console.log("after order--->", response);
          setLoader(false)
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
            history.push('/')
        })
        .catch((e) => {
          setLoader(false)
          console.log(e.message);

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
      setLoader(false)
      console.log(e.message);
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

  const handleSignup = async (v) => {
    try {
      const formData = new FormData();
      formData.append("email", v?.email);
      formData.append("password", v?.password);
      formData.append("password_confirmation", v?.password_confirmation);
      formData.append("fname", v?.fname);
      formData.append("lname", v?.lname);
      formData.append("phone", v?.phone);
      formData.append("sec-phone", v?.sec_phone);
      formData.append("fax", v?.fax);
      formData.append("address", v?.address);
      formData.append("city", v?.city);
      formData.append("state", v?.state);
      formData.append("postal", v?.postal);

      var config = {
        method: "post",
        url: `http://businessagentapi.dev-sh.xyz/api/signup`,
        data: formData,
        headers: {
          Accept: "application/json",
        },
      };
      await axios(config)
        .then((response) => {
          console.log("signup user--->", response);
          localStorage.setItem("userToken", response?.data?.data?.token);
          localStorage.setItem("user_id", response?.data?.data?.user?.id);
          console.log(response?.data?.data?.user?.id, "id------>");
          handleOrder(response?.data?.data?.user?.id);
        })
        .catch((e) => {
          console.log(e.message);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleoption = (e) => {
    setOurTaxAddressType(e.target.value);
    setOurTaxAddressValue(e.target.name);
  };

  console.log(ourTaxAddressType);

  return (
    <div className="main_form">
      {/* <Header /> */}
      <Formik
        initialValues={{
          email: "",
          password: "",
          password_confirmation: "",
          fname: "",
          lname: "",
          phone: "",
          sec_phone: "",
          fax: "",
          address: "",
          city: "",
          state: "",
          postal: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleSignup(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="container all-form">
              <div className="row">
                <div className="col-lg-7 col-md-6 col-sm-12 col-xm-12">
                  <h2 className="form_top_heading">
                    Texas Registered Agent Service – $35/YR
                  </h2>
                  <h4 className="form-heading">Order Information</h4>
                  <div className="section1">
                    <label className="form-label field_name">
                      Desired Company Name or Legal Name{" "}
                    </label>
                    <br />
                    <input
                      type="text"
                      required
                      name="company-name"
                      className="col-lg-12 form-control mb-3"
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                      }}
                    />
                    <label className="form-label  field_name ">
                      Business Entity Type
                    </label>
                    <br />
                    <select
                      className="col-lg-12 form-control mb-3"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setBusinessType(e.target.value);
                      }}
                    >
                      <option value="llc" name="business-type">
                        LLC
                      </option>
                      <option value="Registered Agent" name="business-type">
                        Registered Agent
                      </option>
                      <option value="Form us a US Company" name="business-type">
                        Form us a US Company
                      </option>
                      <option value="Form an LLC" name="business-type">
                        Form an LLC
                      </option>
                      <option value="Form a non LLC" name="business-type">
                        Form a non LLC
                      </option>
                      <option
                        value="Form an S coorporation"
                        name="business-type"
                      >
                        Form an S coorporation
                      </option>
                      <option
                        value="Form a C coorporation"
                        name="business-type"
                      >
                        Form a C coorporation
                      </option>
                      <option value="Form a non Profit" name="business-type">
                        Form a non Profit
                      </option>
                    </select>
                    <label className="form-label  field_name ">
                      Notify Your Attorney of a Lawsuit{" "}
                    </label>
                    <br />
                    <select
                      className="col-lg-12 form-control mb-3"
                      aria-label="Default select example"
                      onChange={(e) => {
                        setNotifyAttorney(e.target.value);
                      }}
                    >
                      <option value={0} name="notify-attorney">
                        ON
                      </option>
                      <option value={1} name="notify-attorney">
                        Yes
                      </option>
                    </select>

                    {notifyAttorney === "1" && (
                      <div>
                        {" "}
                        <label className="form-label field_name">
                          Attorney Email{" "}
                        </label>
                        <br />
                        <input
                          type="email"
                          required
                          name="email"
                          className="col-lg-12 form-control mb-3"
                          onChange={(e) => {
                            seAttorneyEmail(e.target.value);
                          }}
                        />
                      </div>
                    )}

                    
                    <label className="form-label  field_name-para">
                      As your registered agent, we accept your company’s state
                      and legal mail. Where would you like your business mail
                      delivered?
                    </label>

                    <div className="radio-address-parent">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tax-address"
                        value="Our Texas Address"
                        id="defaultCheck1"
                        onChange={(e) => {
                          setTaxAddress(e.target.value);
                        }}
                      />
                      <label className="form-check-label">
                        Our Texas Address
                      </label>
                      {taxAddress === "Our Texas Address" && (
                        <div>
                          {Option?.map((e) => {
                            return (
                              <>
                                <div className="radio-address-child">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name={e.price}
                                    value={e?.id}
                                    id="defaultCheck2"
                                    checked={ourTaxAddressType == e?.id}
                                    onChange={handleoption}
                                  />
                                  <label
                                    className="form-check-label"
                                  
                                  >
                                    {`${e?.name}${e?.detail}`}
                                  </label>
                                  <br />
                                </div>
                              </>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <br />
                    <div className="radio-address-parent">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tax-address"
                        value="Your Address"
                        id="defaultCheck"
                        onChange={(e) => {
                          setTaxAddress(e.target.value);
                        }}
                      />
                      <label
                        className="form-check-label"
                       
                      >
                        Your Address
                      </label>
                    </div>

                    {taxAddress === "Your Address" && (
                      <label className="your-address-child">
                        Okay, but you’re missing out on free mail forwarding, or
                        the option to get a unique mailing address for your new
                        business.
                      </label>
                    )}
                  </div>

                  <h4 className="form-heading">Contact Information</h4>
                  <div className="section1">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <label className="form-label field_name">
                            First Name{" "}
                          </label>
                          <Field
                            name="fname"
                            className="col-lg-12 form-control mb-3"
                          />
                          {errors.fname && touched.fname ? (
                            <div>{errors.fname}</div>
                          ) : null}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <label className="form-label field_name">
                            Last Name{" "}
                          </label>
                          <Field
                            name="lname"
                            className="col-lg-12 form-control mb-3"
                          />
                          {errors.lname && touched.lname ? (
                            <div>{errors.lname}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <label className="form-label field_name">Phone </label>
                    <Field
                      name="phone"
                      className="col-lg-12 form-control mb-3"
                    />
                    {errors.phone && touched.phone ? (
                      <div>{errors.phone}</div>
                    ) : null}

                    <label className="form-label field_name">
                      Secondary Phone (optional){" "}
                    </label>
                    <Field
                      name="sec_phone"
                      className="col-lg-12 form-control mb-3"
                    />
                    {errors.sec_phone && touched.sec_phone ? (
                      <div>{errors.sec_phone}</div>
                    ) : null}

                    <label className="form-label field_name">
                      Fax (optional){" "}
                    </label>
                    <Field name="fax" className="col-lg-12 form-control mb-3" />
                    {errors.fax && touched.fax ? <div>{errors.fax}</div> : null}

                    <label className="form-label field_name">
                      Street Address / P.O. Box{" "}
                    </label>
                    <Field
                      name="address"
                      className="col-lg-12 form-control mb-3"
                    />
                    {errors.address && touched.address ? (
                      <div>{errors.address}</div>
                    ) : null}

                    <label className="form-label field_name">City </label>
                    <Field
                      name="city"
                      className="col-lg-12 form-control mb-3"
                    />
                    {errors.city && touched.city ? (
                      <div>{errors.city}</div>
                    ) : null}

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <label className="form-label field_name">
                            State / Province{" "}
                          </label>
                          <Field
                            name="state"
                            className="col-lg-12 form-control mb-3"
                          />
                          {errors.state && touched.state ? (
                            <div>{errors.state}</div>
                          ) : null}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <label className="form-label field_name">
                            Zip / Postal{" "}
                          </label>
                          <Field
                            name="postal"
                            className="col-lg-12 form-control mb-3"
                          />
                          {errors.postal && touched.postal ? (
                            <div>{errors.postal}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="form-heading">Account Information</h4>
                  <div className="section1">
                    <label className="form-label field_name">Email </label>
                    <Field
                      name="email"
                      type="email"
                      className="col-lg-12 form-control mb-3"
                    />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                    <label className="form-label field_name">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="col-lg-12 form-control mb-3"
                    />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                    <label className="form-label field_name">
                      Confrim Password
                    </label>
                    <Field
                      type="password"
                      name="password_confirmation"
                      className="col-lg-12 form-control mb-3"
                    />
                    {errors.password_confirmation &&
                    touched.password_confirmation ? (
                      <div>{errors.password_confirmation}</div>
                    ) : null}
                  </div>

                  <h4 className="form-heading">Optional Products</h4>
                  <div className="section1">
                    <div className="product-option">
                      <input
                        name="We’ll File Your Annual Franchise Tax Report for You"
                        className="form-check-input"
                        type="checkbox"
                        value="45"
                        checked={checkboxes.includes(
                          "We’ll File Your Annual Franchise Tax Report for You"
                        )}
                        onChange={handleCheckboxChange}
                      />

                      <label className="form-check-label">
                        We’ll File Your Annual Franchise Tax Report for You
                      </label>
                    </div>
                    <br />
                    <div className="product-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="65"
                        name="Phone Service"
                        checked={checkboxes.includes("Phone Service")}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label">Phone Service</label>
                    </div>
                    <br />
                    <div className="product-option">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="95"
                        name="Trademark Service – $499"
                        checked={checkboxes.includes(
                          "Trademark Service – $499"
                        )}
                        onChange={handleCheckboxChange}
                      />

                      <label className="form-check-label ">
                        Trademark Service – $499
                      </label>
                    </div>
                  </div>
                </div>

                <div
                  className={
                  "col-lg-4 col-md-6 col-sm-12 col-xm-12 order-right"
                  }
                >
                  <h4 className="form-heading">Order Summary</h4>
                  <div className="section1">
                    <div className="order-summary-fields row">
                      <div className="temp">
                        <p className="order-summary-field-name">
                          Registered Agent Service{" "}
                        </p>
                        <p className="order-summary-field-amount">$35.00</p>
                      </div>
                      <hr />

                      {checkboxes.includes(
                        "We’ll File Your Annual Franchise Tax Report for You"
                      ) && (
                        <>
                          <div className="temp">
                            <p className="order-summary-field-name">
                              Annual Franchise Tax
                            </p>
                            <p className="order-summary-field-amount">
                              $ 45.00
                            </p>
                          </div>
                          <hr />
                        </>
                      )}
                      {checkboxes.includes("Phone Service") && (
                        <>
                          <div className="temp">
                            <p className="order-summary-field-name">
                              phone Service
                            </p>
                            <p className="order-summary-field-amount">$65.00</p>
                          </div>
                          <hr />
                        </>
                      )}
                      {checkboxes.includes("Trademark Service – $499") && (
                        <>
                          <div className="temp">
                            <p className="order-summary-field-name">
                              Trademark Service
                            </p>
                            <p className="order-summary-field-amount">$95.00</p>
                          </div>

                          <hr />
                        </>
                      )}
                      {Option?.map((e) => {
                        console.log(ourTaxAddressType == e.id);

                        return (
                          <>
                            {taxAddress === "Our Texas Address" &&
                              ourTaxAddressType == e.id && (
                                <>
                                  <div className="temp">
                                    <p className="order-summary-field-name">
                                      {e.name} {e.detail}
                                    </p>
                                    <p className="order-summary-field-amount">
                                      {e?.price}
                                    </p>
                                  </div>

                                  <hr />
                                </>
                              )}
                          </>
                        );
                      })}

                      <div className="temp">
                        <p className="order-summary-field-total"> Total </p>
                        <p className="order-summary-field-total">
                          {" "}
                          {35 + Number(OurTaxAddressValue) + total}
                        </p>
                      </div>

                      <button className="order-btn">
                        {loader ? (
                          <ThreeDots
                            height="50"
                            width="50"
                            radius="9"
                            color="#fff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            wrapperClassName=""
                            visible={true}
                          />
                        ) : (
                          "Submit Order"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {/* <Footer /> */}
    </div>
  );
};

export default FormComponent;
