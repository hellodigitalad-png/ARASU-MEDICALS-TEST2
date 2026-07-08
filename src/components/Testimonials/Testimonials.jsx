import React, { useState } from "react";
import { StarIcon } from "../../icons.jsx";
import "./Testimonials.css";

// Background Image
import TestimonialBg from "../asset/MainImg/bg.png";

const LOCAL_TESTIMONIALS = [
  {
    name: "Arunkumar K",
    role: "Garment Unit Owner, Tiruppur",
    quote:
      "Extremely reliable for getting my parents' chronic care medicines delivered right to our home in Tiruppur. Highly professional setup.",
    rating: 5,
  },
  {
    name: "Veeradhivin",
    role: "Business Executive, Avinashi Road",
    quote:
      "Managing health for a big family is tough, but their prompt response and genuine medicines give great peace of mind. A true healthcare partner.",
    rating: 5,
  },
  {
    name: "Balamurugan",
    role: "Merchandiser, Khaderpet",
    quote:
      "Very convenient service. I can order essential health wellness items quickly during my tight factory shifts and pick them up or get them delivered.",
    rating: 4,
  },
  {
    name: "Arunkumar P",
    role: "Textile Exporter, Palladam Road",
    quote:
      "The staff is incredibly knowledgeable. They don't just hand over medicines; they explain the dosage clearly. Excellent service in Tiruppur.",
    rating: 5,
  },
  {
    name: "Pradeep",
    role: "Apparel Designer, PN Road",
    quote:
      "As a resident here, getting authentic medicines on time is vital. Their team handles my recurring monthly orders flawlessly every single time.",
    rating: 5,
  },
  {
    name: "Vasanthkumar",
    role: "Production Manager, Nallur",
    quote:
      "Top-notch service standard in Tiruppur. Clear communication, fast processing, and premium packaging for all medical supplies.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const per = 3;
  const pages = Math.ceil(LOCAL_TESTIMONIALS.length / per);

  const visible = LOCAL_TESTIMONIALS.slice(
    index * per,
    index * per + per
  );

  return (
    <section
      className="section testimonials"
      id="testimonials"
      style={{
        backgroundImage: `url(${TestimonialBg})`,
      }}
    >
      <div className="container">

        <div className="section-head">

          <div
            className="eyebrow"
            style={{ margin: "0 auto 16px" }}
          >
            <span className="dot"></span>
            Testimonials
          </div>

          <h2 className="section-title">
            Real stories from
            <span> real families.</span>
          </h2>

          <p className="section-sub">
            A few words from the people we've had the privilege of
            caring for in Tiruppur.
          </p>

        </div>

        <div className="testi-grid">

          {visible.map((t) => (

            <div
              className="testi-card"
              key={t.name}
            >

              <div className="testi-stars">

                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    size={14}
                    filled={i < t.rating}
                  />
                ))}

              </div>

              <p className="testi-quote">
                "{t.quote}"
              </p>

              <div className="testi-person">

                <div className="testi-avatar">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>

                <div>

                  <strong>{t.name}</strong>

                  <span>{t.role}</span>

                </div>

              </div>

            </div>

          ))}

        </div>

        {pages > 1 && (

          <div className="testi-dots">

            {Array.from({ length: pages }).map((_, i) => (

              <button
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              />

            ))}

          </div>

        )}

      </div>
    </section>
  );
}