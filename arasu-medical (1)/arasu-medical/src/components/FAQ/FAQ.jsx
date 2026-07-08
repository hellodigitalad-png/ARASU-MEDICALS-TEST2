import React, { useState } from "react";
import { FAQS } from "../../data.js";
import { ChevronDownIcon } from "../../icons.jsx";
import "./FAQ.css";

export default function FAQ({ full = false }) {
  const list = full ? FAQS : FAQS.slice(0, 5);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <div className="eyebrow"><span className="dot" /> FAQs</div>
          <h2 className="section-title">Questions, <span>answered.</span></h2>
          <p className="section-sub">Can't find what you're looking for? Reach our support team any time.</p>
        </div>

        <div className="faq-list">
          {list.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={f.q}>
                <button className="faq-question" onClick={() => setOpenIndex(isOpen ? -1 : i)}>
                  <span>{f.q}</span>
                  <ChevronDownIcon size={18} className="faq-chevron" />
                </button>
                {isOpen && <div className="faq-answer">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
