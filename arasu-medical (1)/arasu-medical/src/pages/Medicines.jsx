import React, { useMemo, useState } from "react";
import { MEDICINES, MEDICINE_CATEGORIES, img } from "../data.js";
import { SearchIcon, TagIcon } from "../icons.jsx";
import "./Medicines.css";

export default function Medicines() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return MEDICINES.filter((m) => {
      const matchesCategory = category === "All" || m.category === category;
      const matchesQuery = m.name.toLowerCase().includes(query.toLowerCase()) || m.brand.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Medicines &amp; Health Products</div>
          <h1>2,458+ genuine medicines, <br />all in one place.</h1>
          <p>Search by name or brand, filter by category, and order for delivery or in-branch pickup.</p>
          <div className="breadcrumb">Home / <span>Medicines</span></div>
        </div>
      </section>

      <section className="section-tight medicines-page">
        <div className="container">
          <div className="medicines-toolbar">
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

          <div className="results-meta">{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</div>

          {filtered.length === 0 ? (
            <div className="no-results">No medicines match your search. Try a different term or category.</div>
          ) : (
            <div className="medicines-grid">
              {filtered.map((m) => {
                const p = img(m.path, m.seed, 400);
                const discount = Math.round(((m.mrp - m.price) / m.mrp) * 100);
                return (
                  <div className="medicine-card" key={m.name}>
                    <div className="medicine-thumb">
                      <img src={p.src} onError={p.onError} alt={m.name} />
                      {discount > 0 && <span className="discount-badge">{discount}% OFF</span>}
                    </div>
                    <div className="medicine-info">
                      <span className="medicine-brand"><TagIcon size={12} /> {m.brand}</span>
                      <h3>{m.name}</h3>
                      <span className="medicine-category">{m.category}</span>
                      <div className="medicine-price">
                        <strong>₹{m.price}</strong>
                        {m.mrp > m.price && <s>₹{m.mrp}</s>}
                      </div>
                      <button className="btn btn-primary btn-block btn-sm">Add to Cart</button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
