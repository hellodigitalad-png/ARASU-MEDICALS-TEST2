import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon, CrossIcon, ShieldIcon, StarIcon } from "../../icons.jsx";
import { img } from "../../data.js";
import "./Hero.css";
import SiteLogo from "../asset/logo.png"

export default function Hero() {
  const hero = img("photo-1631549916768-4119b2e5f926", "pharmacy-interior", 1000);

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot" /> Tamil Nadu's Trusted Pharmacy Since 2008</div>
          <h1>Your Health, <br /><span>Our Priority.</span></h1>
          <p>
            Arasu Medical brings genuine medicines, everyday wellness products, and
            expert pharmacist guidance to your doorstep — backed by 8 branches and
            over 15,200 families who trust us with their care.
          </p>

          <div className="hero-actions">
            <Link to="/medicines" className="btn btn-primary">Browse Medicines <ArrowIcon size={16} /></Link>
            <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
          </div>

          <div className="hero-trust">
            <div className="trust-stars">
              {[1,2,3,4,5].map(i => <StarIcon key={i} size={16} />)}
              <span>4.8/5 from 3,200+ reviews</span>
            </div>
            <div className="trust-badge"><ShieldIcon size={16} /> Licensed &amp; Verified Pharmacy</div>
          </div>
        </div>

        <div className="hero-media">
          <img src={hero.src} onError={hero.onError} alt="Arasu Medical pharmacy interior" />
          <div className="hero-banner">Your Health, Our Priority</div>
          <div className="hero-shop-tag">
            <div className="brand-icon"><CrossIcon size={18} /></div>
             <img src={SiteLogo} alt="Arasu Medical" className="nav-logo" />
          </div>
          <div className="hero-float-card">
            <div className="pulse-dot" />
            <div>
              <strong>15,200+</strong>
              <span>Happy families</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
