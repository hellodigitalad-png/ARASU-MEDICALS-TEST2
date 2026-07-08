import React from "react";
import { Link } from "react-router-dom";
import Statistics from "../components/Statistics/Statistics.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import { CheckIcon, ArrowIcon, ShieldIcon, HeartIcon, MedalIcon, UsersIcon } from "../icons.jsx";
import { img } from "../data.js";
import "./AboutPage.css";

const VALUES = [
  { icon: ShieldIcon, title: "Integrity First", text: "We never compromise on the authenticity of what we sell — every batch is verified before it reaches our shelves." },
  { icon: HeartIcon, title: "Care, Not Just Commerce", text: "Every customer gets the same attention, whether they're buying a ₹20 strip or a monthly chronic-care order." },
  { icon: MedalIcon, title: "Consistent Quality", text: "The same standard applies across all 8 branches — no exceptions, no shortcuts." },
  { icon: UsersIcon, title: "Community Rooted", text: "We're a Tamil Nadu business, employing local pharmacists and reinvesting in the communities we serve." },
];

const TIMELINE = [
  { year: "2008", text: "Arasu Medical opens its first counter in Anna Nagar, Chennai, with a single pharmacist and a promise: genuine medicines, honest prices." },
  { year: "2013", text: "Expansion to Coimbatore and Madurai brings the network to 3 branches, alongside our first home-delivery service." },
  { year: "2018", text: "Launch of chronic care refill subscriptions and a 24/7 customer support line, serving over 8,000 households." },
  { year: "2022", text: "Corporate health plans introduced for offices and institutions; branch count grows to 8 across Tamil Nadu." },
  { year: "2026", text: "Today, Arasu Medical serves 15,200+ families with 2,458+ medicines and 1,326+ health products in stock." },
];

const TEAM = [
  { name: "Dr. Arasu Kannan", role: "Founder & Chief Pharmacist", path: "photo-1622253692010-333f2da6031d", seed: "team-1" },
  { name: "Meena Sundaram", role: "Head of Operations", path: "photo-1580489944761-15a19d654956", seed: "team-2" },
  { name: "Dr. Vignesh Raja", role: "Clinical Advisor", path: "photo-1537368910025-700350fe46c7", seed: "team-3" },
  { name: "Lakshmi Priya", role: "Customer Care Lead", path: "photo-1573496359142-b8d87734a5a2", seed: "team-4" },
];

export default function AboutPage() {
  const story = img("photo-1576091160399-112ba8d25d1d", "about-page-story", 900);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> About Arasu Medical</div>
          <h1>Care that's been part of Tamil Nadu <br />for over 18 years.</h1>
          <p>From one counter in Anna Nagar to 8 branches statewide — our mission has always been the same: genuine care, honestly delivered.</p>
          <div className="breadcrumb">Home / <span>About Us</span></div>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story-grid">
          <div className="about-story-media">
            <img src={story.src} onError={story.onError} alt="Arasu Medical team at work" />
          </div>
          <div className="about-story-copy">
            <div className="eyebrow"><span className="dot" /> Our Story</div>
            <h2 className="section-title">A family pharmacy that <span>grew with its community.</span></h2>
            <p className="section-sub" style={{ marginBottom: 16 }}>
              Arasu Medical began in 2008 as a single family-run counter, founded on
              a simple belief: that a pharmacy should feel like a neighbour who
              happens to know medicine, not a faceless supply chain.
            </p>
            <p className="section-sub" style={{ marginBottom: 16 }}>
              Nearly two decades later, that belief hasn't changed — even as we've
              grown to 8 branches, a home-delivery network, and a team of over 40
              qualified pharmacists across Tamil Nadu.
            </p>
            <ul className="about-story-points">
              <li><CheckIcon size={16} /> Every branch stocked with 2,458+ verified medicines</li>
              <li><CheckIcon size={16} /> Pharmacist-reviewed orders, every single time</li>
              <li><CheckIcon size={16} /> 15,200+ households served and counting</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Visit a Branch Near You <ArrowIcon size={16} /></Link>
          </div>
        </div>
      </section>

      <Statistics />

      <section className="section values">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> What We Stand For</div>
            <h2 className="section-title">Our <span>core values.</span></h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-icon"><v.icon size={22} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight timeline-section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Our Journey</div>
            <h2 className="section-title">18 years, <span>one milestone at a time.</span></h2>
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div className="timeline-item" key={t.year}>
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-text">{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Leadership</div>
            <h2 className="section-title">The people behind <span>Arasu Medical.</span></h2>
          </div>
          <div className="team-grid">
            {TEAM.map((m) => {
              const p = img(m.path, m.seed, 400);
              return (
                <div className="team-card" key={m.name}>
                  <div className="team-photo"><img src={p.src} onError={p.onError} alt={m.name} /></div>
                  <h4>{m.name}</h4>
                  <span>{m.role}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
