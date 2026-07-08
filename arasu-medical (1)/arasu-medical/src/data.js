// Central content + image helpers for the Arasu Medical site.
// All imagery is loaded live from the internet (Unsplash) with a Picsum fallback.

export const img = (unsplashPath, seed, w = 900) => ({
  src: `https://images.unsplash.com/${unsplashPath}?auto=format&fit=crop&w=${w}&q=80`,
  onError: (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = `https://picsum.photos/seed/${seed}/${w}/${Math.round(w * 0.75)}`;
  },
});

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Medicines", to: "/medicines" },
  { label: "Services", to: "/services" },
  { label: "Brands", to: "/brands" },
  { label: "Contact Us", to: "/contact" },
];

export const STATS = [
  { key: "medicines", num: 2458, suffix: "+", label: "Total Medicines" },
  { key: "products", num: 1326, suffix: "+", label: "Health Products" },
  { key: "customers", num: 15200, suffix: "+", label: "Happy Customers" },
  { key: "branches", num: 8, suffix: "", label: "Branches" },
  { key: "years", num: 18, suffix: "+", label: "Years of Trust" },
  { key: "pharmacists", num: 42, suffix: "", label: "Expert Pharmacists" },
];

export const WHY = [
  { title: "100% Genuine Medicines", text: "Every product is sourced directly from licensed manufacturers and verified distributors — never grey-market stock." },
  { title: "Best Quality Products", text: "A curated range of trusted healthcare and wellness brands, checked for quality before it reaches our shelves." },
  { title: "Expert Guidance", text: "Our qualified pharmacists are on hand to answer questions, check interactions, and advise on the right product." },
  { title: "Fast & Safe Delivery", text: "Temperature-safe packaging and tracked delivery, with same-day dispatch on orders placed before 4 PM." },
  { title: "Affordable Prices", text: "Transparent, competitive pricing with regular offers on chronic-care essentials and everyday health products." },
  { title: "24/7 Customer Support", text: "A dedicated helpline and chat team ready to help with orders, prescriptions, and general health queries." },
];

export const CATEGORIES = [
  { title: "Prescription Medicines", count: "980+", path: "photo-1587854692152-cbe660dbde88", seed: "rx-meds" },
  { title: "OTC & Wellness", count: "612+", path: "photo-1471864190281-a93a3070b6de", seed: "otc" },
  { title: "Vitamins & Supplements", count: "248+", path: "photo-1584017911766-d451b3d0e843", seed: "vitamins" },
  { title: "Personal Care", count: "186+", path: "photo-1556228720-195a672e8a03", seed: "personalcare" },
  { title: "Diabetes Care", count: "157+", path: "photo-1576091160550-2173dba999ef", seed: "diabetes" },
  { title: "Baby & Mother Care", count: "142+", path: "photo-1522771930-78848d9293e8", seed: "babycare" },
  { title: "Ayurveda & Herbal", count: "205+", path: "photo-1611072965169-8b374bb31da5", seed: "ayurveda" },
  { title: "Surgical & First Aid", count: "215+", path: "photo-1603398938378-e54eab446dde", seed: "healthessentials" },
];

export const PRODUCTS = [
  { title: "Vitamins & Supplements", count: "248+ Products", price: "From ₹99", path: "photo-1584017911766-d451b3d0e843", seed: "vitamins2" },
  { title: "Personal Care", count: "186+ Products", price: "From ₹75", path: "photo-1556228720-195a672e8a03", seed: "personalcare2" },
  { title: "Diabetes Care", count: "157+ Products", price: "From ₹149", path: "photo-1576091160550-2173dba999ef", seed: "diabetes2" },
  { title: "Baby Care", count: "142+ Products", price: "From ₹120", path: "photo-1522771930-78848d9293e8", seed: "babycare2" },
  { title: "Health Essentials", count: "215+ Products", price: "From ₹49", path: "photo-1603398938378-e54eab446dde", seed: "healthessentials2" },
];

