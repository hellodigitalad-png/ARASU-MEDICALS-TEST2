import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PhoneIcon, MenuIcon, CloseIcon, ClockIcon } from "../../icons.jsx";
import { NAV_LINKS } from "../../data.js";
import "./Navbar.css";
import SiteLogo from "../asset/logo.png";

// Messages that auto-rotate through the topbar, one at a time, sliding in.
// Add/remove/reorder items here to change what shows in the strip.
const TOPBAR_MESSAGES = [
  { icon: <ClockIcon size={14} />, text: "Mon – Sun, 8:00 AM – 10:00 PM" },
  { icon: null, text: "Free delivery on orders above ₹499" },
  { icon: null, text: "100% Genuine Medicines — Verified & Trusted" },
  { icon: null, text: "arasumedical@gmail.com", href: "mailto:arasumedical@gmail.com" },
];

const SLIDE_INTERVAL_MS = 3200;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topbarIndex, setTopbarIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-advance the topbar carousel. Pauses cleanly on unmount.
  useEffect(() => {
    const timer = setInterval(() => {
      setTopbarIndex((i) => (i + 1) % TOPBAR_MESSAGES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const activeMsg = TOPBAR_MESSAGES[topbarIndex];

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-slider" aria-live="polite">
            {/* key={topbarIndex} forces remount, which restarts the slide-in animation */}
            {activeMsg.href ? (
              <a href={activeMsg.href} className="topbar-slide" key={topbarIndex}>
                {activeMsg.icon}
                <span>{activeMsg.text}</span>
              </a>
            ) : (
              <div className="topbar-slide" key={topbarIndex}>
                {activeMsg.icon}
                <span>{activeMsg.text}</span>
              </div>
            )}
          </div>

          <div className="topbar-dots" aria-hidden="true">
            {TOPBAR_MESSAGES.map((_, i) => (
              <span
                key={i}
                className={`topbar-dot ${i === topbarIndex ? "is-active" : ""}`}
                onClick={() => setTopbarIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">
          
          {/* LOGO SECTION */}
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            <img src={SiteLogo} alt="Arasu Medical" className="nav-logo" />
            <div className="brand-text"></div>
          </NavLink>

          {/* DESKTOP NAVIGATION */}
          <nav className="main-nav">
            {NAV_LINKS.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"}
                className={({ isActive }) => isActive ? "active" : ""}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP CTA & MOBILE TOGGLE */}
          <div className="header-cta">
            <a href="tel:+919566877148" className="header-phone">
              <PhoneIcon size={18} />
              <span>+91 95668 77148</span>
            </a>

            {/* Added the 3-line / Close toggle button for mobile screens */}
            <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION DROPDOWN */}
        {open && (
          <div className="mobile-nav">
            {NAV_LINKS.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} onClick={() => setOpen(false)}
                className={({ isActive }) => isActive ? "active" : ""}>
                {n.label}
              </NavLink>
            ))}
            <a href="tel:+919566877148" className="mobile-phone" onClick={() => setOpen(false)}>
              <PhoneIcon size={16} /> +91 95668 77148
            </a>
          </div>
        )}
      </header>
    </>
  );
}