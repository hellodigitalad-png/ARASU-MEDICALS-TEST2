import React from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../data.js";
import { PillIcon, BottleIcon, DeliveryIcon, StethoscopeIcon, CalendarIcon, FlaskIcon, HeartIcon, StoreIcon, ArrowIcon } from "../../icons.jsx";
import "./Services.css";

const ICONS = [PillIcon, BottleIcon, DeliveryIcon, StethoscopeIcon, CalendarIcon, HeartIcon, FlaskIcon, StoreIcon];

export default function Services({ full = false }) {
  const list = full ? SERVICES : SERVICES.slice(0, 6);

  return (
    <section className="section services" id="services">
      <div className="container">
        {!full && (
          <div className="section-head">
            <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Our Services</div>
            <h2 className="section-title">More than a pharmacy — <span>a care partner.</span></h2>
            <p className="section-sub">Services designed around how families actually manage their health.</p>
          </div>
        )}

        <div className="services-grid">
          {list.map((s, i) => {
            const IconComp = ICONS[i % ICONS.length];
            return (
              <div className="service-card" key={s.title}>
                <div className="service-icon"><IconComp size={22} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link to="/services" className="service-link">Learn more <ArrowIcon size={14} /></Link>
              </div>
            );
          })}
        </div>

        {!full && (
          <div className="products-cta">
            <Link to="/services" className="btn btn-outline">View All Services <ArrowIcon size={16} /></Link>
          </div>
        )}
      </div>
    </section>
  );
}
