import React from "react";
import { Link } from "react-router-dom";
import {
  CrossIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
} from "../../icons.jsx";
import "./Footer.css";
import SiteLogo from "../asset/logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="brand">
            <div className="brand-icon">
              <CrossIcon size={22} />
            </div>
            <div className="brand-text">
              <img
                src={SiteLogo}
                alt="Arasu Medical"
                className="nav-logo"
              />
            </div>
          </Link>

          <p className="footer-about">
            Your trusted partner in health since 2008. Quality medicines and
            healthcare products, delivered with care across Tiruppur.
          </p>

          <div className="social-row">
            <a
              href="https://wa.me/919566877148"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon size={16} />
            </a>

            <a
              href="https://www.instagram.com/arasu_medicals_?igsh=bTMxajUycXV3YjNp"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={16} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/medicines">Medicines</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/brands">Brands</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>
              <Link to="/services">Prescription Medicines</Link>
            </li>
            <li>
              <Link to="/services">OTC Medicines</Link>
            </li>
            <li>
              <Link to="/services">Home Delivery</Link>
            </li>
            <li>
              <Link to="/services">Veterinary Support</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <PhoneIcon size={16} /> +91 95668 77148
            </li>
            <li>
              <MailIcon size={16} /> asumedicaltirupur@gmail.com
            </li>
            <li>
              <PinIcon size={16} /> Tiruppur
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container footer-bottom">
        <span>
          © 2024 Arasu Medical. Powered by{" "}
          <a
            href="https://beyondadverts.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Beyond Adverts
          </a>
        </span>

        <div className="links"></div>
      </div>
    </footer>
  );
}