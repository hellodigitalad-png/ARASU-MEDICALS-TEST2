import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  PhoneIcon,
  MenuIcon,
  CloseIcon,
  ClockIcon,
} from "../../icons.jsx";
import { NAV_LINKS } from "../../data.js";
import "./Navbar.css";
import SiteLogo from "../asset/logo.png";

/* =========================================
   TOPBAR MESSAGES
========================================= */

const TOPBAR_MESSAGES = [
  {
    icon: <ClockIcon size={14} />,
    text: "Mon – Sun, 8:00 AM – 10:00 PM",
  },
  {
    icon: null,
    text: "Free Delivery Across Tiruppur",
  },
  {
    icon: null,
    text: "100% Genuine Medicines • Trusted Since 1999",
  },
  {
    icon: null,
    text: "+91 95668 77148",
    href: "tel:+919566877148",
  },
  {
    icon: null,
    text: "arasumedicaltirupur@gmail.com",
    href: "mailto:arasumedicaltirupur@gmail.com",
  },
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTopbarIndex((prev) => (prev + 1) % TOPBAR_MESSAGES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const activeMsg = TOPBAR_MESSAGES[topbarIndex];

  return (
    <>
      {/* ================= TOP BAR ================= */}

      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-slider" aria-live="polite">
            {activeMsg.href ? (
              <a
                key={topbarIndex}
                href={activeMsg.href}
                className="topbar-slide"
              >
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

          <div className="topbar-dots">
            {TOPBAR_MESSAGES.map((_, index) => (
              <span
                key={index}
                className={`topbar-dot ${
                  index === topbarIndex ? "is-active" : ""
                }`}
                onClick={() => setTopbarIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= HEADER ================= */}

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container header-inner">

          {/* LOGO */}

          <NavLink
            to="/"
            className="brand"
            onClick={() => setOpen(false)}
          >
            <img
              src={SiteLogo}
              alt="Arasu Medical"
              className="navbar-logo"
            />
          </NavLink>

          {/* DESKTOP NAVIGATION */}

          <nav className="main-nav">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* PHONE & MOBILE MENU */}

          <div className="header-cta">
            <a
              href="tel:+919566877148"
              className="header-phone"
            >
              <PhoneIcon size={18} />
              <span>+91 95668 77148</span>
            </a>

            <button
              className="menu-toggle"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? (
                <CloseIcon size={24} />
              ) : (
                <MenuIcon size={24} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}

        {open && (
          <div className="mobile-nav">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="tel:+919566877148"
              className="mobile-phone"
              onClick={() => setOpen(false)}
            >
              <PhoneIcon size={16} />
              +91 95668 77148
            </a>
          </div>
        )}
      </header>
    </>
  );
}