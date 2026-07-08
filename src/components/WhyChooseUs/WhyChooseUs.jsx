import React from "react";
import { WHY } from "../../data.js";
import {
  ShieldIcon,
  MedalIcon,
  DoctorIcon,
  DeliveryIcon,
  TagIcon,
  HeadsetIcon,
} from "../../icons.jsx";

import "./WhyChooseUs.css";

// Background Image
import WhyBg from "../asset/MainImg/bg.png";

const ICONS = [
  ShieldIcon,
  MedalIcon,
  DoctorIcon,
  DeliveryIcon,
  TagIcon,
  HeadsetIcon,
];

const COLORS = [
  "var(--green)",
  "var(--orange)",
  "var(--maroon)",
  "var(--darkred)",
  "var(--green)",
  "var(--orange)",
];

export default function WhyChooseUs() {
  return (
    <section
      className="section why"
      id="why"
      style={{
        backgroundImage: `url(${WhyBg})`,
      }}
    >
      <div className="container">

        <div className="section-head">

          <div
            className="eyebrow"
            style={{ margin: "0 auto 16px" }}
          >
            <span className="dot"></span>
            Why Choose Us
          </div>

          <h2 className="section-title">
            Healthcare that
            <span> keeps its promises.</span>
          </h2>

          <p className="section-sub">
            Six reasons families across Tamil Nadu choose
            Arasu Medical for their everyday care.
          </p>

        </div>

        <div className="why-grid">

          {WHY.map((item, index) => {

            const Icon = ICONS[index];

            return (

              <div
                className="why-card"
                key={item.title}
              >

                <div
                  className="icon-circle"
                  style={{
                    background: COLORS[index],
                  }}
                >
                  <Icon
                    color="#fff"
                    size={24}
                  />
                </div>

                <div className="title-rule"></div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}