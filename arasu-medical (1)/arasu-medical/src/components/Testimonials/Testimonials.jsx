import React, { useState } from "react";
import { TESTIMONIALS } from "../../data.js";
import { StarIcon, ArrowIcon } from "../../icons.jsx";
import "./Testimonials.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const per = 3;
  const pages = Math.ceil(TESTIMONIALS.length / per);
  const visible = TESTIMONIALS.slice(index * per, index * per + per);

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Testimonials</div>
          <h2 className="section-title">Real stories from <span>real families.</span></h2>
          <p className="section-sub">A few words from the people we've had the privilege of caring for.</p>
        </div>

        <div className="testi-grid">
          {visible.map((t) => {
            return (
              <div className="testi-card" key={t.name}>
                <div className="testi-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} size={14} filled={i < t.rating} />
                  ))}
                </div>
                <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testi-person">
                  <div className="testi-avatar">{t.name.split(" ").map(n => n[0]).join("")}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {pages > 1 && (
          <div className="testi-dots">
            {Array.from({ length: pages }).map((_, i) => (
              <button key={i} className={i === index ? "active" : ""} onClick={() => setIndex(i)} aria-label={`Show testimonials page ${i + 1}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
