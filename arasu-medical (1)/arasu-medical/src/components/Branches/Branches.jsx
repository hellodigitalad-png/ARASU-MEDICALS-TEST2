import React from "react";
import { Link } from "react-router-dom";
import { BRANCHES, img } from "../../data.js";
import { StoreIcon, PinIcon, PhoneIcon, ArrowIcon } from "../../icons.jsx";
import "./Branches.css";

export default function Branches({ full = false }) {
  const list = full ? BRANCHES : BRANCHES.slice(0, 4);
  const mapImg = img("photo-1524661135-423995f22d0b", "city-map", 800);

  return (
    <section className="section branches" id="branches">
      <div className="container">
        {!full && (
          <div className="section-head">
            <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Our Branches</div>
            <h2 className="section-title">8 branches, <span>one standard of care.</span></h2>
            <p className="section-sub">Walk in for consultation, or order online for delivery from your nearest branch.</p>
          </div>
        )}

        <div className="branches-layout">
          <div className="branches-map">
            <img src={mapImg.src} onError={mapImg.onError} alt="Map of Arasu Medical branch locations" />
            <div className="map-pin-count"><StoreIcon size={16} /> 8 Branches</div>
          </div>

          <div className="branches-list">
            {list.map((b) => (
              <div className="branch-item" key={b.city}>
                <div className="branch-icon"><PinIcon size={16} /></div>
                <div>
                  <h4>{b.city}</h4>
                  <p>{b.address}</p>
                  <a href={`tel:${b.phone.replace(/\s/g, "")}`}><PhoneIcon size={13} /> {b.phone}</a>
                </div>
              </div>
            ))}
            {!full && (
              <Link to="/contact" className="btn btn-primary btn-block">View All Branches <ArrowIcon size={16} /></Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
