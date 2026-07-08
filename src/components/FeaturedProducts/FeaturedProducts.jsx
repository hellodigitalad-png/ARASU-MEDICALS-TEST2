import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data.js";
import { ArrowIcon } from "../../icons.jsx";
import "./FeaturedProducts.css";

// Background Image
import ProductBg from "../asset/MainImg/right-bg.png";

export default function FeaturedProducts() {
  return (
    <section
      className="section featured-products"
      id="products"
      style={{
        backgroundImage: `url(${ProductBg})`,
      }}
    >
      <div className="container">

        <div className="section-head">

          <div
            className="eyebrow"
            style={{ margin: "0 auto 16px" }}
          >
            <span className="dot"></span>
            Featured Health Products
          </div>

          <h2 className="section-title">
            Best-selling categories,
            <span> trusted by families.</span>
          </h2>

          <p className="section-sub">
            Hand-picked essentials that our customers reorder every month.
          </p>

        </div>

        <div className="products-grid">

          {PRODUCTS.map((item) => (

            <div
              className="product-card"
              key={item.title}
            >

              <div className="product-thumb">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="product-info">

                <h3>{item.title}</h3>

                <div className="count">
                  {item.count}
                </div>

                <Link
                  to="/medicines"
                  className="btn btn-primary btn-block btn-sm"
                >
                  View Products
                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="products-cta">

          <Link
            to="/medicines"
            className="btn btn-outline"
          >
            Browse All Medicines
            <ArrowIcon size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}