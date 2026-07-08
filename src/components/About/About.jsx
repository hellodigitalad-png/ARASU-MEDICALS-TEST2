import React from "react";
import { Link } from "react-router-dom";
import { CheckIcon, ArrowIcon } from "../../icons.jsx";
import "./About.css";

import AboutBg from "../asset/MainImg/bg.png"; // Background Image
import AboutImg from "../asset/Docter/Dr.png";      // Doctor PNG

const POINTS = [
  "Licensed pharmacists on every shift",
  "Cold-chain storage for sensitive medicines",
  "Batch-verified, genuine stock only",
  "4 branches across Tamil Nadu",
];

export default function About() {
  return (
    <section
      className="section about"
      id="about"
      style={{
        backgroundImage: `url(${AboutBg})`,
      }}
    >
      <div className="container about-inner">

        {/* Left Side */}
        <div className="about-media">

          <img
            src={AboutImg}
            alt="Arasu Medical Doctor"
            className="about-doctor"
          />

          <div className="about-exp-card">
            <strong>27+</strong>
            <span>Years Serving Tamil Nadu</span>
          </div>

        </div>

        {/* Right Side */}
        <div className="about-copy">

          <div className="eyebrow">
            <span className="dot"></span>
            About Arasu Medical
          </div>

          <h2 className="section-title">
            Built on trust, run by
            <span> people who care.</span>
          </h2>

          <p
            className="section-sub"
            style={{ marginBottom: "22px" }}
          >
            What started as a single family-run pharmacy has grown into a
            trusted healthcare destination serving thousands of families
            across Tamil Nadu. Our commitment remains the same—genuine
            medicines, affordable prices, expert guidance, and caring
            service every day.
          </p>

          <ul className="about-points">
            {POINTS.map((point) => (
              <li key={point}>
                <CheckIcon size={18} />
                {point}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="btn btn-primary"
          >
            Our Full Story
            <ArrowIcon size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}