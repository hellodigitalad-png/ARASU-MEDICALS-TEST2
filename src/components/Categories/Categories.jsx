import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../icons.jsx";
import "./Categories.css";

// Background
import CategoryBg from "../asset/MainImg/right-bg.png";

// Images
import PrescriptionImg from "../asset/Medicens/Category/Prescription Medicines.jpeg";
import VitaminsImg from "../asset/Medicens/Category/Vitamins & Supplements.jpg";
import PersonalCareImg from "../asset/Medicens/Category/Personal Care.jpg";
import DiabetesCareImg from "../asset/Medicens/Category/Diabetesaboutpage.jpg";
import BabyCareImg from "../asset/Medicens/Category/Baby & Mother Care.jpg";
import VeterinaryImg from "../asset/Medicens/Category/Veterinary.jpg";

const EXCLUSIVE_CATEGORIES = [
  {
    title: "Prescription Medicines",
    count: "2,000+",
    img: PrescriptionImg,
  },
  {
    title: "Vitamins & Supplements",
    count: "1,200+",
    img: VitaminsImg,
  },
  {
    title: "Personal Care",
    count: "900+",
    img: PersonalCareImg,
  },
  {
    title: "Diabetes Care",
    count: "600+",
    img: DiabetesCareImg,
  },
  {
    title: "Baby Care",
    count: "450+",
    img: BabyCareImg,
  },
  {
    title: "Veterinary",
    count: "350+",
    img: VeterinaryImg,
  },
];

export default function Categories() {
  return (
    <section
      className="section-tight categories"
      id="categories"
      style={{
        backgroundImage: `url(${CategoryBg})`,
      }}
    >
      <div className="container">

        <div className="section-head">

          <div
            className="eyebrow"
            style={{ margin: "0 auto 16px" }}
          >
            <span className="dot"></span>
            Shop by Category
          </div>

          <h2 className="section-title">
            Everything your health needs,
            <span> sorted.</span>
          </h2>

          <p className="section-sub">
            From daily prescriptions to Ayurvedic wellness —
            find the right aisle in one tap.
          </p>

        </div>

        <div className="cat-grid">

          {EXCLUSIVE_CATEGORIES.map((item) => (

            <Link
              to="/medicines"
              className="cat-card"
              key={item.title}
            >

              <div className="cat-thumb">
                <img
                  src={item.img}
                  alt={item.title}
                />
              </div>

              <div className="cat-info">
                <h3>{item.title}</h3>
                <span>{item.count} Items</span>
              </div>

              <ArrowIcon
                className="cat-arrow"
                size={18}
              />

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}