import React from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../../data.js";
import {
  PillIcon,
  BottleIcon,
  DeliveryIcon,
  StethoscopeIcon,
  CalendarIcon,
  FlaskIcon,
  HeartIcon,
  StoreIcon,
  ArrowIcon,
} from "../../icons.jsx";

import "./Services.css";
import ServiceBg from "../asset/MainImg/bg.png";

const ICONS = [
  PillIcon,
  BottleIcon,
  DeliveryIcon,
  StethoscopeIcon,
  CalendarIcon,
  HeartIcon,
  FlaskIcon,
  StoreIcon,
  HeartIcon,
  BottleIcon,
];

export default function Services({ full = false }) {
  const excludedTitles = [
    "Chronic Care Refills",
    "Health Check-up Support",
    "Online Consultation",
    "Lab Sample Pickup",
    "Corporate Health Plans",
  ];

  let filteredServices = SERVICES.filter(
    (service) => !excludedTitles.includes(service.title)
  );

  // Veterinary
  if (!filteredServices.some((s) => s.title === "Veterinary")) {
    filteredServices.push({
      title: "Veterinary",
      text: "Essential care items, prescriptions, and wellness support for your pets and domestic animals.",
    });
  }

  // Personal Care
  if (!filteredServices.some((s) => s.title === "Personal Care")) {
    filteredServices.push({
      title: "Personal Care",
      text: "Premium skincare, haircare, oral hygiene, grooming, and daily personal care essentials from trusted brands.",
    });
  }

  // Baby Care
  if (!filteredServices.some((s) => s.title === "Baby Care")) {
    filteredServices.push({
      title: "Baby Care",
      text: "Diapers, baby food, lotions, shampoos, feeding accessories, and complete mother & baby care products.",
    });
  }

  const list = full ? filteredServices : filteredServices.slice(0, 6);

  return (
    <section
      className="section services"
      id="services"
      style={{
        backgroundImage: `url(${ServiceBg})`,
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
              Our Services
            </div>

            <h2 className="section-title">
              More than a pharmacy —
              <span> a care partner.</span>
            </h2>

            <p className="section-sub">
              Services designed around how families actually manage their health.
            </p>
          </div>
        )}

        <div className="services-grid">
          {list.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];

            return (
              <div className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={22} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </div>
            );
          })}
        </div>

        {!full && (
          <div className="products-cta">
            <Link
              to="/services"
              className="btn btn-outline"
            >
              View All Services
              <ArrowIcon size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}