export const MEDICINES = [
  { name: "Paracetamol 500mg", brand: "MediSun", category: "Pain Relief", price: 25, mrp: 35, path: "photo-1584308666744-24d5c474f2ae", seed: "med-1" },
  { name: "Vitamin C Effervescent", brand: "Vitalix", category: "Vitamins", price: 180, mrp: 220, path: "photo-1584017911766-d451b3d0e843", seed: "med-2" },
  { name: "Glucometer Strips (50)", brand: "Curalife", category: "Diabetes Care", price: 620, mrp: 700, path: "photo-1576091160550-2173dba999ef", seed: "med-3" },
  { name: "Baby Diaper Rash Cream", brand: "Trucare", category: "Baby Care", price: 145, mrp: 170, path: "photo-1522771930-78848d9293e8", seed: "med-4" },
  { name: "Antiseptic Liquid 500ml", brand: "Ambronix", category: "First Aid", price: 95, mrp: 120, path: "photo-1603398938378-e54eab446dde", seed: "med-5" },
  { name: "Multivitamin Capsules", brand: "Vitalix", category: "Vitamins", price: 340, mrp: 399, path: "photo-1550572017-edd951b55104", seed: "med-6" },
  { name: "Moisturizing Body Lotion", brand: "Herbica", category: "Personal Care", price: 210, mrp: 250, path: "photo-1556228720-195a672e8a03", seed: "med-7" },
  { name: "Blood Pressure Monitor", brand: "Curalife", category: "Health Devices", price: 1450, mrp: 1699, path: "photo-1576671081837-49000212a370", seed: "med-8" },
  { name: "Ayurvedic Immunity Syrup", brand: "Zenpharma", category: "Ayurveda", price: 260, mrp: 300, path: "photo-1611072965169-8b374bb31da5", seed: "med-9" },
  { name: "N95 Face Masks (10 pk)", brand: "Trucare", category: "First Aid", price: 199, mrp: 249, path: "photo-1584634731339-252c581abfc5", seed: "med-10" },
  { name: "Cough Syrup 100ml", brand: "MediSun", category: "Pain Relief", price: 85, mrp: 100, path: "photo-1471864190281-a93a3070b6de", seed: "med-11" },
  { name: "Protein Powder 1kg", brand: "Vitalix", category: "Vitamins", price: 1290, mrp: 1499, path: "photo-1517423440428-a5a00ad493e8", seed: "med-12" },
];

export const MEDICINE_CATEGORIES = ["All", "Pain Relief", "Vitamins", "Diabetes Care", "Baby Care", "First Aid", "Personal Care", "Health Devices", "Ayurveda"];

export const SERVICES = [
  { title: "Prescription Medicines", text: "Upload your prescription and we'll verify, prepare, and deliver it — no repeat pharmacy visits.", },
  { title: "OTC Medicines", text: "Everyday over-the-counter essentials for colds, allergies, pain relief, and minor ailments." },
  { title: "Home Delivery", text: "Same-day and next-day delivery across the city, with cold-chain handling for sensitive medicines." },
  { title: "Health Check-up Support", text: "Book routine health screenings and diagnostic packages through our partner labs." },
  { title: "Online Consultation", text: "Connect with registered pharmacists and doctors for quick guidance before you order." },
  { title: "Chronic Care Refills", text: "Auto-refill reminders and subscription plans for long-term medication so you never run out." },
  { title: "Lab Sample Pickup", text: "Free at-home sample collection for common blood tests, arranged around your schedule." },
  { title: "Corporate Health Plans", text: "Bulk healthcare supply and wellness packages tailored for offices and institutions." },
];

export const BRANDS = [
  "MediSun", "Curalife", "Dr. Vellore", "Ambronix", "Zenpharma", "Trucare", "Vitalix", "Herbica",
  "Purolife", "Nirogya", "CareWell", "BioAxis", "Vedanta Herbs", "Sanjivani", "PharmaTrust", "Wellora",
];

