import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CrossIcon, FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, PhoneIcon, MailIcon, PinIcon, CheckIcon } from "../../icons.jsx";
import "./Footer.css";
import SiteLogo from "../asset/logo.png"
export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <div className="brand-icon"><CrossIcon size={22} /></div>
            <div className="brand-text">
              <img src={SiteLogo} alt="Arasu Medical" className="nav-logo" />
            </div>
          </Link>
          <p className="footer-about">Your trusted partner in health since 2008. Quality medicines and healthcare products, delivered with care across Tamil Nadu.</p>
          <div className="social-row">
            <a href="#" aria-label="Facebook"><FacebookIcon size={16} /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon size={16} /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon size={16} /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinIcon size={16} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/medicines">Medicines</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/brands">Brands</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services">Prescription Medicines</Link></li>
            <li><Link to="/services">OTC Medicines</Link></li>
            <li><Link to="/services">Home Delivery</Link></li>
            <li><Link to="/services">Online Consultation</Link></li>
            <li><Link to="/services">Chronic Care Refills</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li><PhoneIcon size={16} /> +91 98765 43210</li>
            <li><MailIcon size={16} /> arasumedical@gmail.com</li>
            <li><PinIcon size={16} /> 123, Health Street, Anna Nagar, Chennai - 600001</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p className="newsletter-text">Subscribe to get updates on offers and new products.</p>
          {subscribed ? (
            <div className="newsletter-success"><CheckIcon size={16} /> Subscribed! Thank you.</div>
          ) : (
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Arasu Medical. All Rights Reserved.</span>
        <div className="links">
          <span>Privacy Policy</span>
          <span>Terms &amp; Conditions</span>
        </div>
      </div>
    </footer>
  );
}
