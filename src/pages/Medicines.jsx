import React, { useMemo, useState } from "react";
import { MEDICINES, MEDICINE_CATEGORIES } from "../data.js";
import { SearchIcon, TagIcon } from "../icons.jsx";
import "./Medicines.css";
import RightBg from "../components/asset/MainImg/right-bg.png";

export default function Medicines() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return MEDICINES.filter((m) => {
      const matchesCategory = category === "All" || m.category === category;
      const matchesQuery =
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.brand.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="medicines-page">
      <section
        className="page-hero"
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-inner fade-up">
          <div className="eyebrow eyebrow-light" style={{ margin: "0 auto 16px" }}>
            <span className="dot" /> Medicines &amp; Health Products
          </div>
          <h1>
            4,000+ genuine medicines, <br />
            all in <span>one place.</span>
          </h1>
          <p>
            Find everything from daily Vitamins (B12, D3, C, E), Diabetes Care
            (Glycomet, Janumet, Insulin), Baby &amp; Personal Care, First Aid,
            and Health Devices, to our complete <strong>Veterinary</strong>{" "}
            range featuring Dog &amp; Cat Care + Food, Cow, Goat, and Bird
            Care, alongside essential Veterinary Vaccines.
          </p>
          <div className="breadcrumb breadcrumb-light">
            Home / <span>Medicines</span>
          </div>
        </div>
      </section>

      <section
        className="section-tight medicines-list"
        style={{ backgroundImage: `url(${RightBg})` }}
      >
        <div className="container">
          <div className="medicines-toolbar fade-up">
            <div className="search-box">
              <SearchIcon size={18} />
              <input
                type="text"
                placeholder="Search medicines or brands…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="category-pills">
              {MEDICINE_CATEGORIES.map((c) => (
                <button
                  key={c}
                  className={`pill ${category === c ? "active" : ""}`}
                  onClick={() => setCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="results-meta">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </div>

          {filtered.length === 0 ? (
            <div className="no-results">
              No medicines match your search. Try a different term or
              category.
            </div>
          ) : (
            <div className="medicines-grid">
              {filtered.map((m, i) => (
                <div
                  className={`medicine-card fade-up delay-${(i % 4) + 1}`}
                  key={m.name}
                >
                  <div className="medicine-thumb">
                    <img src={m.image} alt={m.name} />
                  </div>
                  <div className="medicine-info">
                    <span className="medicine-brand">
                      <TagIcon size={12} /> {m.brand}
                    </span>
                    <h3>{m.name}</h3>
                    <span className="medicine-category">{m.category}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}