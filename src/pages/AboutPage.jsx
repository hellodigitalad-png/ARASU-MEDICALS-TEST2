import React from "react";
import { Link } from "react-router-dom";
import Statistics from "../components/Statistics/Statistics.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import {
  CheckIcon,
  ArrowIcon,
  ShieldIcon,
  HeartIcon,
  MedalIcon,
  UsersIcon,
} from "../icons.jsx";
import "./AboutPage.css";
import Bg from "../components/asset/MainImg/bg.png";
import StoryImg from "../components/asset/MainImg/photo-1576091160399-112ba8d25d1d.jpeg";

const VALUES = [
  {
    icon: ShieldIcon,
    title: "Integrity First",
    text: "We never compromise on the authenticity of what we sell — every batch is verified before it reaches our shelves.",
  },
  {
    icon: HeartIcon,
    title: "Care, Not Just Commerce",
    text: "Every customer gets the same attention, whether they're buying a ₹20 medicine strip or a monthly chronic-care order.",
  },
  {
    icon: MedalIcon,
    title: "Consistent Quality",
    text: "The same standard applies across all 4 branches — no exceptions, no shortcuts.",
  },
  {
    icon: UsersIcon,
    title: "Community Rooted",
    text: "We're a Tamil Nadu business, employing local pharmacists and reinvesting in the communities we serve.",
  },
];

const TIMELINE = [
  {
    year: "1999",
    title: "The First Counter",
    text: "Arasu Medical opens its first counter with a single pharmacist and a promise: 100% genuine medicines and honest retail prices.",
  },
  {
    year: "2001",
    title: "Doorstep Delivery",
    text: "Launches local doorstep delivery services, ensuring essential healthcare prescriptions reach patients directly.",
  },
  {
    year: "2008",
    title: "Regional Expansion",
    text: "Expands physical infrastructure across regional hubs to support growing community healthcare demands.",
  },
  {
    year: "2020",
    title: "Chronic Care Program",
    text: "Introduces structured monthly chronic-care medicine refills to support families during critical periods.",
  },
  {
    year: "2026",
    title: "27 Years Strong",
    text: "Today, Arasu Medical proudly serves 90,000+ families with 4,000+ medicines and 1,000+ health products in stock.",
  },
];

const STORY_POINTS = [
  "Every branch stocked with 4,000+ verified medicines",
  "Pharmacist-reviewed orders, every single time",
  "90,000+ households served across Tiruppur and counting",
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* SECTION 1: Hero */}
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="about-hero-overlay" />
        <div className="container about-hero-inner fade-up">
          <div className="eyebrow eyebrow-light">
            <span className="dot" /> About Arasu Medical
          </div>
          <h1 className="about-hero-title">
            27+ Years of <span>Trusted Healthcare</span>
          </h1>
          <p className="about-hero-sub">
            From a single family-run counter in 1999 to 4 branches serving
            Tamil Nadu today — our promise has never changed: genuine
            medicine, honestly delivered.
          </p>
          <div className="breadcrumb breadcrumb-light">
            Home / <span>About Us</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Story */}
      <section
        className="section about-story"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="container about-story-grid">
          <div className="about-story-media fade-up">
            <div
              className="about-story-panel"
              style={{ backgroundImage: `url(${StoryImg})` }}
            />
            <div className="story-badge">
              <span className="story-badge-num">27+</span>
              <span className="story-badge-label">Years of Trust</span>
            </div>
          </div>
          <div className="about-story-copy fade-up delay-1">
            <div className="eyebrow">
              <span className="dot" /> Our Story
            </div>
            <h2 className="section-title">
              A family pharmacy that <span>grew with its community.</span>
            </h2>
            <p className="section-sub">
              Arasu Medical began in 1999 as a single family-run counter,
              founded on a simple belief: that a pharmacy should feel like a
              neighbour who happens to know medicine, not a faceless supply
              chain.
            </p>
            <p className="section-sub">
              Over 27 years later, that belief hasn't changed — even as we've
              grown to 4 branches, a home-delivery network, and a dedicated
              team of qualified pharmacists across Tiruppur.
            </p>
            <ul className="about-story-points">
              {STORY_POINTS.map((point) => (
                <li key={point}>
                  <CheckIcon size={16} />
                  {point}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Visit a Branch Near You <ArrowIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: Statistics */}
      <Statistics />

      {/* SECTION 4: Values */}
      <section
        className="section values"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="container">
          <div className="section-head fade-up">
            <div className="eyebrow" style={{ margin: "0 auto 16px" }}>
              <span className="dot" /> What We Stand For
            </div>
            <h2 className="section-title">
              Our <span>core values.</span>
            </h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div
                className={`value-card fade-up delay-${(i % 4) + 1}`}
                key={v.title}
              >
                <div className="value-icon">
                  <v.icon size={24} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Timeline */}
      <section
        className="section-tight timeline-section"
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="container">
          <div className="section-head fade-up">
            <div className="eyebrow" style={{ margin: "0 auto 16px" }}>
              <span className="dot" /> Our Journey
            </div>
            <h2 className="section-title">
              27 years, <span>one milestone at a time.</span>
            </h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div
                className={`timeline-item fade-up delay-${(i % 4) + 1}`}
                key={t.year}
              >
                <div className="timeline-dot">
                  <span className="timeline-dot-pulse" />
                </div>
                <div className="timeline-card">
                  <div className="timeline-year">{t.year}</div>
                  <h4 className="timeline-title">{t.title}</h4>
                  <p className="timeline-text">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Testimonials */}
      <Testimonials />
    </div>
  );
}