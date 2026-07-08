import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CrossIcon, PhoneIcon, MenuIcon, CloseIcon, ClockIcon } from "../../icons.jsx";
import { NAV_LINKS } from "../../data.js";
// Import your logo here if it's in your src folder, e.g.:
// import logo from "../../assets/logo.png";
import "./Navbar.css";
import SiteLogo from "../asset/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span><ClockIcon size={14} /> Mon – Sun, 8:00 AM – 10:00 PM</span>
          </div>
          <div className="topbar-right">
            <span>Free delivery on orders above ₹499</span>
            <span className="divider">|</span>
            <a href="mailto:arasumedical@gmail.com">arasumedical@gmail.com</a>
          </div>
        </div>
      </div>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          
          {/* LOGO SECTION ADDED HERE */}
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            {/* If you imported the logo above, use: <img src={logo} alt="Arasu Medical" className="nav-logo" /> */}
          <img src={SiteLogo} alt="Arasu Medical" className="nav-logo" />
            <div className="brand-text">
               {/* You can add text next to the logo here if needed */}
            </div>
          </NavLink>

          <nav className="main-nav">
            {NAV_LINKS.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"}
                className={({ isActive }) => isActive ? "active" : ""}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-cta">
            <a href="tel:+919876543210" className="header-phone">
              <PhoneIcon size={18} />
              <span>+91 98765 43210</span>
            </a>
            <NavLink to="/contact" className="btn btn-primary btn-sm header-book">Book Order</NavLink>
            <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mobile-nav">
            {NAV_LINKS.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? "active" : ""}>
                {n.label}
              </NavLink>
            ))}
            <a href="tel:+919876543210" className="mobile-phone"><PhoneIcon size={16} /> +91 98765 43210</a>
          </div>
        )}
      </header>
    </>
  );
}