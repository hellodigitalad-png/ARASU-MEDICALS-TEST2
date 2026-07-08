import React from "react";
import Contact from "../components/Contact/Contact.jsx";
import Branches from "../components/Branches/Branches.jsx";
import "./ContactPage.css";
import Bg from "../components/asset/MainImg/bg.png";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section
        className="page-hero"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ margin: "0 auto 16px" }}>
            <span className="dot" /> Contact Arasu Medical
          </div>
          <h1>
            We're here to help, <br />
            every single day.
          </h1>
          <p>
            Reach out for order support, prescription questions, or to find
            your nearest branch.
          </p>
          <div className="breadcrumb">
            Home / <span>Contact Us</span>
          </div>
        </div>
      </section>

      <Contact full />
      <Branches full />
    </div>
  );
}