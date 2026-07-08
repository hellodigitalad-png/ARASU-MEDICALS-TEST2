import React, { useEffect, useRef, useState } from "react";
import { PillIcon, BottleIcon, UsersIcon, StoreIcon, MedalIcon, DoctorIcon } from "../../icons.jsx";
import { STATS } from "../../data.js";
import "./Statistics.css";

const ICONS = { medicines: PillIcon, products: BottleIcon, customers: UsersIcon, branches: StoreIcon, years: MedalIcon, pharmacists: DoctorIcon };

function Counter({ target, suffix }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1200;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);
          else setValue(target);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

export default function Statistics() {
  return (
    <section className="section-tight statistics">
      <div className="container stat-grid">
        {STATS.map((s) => {
          const IconComp = ICONS[s.key];
          return (
            <div className="stat-card" key={s.key}>
              <div className="stat-icon"><IconComp size={22} /></div>
              <div className="stat-num"><Counter target={s.num} suffix={s.suffix} /></div>
              <div className="stat-label">{s.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