export const BRANCHES = [
  { city: "Chennai — Anna Nagar", address: "12 Anna Salai, Anna Nagar West", phone: "+91 98765 43210" },
  { city: "Coimbatore — RS Puram", address: "45 DB Road, RS Puram", phone: "+91 98765 43211" },
  { city: "Madurai — KK Nagar", address: "8 Bypass Road, KK Nagar", phone: "+91 98765 43212" },
  { city: "Trichy — Cantonment", address: "22 Bharathiar Salai, Cantonment", phone: "+91 98765 43213" },
  { city: "Salem — Fairlands", address: "5 Junction Main Road, Fairlands", phone: "+91 98765 43214" },
  { city: "Erode — Perundurai Road", address: "17 Perundurai Road", phone: "+91 98765 43215" },
  { city: "Vellore — Gandhi Nagar", address: "9 Katpadi Road, Gandhi Nagar", phone: "+91 98765 43216" },
  { city: "Tirunelveli — Palayamkottai", address: "31 South Bypass, Palayamkottai", phone: "+91 98765 43217" },
];

export const TESTIMONIALS = [
  { name: "Priya Ramesh", role: "Regular Customer, Chennai", quote: "Arasu Medical has been our family pharmacy for years. Orders arrive fast and the pharmacists always take time to explain dosage.", rating: 5, seed: "t1" },
  { name: "Karthik Subramaniam", role: "Diabetes Care Patient", quote: "Their chronic care refill reminders have genuinely helped me stay consistent with my medication for the first time.", rating: 5, seed: "t2" },
  { name: "Fathima Begum", role: "New Mother", quote: "I needed baby care products urgently at night and their home delivery team came through within the hour.", rating: 4, seed: "t3" },
  { name: "Arun Prakash", role: "Corporate Client", quote: "We switched our office wellness supply to Arasu Medical — reliable billing and always in stock.", rating: 5, seed: "t4" },
  { name: "Deepa Lakshmi", role: "Senior Citizen", quote: "The staff are patient and kind, and always help me understand generic alternatives that save money.", rating: 5, seed: "t5" },
  { name: "Suresh Kumar", role: "Regular Customer, Madurai", quote: "Clean stores, genuine products, and a loyalty program that actually gives useful discounts.", rating: 4, seed: "t6" },
];

export const FAQS = [
  { q: "Do I need to upload a prescription for every order?", a: "Prescriptions are required only for scheduled/prescription-only medicines. OTC products, vitamins, and personal care items can be ordered without one." },
  { q: "How fast is delivery?", a: "Most orders within city limits arrive same-day if placed before 4 PM. Other locations typically receive orders within 24–48 hours." },
  { q: "Can I return a medicine if I ordered the wrong one?", a: "Yes, unopened and unexpired medicines in original packaging can be returned within 7 days. Certain temperature-sensitive items are non-returnable for safety reasons." },
  { q: "Do you offer discounts on chronic/long-term medication?", a: "Yes — our Chronic Care Refill plan offers subscription pricing and reminders so you never miss a dose." },
  { q: "Is online consultation with a pharmacist free?", a: "Basic guidance from our in-house pharmacists is free. Consultations with partner doctors may carry a nominal fee shown before booking." },
  { q: "Which areas do you currently deliver to?", a: "We currently deliver across all 8 branch cities and surrounding areas. Enter your pincode at checkout to confirm coverage." },
  { q: "Are your medicines sourced from authorized distributors?", a: "Yes, every product is sourced directly from licensed manufacturers and authorized distributors, with batch verification at every branch." },
  { q: "Can businesses set up a corporate healthcare account?", a: "Yes, our Corporate Health Plans team can set up bulk ordering, consolidated billing, and wellness packages for your organization." },
];
