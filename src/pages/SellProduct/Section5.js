import React from "react";

const Section5 = () => {
  return (
    <div className="container Subribe mt-5 d-flex justify-content-center align-items-center flex-column">
      <span
        style={{
          fontSize: "16px",
          color: "#BC95F2",
          fontWeight: "700",
          lineHeight: "3.2px",
        }}
      >
        NEWS LETTER
      </span>
      <h1
        style={{
          fontSize: "50px",
          color: "white",
          fontWeight: "700",
          lineHeight: "60px",
        }}
      >
        Subscribe Newsletter
      </h1>
      <form action="" className="col-md-6 mt-2">
        <input
          className="Section5-input"
          type="email"
          maxlength="50"
          required
          placeholder="Enter your email address"
        />
        <button class="bt">Subscribe</button>
      </form>
    </div>
  );
};

export default Section5;
