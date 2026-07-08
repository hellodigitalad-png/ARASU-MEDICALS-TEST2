import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS, img } from "../../data.js";
import { ArrowIcon } from "../../icons.jsx";
import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Featured Health Products</div>
          <h2 className="section-title">Best-selling categories, <span>trusted by families.</span></h2>
          <p className="section-sub">Hand-picked essentials that our customers reorder every month.</p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((p) => {
            const im = img(p.path, p.seed, 500);
            return (
              <div className="product-card" key={p.title}>
                <div className="product-thumb">
                  <img src={im.src} onError={im.onError} alt={p.title} />
                  <span className="product-price">{p.price}</span>
                </div>
                <div className="product-info">
                  <h3>{p.title}</h3>
                  <div className="count">{p.count}</div>
                  <Link to="/medicines" className="btn btn-primary btn-block btn-sm">View Products</Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="products-cta">
          <Link to="/medicines" className="btn btn-outline">Browse All Medicines <ArrowIcon size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
