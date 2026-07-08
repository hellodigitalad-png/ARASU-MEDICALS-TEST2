import React from "react";
import Services from "../components/Services/Services.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import Contact from "../components/Contact/Contact.jsx";
import "./ServicesPage.css";
import Bg from "../components/asset/MainImg/bg.png";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section
        className="page-hero"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-inner">
          <div className="eyebrow" style={{ margin: "0 auto 16px" }}>
            <span className="dot" /> Our Services
          </div>
          <h1>
            Healthcare support that goes <br />
            beyond the counter.
          </h1>
          <p>
            From prescription refills to corporate wellness plans — here's
            everything Arasu Medical offers.
          </p>
          <div className="breadcrumb">
            Home / <span>Services</span>
          </div>
        </div>
      </section>

      <Services full />
      <FAQ full />
      <Contact full />
    </div>
  );
}