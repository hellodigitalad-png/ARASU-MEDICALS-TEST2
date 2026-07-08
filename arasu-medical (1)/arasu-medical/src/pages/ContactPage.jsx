import React from "react";
import Contact from "../components/Contact/Contact.jsx";
import Branches from "../components/Branches/Branches.jsx";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Contact Arasu Medical</div>
          <h1>We're here to help, <br />every single day.</h1>
          <p>Reach out for order support, prescription questions, or to find your nearest branch.</p>
          <div className="breadcrumb">Home / <span>Contact Us</span></div>
        </div>
      </section>

      <Contact full />
      <Branches full />
    </>
  );
}
