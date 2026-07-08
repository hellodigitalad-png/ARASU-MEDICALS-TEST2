import React from "react";
import { Link } from "react-router-dom";
import { BRANDS } from "../../data.js";
import { ArrowIcon } from "../../icons.jsx";
import "./Brands.css";

import medisunLogo from "../../assets/brand-logos/medisun_logo.svg";
import curalifeLogo from "../../assets/brand-logos/curalife_logo.svg";
import drVelloreLogo from "../../assets/brand-logos/dr_vellore_logo.svg";
import ambronixLogo from "../../assets/brand-logos/ambronix_logo.svg";
import zenpharmaLogo from "../../assets/brand-logos/zenpharma_logo.svg";
import trucareLogo from "../../assets/brand-logos/trucare_logo.svg";
import vitalixLogo from "../../assets/brand-logos/vitalix_logo.svg";
import herbicaLogo from "../../assets/brand-logos/herbica_logo.svg";
import purolifeLogo from "../../assets/brand-logos/purolife_logo.svg";
import nirogyaLogo from "../../assets/brand-logos/nirogya_logo.svg";
import carewellLogo from "../../assets/brand-logos/carewell_logo.svg";
import bioaxisLogo from "../../assets/brand-logos/bioaxis_logo.svg";
import vedantaHerbsLogo from "../../assets/brand-logos/vedanta_herbs_logo.svg";
import sanjivaniLogo from "../../assets/brand-logos/sanjivani_logo.svg";
import pharmatrustLogo from "../../assets/brand-logos/pharmatrust_logo.svg";
import welloraLogo from "../../assets/brand-logos/wellora_logo.svg";

// Map each brand name to its logo image file
const BRAND_LOGOS = {
  "MediSun": medisunLogo,
  "Curalife": curalifeLogo,
  "Dr. Vellore": drVelloreLogo,
  "Ambronix": ambronixLogo,
  "Zenpharma": zenpharmaLogo,
  "Trucare": trucareLogo,
  "Vitalix": vitalixLogo,
  "Herbica": herbicaLogo,
  "Purolife": purolifeLogo,
  "Nirogya": nirogyaLogo,
  "CareWell": carewellLogo,
  "BioAxis": bioaxisLogo,
  "Vedanta Herbs": vedantaHerbsLogo,
  "Sanjivani": sanjivaniLogo,
  "PharmaTrust": pharmatrustLogo,
  "Wellora": welloraLogo,
};

export default function Brands({ full = false }) {
  const list = full ? BRANDS : BRANDS.slice(0, 8);
  return (
    <section className="section-tight brands" id="brands">
      <div className="container">
        {!full && (
          <div className="section-head">
            <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Our Brands</div>
            <h2 className="section-title">Partnered with names <span>you already trust.</span></h2>
          </div>
        )}
        <div className={`brands-row ${full ? "brands-row-full" : ""}`}>
          {list.map((b) => (
            <div className="brand-tile" key={b}>
              <img
                src={BRAND_LOGOS[b]}
                alt={`${b} logo`}
                className="brand-logo-img"
                loading="lazy"
                width="140"
                height="40"
              />
            </div>
          ))}
        </div>
        {!full && (
          <div className="brands-cta">
            <Link to="/brands" className="btn btn-outline">View All Brands <ArrowIcon size={16} /></Link>
          </div>
        )}
      </div>
    </section>
  );
}
