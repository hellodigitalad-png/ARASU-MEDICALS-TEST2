import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES, img } from "../../data.js";
import { ArrowIcon } from "../../icons.jsx";
import "./Categories.css";

export default function Categories() {
  return (
    <section className="section-tight categories" id="categories">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Shop by Category</div>
          <h2 className="section-title">Everything your health needs, <span>sorted.</span></h2>
          <p className="section-sub">From daily prescriptions to Ayurvedic wellness — find the right aisle in one tap.</p>
        </div>

        <div className="cat-grid">
          {CATEGORIES.map((c) => {
            const im = img(c.path, c.seed, 400);
            return (
              <Link to="/medicines" className="cat-card" key={c.title}>
                <div className="cat-thumb">
                  <img src={im.src} onError={im.onError} alt={c.title} />
                </div>
                <div className="cat-info">
                  <h3>{c.title}</h3>
                  <span>{c.count} items</span>
                </div>
                <ArrowIcon className="cat-arrow" size={16} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
