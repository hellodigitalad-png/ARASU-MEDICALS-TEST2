import React from "react";
import Brands from "../components/Brands/Brands.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import "./BrandsPage.css";

export default function BrandsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Our Brand Partners</div>
          <h1>16 trusted brands, <br />one reliable pharmacy.</h1>
          <p>We partner directly with licensed manufacturers and distributors — no grey-market stock, ever.</p>
          <div className="breadcrumb">Home / <span>Brands</span></div>
        </div>
      </section>

      <Brands full />

      <section className="section-tight brands-note">
        <div className="container brands-note-inner">
          <h2 className="section-title" style={{ marginBottom: 12 }}>Want to stock your brand with us?</h2>
          <p className="section-sub" style={{ marginBottom: 24 }}>We're always open to partnering with licensed manufacturers and distributors who share our commitment to quality.</p>
          <a href="mailto:thisarasumedicaltirupur@gmail.com" className="btn btn-primary">Get In Touch</a>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
