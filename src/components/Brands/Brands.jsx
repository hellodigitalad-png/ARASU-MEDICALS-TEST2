import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../icons.jsx";
import "./Brands.css";

// Background
import BrandBg from "../asset/MainImg/right-bg.png";

// Logos
import abbottLogo from "../asset/brand-logos/Abbott.jpg";
import alkemLogo from "../asset/brand-logos/Alkem Laboratories.jpg";
import cadburyLogo from "../asset/brand-logos/Cadbury.jpg";
import ciplaLogo from "../asset/brand-logos/Cipla.jpg";
import droolsLogo from "../asset/brand-logos/Drools.jpg";
import himalayaLogo from "../asset/brand-logos/Himalaya Wellness.jpg";
import mankindLogo from "../asset/brand-logos/Mankind Pharma.jpg";
import nestleLogo from "../asset/brand-logos/Nestlé.jpg";
import pedigreeLogo from "../asset/brand-logos/Pedigree.jpg";
import purepetLogo from "../asset/brand-logos/Purepet.png";
import skoreLogo from "../asset/brand-logos/skore.png";
import sunPharmaLogo from "../asset/brand-logos/Sun Pharmaceutical Industries.jpg";
import unileverLogo from "../asset/brand-logos/Unilever.jpg";

const BRANDS = [
  "Cipla",
  "Mankind",
  "Alkem",
  "Abbott",
  "Sun Pharma",
  "Nestlé",
  "Cadbury",
  "Unilever",
  "Himalaya",
  "Skore",
  "Drools",
  "Pedigree",
  "Purepet",
];

const BRAND_LOGOS = {
  Cipla: ciplaLogo,
  Mankind: mankindLogo,
  Alkem: alkemLogo,
  Abbott: abbottLogo,
  "Sun Pharma": sunPharmaLogo,
  Nestlé: nestleLogo,
  Cadbury: cadburyLogo,
  Unilever: unileverLogo,
  Himalaya: himalayaLogo,
  Skore: skoreLogo,
  Drools: droolsLogo,
  Pedigree: pedigreeLogo,
  Purepet: purepetLogo,
};

export default function Brands({ full = false }) {
  const list = full ? BRANDS : BRANDS.slice(0, 8);

  return (
    <section
      className="section-tight brands"
      id="brands"
      style={{
        backgroundImage: `url(${BrandBg})`,
      }}
    >
      <div className="container">

        {!full && (
          <div className="section-head">

            <div
              className="eyebrow"
              style={{ margin: "0 auto 16px" }}
            >
              <span className="dot"></span>
              Our Brands
            </div>

            <h2 className="section-title">
              Partnered with names
              <span> you already trust.</span>
            </h2>

          </div>
        )}

        <div className="brands-row">

          {list.map((brand) => (

            <div
              className="brand-tile"
              key={brand}
            >

              <img
                src={BRAND_LOGOS[brand]}
                alt={brand}
                className="brand-logo-img"
              />

            </div>

          ))}

        </div>

        {!full && (

          <div className="brands-cta">

            <Link
              to="/brands"
              className="btn btn-outline"
            >
              View All Brands
              <ArrowIcon size={18} />
            </Link>

          </div>

        )}

      </div>
    </section>
  );
}