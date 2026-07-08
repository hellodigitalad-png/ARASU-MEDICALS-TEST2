import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowIcon,
  ShieldIcon,
  StarIcon,
} from "../../icons.jsx";

import "./Hero.css";

import HeroBg from "../asset/MainImg/bg.png";
import MainImg from "../asset/MainImg/right.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${HeroBg})`,
      }}
    >
      <div className="container hero-inner">

        {/* Left Side */}
        <div className="hero-copy">

          <div className="eyebrow">
            <span className="dot"></span>
            Tiruppur's Trusted Pharmacy Since 1999
          </div>

          <h1>
            Your Health,
            <br />
            <span>Our Priority.</span>
          </h1>

          <p>
            Arasu Medical brings genuine medicines, everyday wellness
            products, and expert healthcare support to your doorstep —
            backed by 4 branches and over 90,000 families who trust us
            with their care.
          </p>

          <div className="hero-actions">
            <Link to="/medicines" className="btn btn-primary">
              Browse Medicines
              <ArrowIcon size={18} />
            </Link>

            <Link to="/about" className="btn btn-outline">
              Learn More About Us
            </Link>
          </div>

          <div className="hero-trust">

            <div className="trust-stars">
              {[1, 2, 3, 4, 5].map((item) => (
                <StarIcon key={item} size={16} />
              ))}

              <span>4.8/5 from 3,200+ reviews</span>
            </div>

            <div className="trust-badge">
              <ShieldIcon size={16} />
              Licensed & Verified Pharmacy
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="hero-media">

          <img
            src={MainImg}
            alt="Arasu Medical"
            className="hero-product"
          />

        </div>

      </div>
    </section>
  );
}