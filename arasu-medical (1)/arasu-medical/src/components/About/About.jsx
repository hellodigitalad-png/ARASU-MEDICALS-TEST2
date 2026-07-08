import React from "react";
import { Link } from "react-router-dom";
import { CheckIcon, ArrowIcon } from "../../icons.jsx";
import { img } from "../../data.js";
import "./About.css";

const POINTS = [
  "Licensed pharmacists on every shift",
  "Cold-chain storage for sensitive medicines",
  "Batch-verified, genuine stock only",
  "8 branches across Tamil Nadu",
];

export default function About() {
  const photo = img("photo-1576091160399-112ba8d25d1d", "about-pharmacist", 900);

  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <div className="about-media">
          <img src={photo.src} onError={photo.onError} alt="Arasu Medical pharmacist at work" />
          <div className="about-exp-card">
            <strong>18+</strong>
            <span>Years serving Tamil Nadu</span>
          </div>
        </div>

        <div className="about-copy">
          <div className="eyebrow"><span className="dot" /> About Arasu Medical</div>
          <h2 className="section-title">Built on trust, run by <span>people who care.</span></h2>
          <p className="section-sub" style={{ marginBottom: 22 }}>
            What started as a single family-run counter in 2008 has grown into a
            network of 8 branches across Tamil Nadu, serving over 15,200 households.
            Our promise hasn't changed: genuine medicines, honest pricing, and a
            pharmacist who actually knows your name.
          </p>

          <ul className="about-points">
            {POINTS.map((p) => (
              <li key={p}><CheckIcon size={16} /> {p}</li>
            ))}
          </ul>

          <Link to="/about" className="btn btn-primary">Our Full Story <ArrowIcon size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
