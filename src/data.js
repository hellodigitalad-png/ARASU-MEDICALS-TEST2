// src/data.js
// Local image imports — replaces the old LoremFlickr/Picsum URL fetching.

// ---------- Vitamin ----------
import vitB12 from "../src/components/asset/Medicens/Vitamin/B12.png";
import vitC from "../src/components/asset/Medicens/Vitamin/C.jpg";
import vitD3 from "../src/components/asset/Medicens/Vitamin/D3.jpg";
import vitE from "../src/components/asset/Medicens/Vitamin/E.jpg";

// ---------- Diabetes Care ----------
import diaReltimeTo from "../src/components/asset/Medicens/Diabetes Care/ReltimeTo.jpg";
import diaGlycomet from "../src/components/asset/Medicens/Diabetes Care/Glycomet.jpg";
import diaJanumet from "../src/components/asset/Medicens/Diabetes Care/Janumet.jpg";
import diaInsulin from "../src/components/asset/Medicens/Diabetes Care/Insulin.jpg";
import diaStrips from "../src/components/asset/Medicens/Diabetes Care/Glucometer Strips.jpg";
import diaLancets from "../src/components/asset/Medicens/Diabetes Care/Lancets.jpg";
import diaNutrition from "../src/components/asset/Medicens/Diabetes Care/Diabetic Nutrition.webp";

// ---------- Baby Care ----------
import babyDiapers from "../src/components/asset/Medicens/Baby Care/Diapers.jpg";
import babyRashCream from "../src/components/asset/Medicens/Baby Care/Rash Cream.jpg";
import babyLotion from "../src/components/asset/Medicens/Baby Care/Baby Lotion.jpg";
import babySoap from "../src/components/asset/Medicens/Baby Care/Baby Soap.jpg";
import babyShampoo from "../src/components/asset/Medicens/Baby Care/Baby Shampoo.jpg";
import babyPowder from "../src/components/asset/Medicens/Baby Care/Baby Powder.jpg";
import babyOil from "../src/components/asset/Medicens/Baby Care/Baby Oil.jpg";
import babyWipes from "../src/components/asset/Medicens/Baby Care/Baby Wipes.jpg";
import babyBottle from "../src/components/asset/Medicens/Baby Care/Feeding Bottles.jpg";
import babyNutrition from "../src/components/asset/Medicens/Baby Care/Nutrition Powder.jpg";

// ---------- First Aid ----------
import faAntisepticCream from "../src/components/asset/Medicens/First Aid/Antiseptic Cream.jpg";
import faAntisepticLiquid from "../src/components/asset/Medicens/First Aid/Antiseptic Liquid.jpg";
import faBandage from "../src/components/asset/Medicens/First Aid/Bandage.jpg";
import faCotton from "../src/components/asset/Medicens/First Aid/Cotton.jpg";
import faMicropore from "../src/components/asset/Medicens/First Aid/Micropore Tape.webp";
import faGauze from "../src/components/asset/Medicens/First Aid/Gauze.webp";
import faOrs from "../src/components/asset/Medicens/First Aid/ORS.jpg";
import faSanitizer from "../src/components/asset/Medicens/First Aid/Hand Sanitizer.avif";

// ---------- Health Devices ----------
import deviceBpMonitor from "../src/components/asset/Medicens/Health Devices/BP Monitor.jpg";
import deviceSugarKit from "../src/components/asset/Medicens/Health Devices/Sugar Testing Kit.jpg";
import deviceThermometer from "../src/components/asset/Medicens/Health Devices/Thermometer.jpg";
import deviceOximeter from "../src/components/asset/Medicens/Health Devices/Pulse Oximeter.jpg";
import deviceNebulizer from "../src/components/asset/Medicens/Health Devices/Nebulizer.jpg";
import deviceInhaler from "../src/components/asset/Medicens/Health Devices/Steam Inhaler.jpg";

// ---------- Personal Care ----------
import pcToothpaste from "../src/components/asset/Medicens/Personal Care/Toothpaste.jpg";
import pcToothbrush from "../src/components/asset/Medicens/Personal Care/Toothbrush.jpg";
import pcMouthwash from "../src/components/asset/Medicens/Personal Care/Mouthwash.jpg";
import pcFaceWash from "../src/components/asset/Medicens/Personal Care/Face Wash.jpg";
import pcBodyWash from "../src/components/asset/Medicens/Personal Care/Body Wash.jpg";
import pcConditioner from "../src/components/asset/Medicens/Personal Care/Conditioner.jpg";
import pcMoisturizer from "../src/components/asset/Medicens/Personal Care/Moisturizer.jpg";
import pcSunscreen from "../src/components/asset/Medicens/Personal Care/Sunscreen.jpg";

// ---------- Veterinary ----------
import vetDog from "../src/components/asset/Medicens/Veterinary/dog and cat care food.jpg";
import vetCat from "../src/components/asset/Medicens/Veterinary/Cat Care & Food.jpg";
import vetCow from "../src/components/asset/Medicens/Veterinary/Cow Care.jpg";
import vetGoat from "../src/components/asset/Medicens/Veterinary/Goat Care.jpg";
import vetBird from "../src/components/asset/Medicens/Veterinary/Bird Care.webp";
import vetVaccine from "../src/components/asset/Medicens/Veterinary/Veterinary Vaccines.jpg";

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Medicines", to: "/medicines" },
  { label: "Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
];

export const STATS = [
  { key: "medicines", num: 2458, suffix: "+", label: "Total Medicines" },
  { key: "products", num: 1326, suffix: "+", label: "Health Products" },
  { key: "customers", num: 15200, suffix: "+", label: "Happy Customers" },
  { key: "branches", num: 4, suffix: "", label: "Branches" },
  { key: "years", num: 27, suffix: "+", label: "Years of Trust" },
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
  { title: "Prescription Medicines", count: "980+", image: diaJanumet },
  { title: "OTC & Wellness", count: "612+", image: faAntisepticCream },
  { title: "Vitamins & Supplements", count: "248+", image: vitB12 },
  { title: "Personal Care", count: "186+", image: pcFaceWash },
  { title: "Diabetes Care", count: "157+", image: deviceSugarKit },
  { title: "Baby & Mother Care", count: "142+", image: babyLotion },
  { title: "Surgical & First Aid", count: "215+", image: faBandage },
];

export const PRODUCTS = [
  { title: "Vitamins & Supplements", count: "248+ Products", price: "From ₹99", image: vitD3 },
  { title: "Personal Care", count: "186+ Products", price: "From ₹75", image: pcBodyWash },
  { title: "Diabetes Care", count: "157+ Products", price: "From ₹149", image: diaGlycomet },
  { title: "Baby Care", count: "142+ Products", price: "From ₹120", image: babyPowder },
  { title: "Health Essentials", count: "215+ Products", price: "From ₹49", image: faGauze },
];

export const MEDICINE_CATEGORIES = [
  "All", "Vitamins", "Diabetes Care", "Baby Care", "First Aid / OTC", "Health Devices", "Personal Care", "Veterinary",
];

export const MEDICINES = [
  // ---------------- Vitamins ----------------
  { name: "Vitamin B12 Tablets", category: "Vitamins", price: 145, mrp: 180, image: vitB12 },
  { name: "Vitamin D3 Tablets", category: "Vitamins", price: 210, mrp: 250, image: vitD3 },
  { name: "Vitamin C Tablets", category: "Vitamins", price: 180, mrp: 220, image: vitC },
  { name: "Vitamin E Capsules", category: "Vitamins", price: 165, mrp: 199, image: vitE },

  // ---------------- Diabetes Care ----------------
  { name: "ReltimeTo Tablets", category: "Diabetes Care", price: 130, mrp: 155, image: diaReltimeTo },
  { name: "Glycomet Tablets", category: "Diabetes Care", price: 45, mrp: 60, image: diaGlycomet },
  { name: "Janumet Tablets", category: "Diabetes Care", price: 385, mrp: 450, image: diaJanumet },
  { name: "Insulin Injection", category: "Diabetes Care", price: 285, mrp: 330, image: diaInsulin },
  { name: "Glucometer Strips", category: "Diabetes Care", price: 620, mrp: 700, image: diaStrips },
  { name: "Lancets", category: "Diabetes Care", price: 210, mrp: 250, image: diaLancets },
  { name: "Diabetic Nutrition Powder", category: "Diabetes Care", price: 580, mrp: 650, image: diaNutrition },

  // ---------------- Baby Care ----------------
  { name: "Diapers", category: "Baby Care", price: 899, mrp: 999, image: babyDiapers },
  { name: "Rash Cream", category: "Baby Care", price: 165, mrp: 195, image: babyRashCream },
  { name: "Baby Lotion", category: "Baby Care", price: 210, mrp: 249, image: babyLotion },
  { name: "Baby Soap", category: "Baby Care", price: 145, mrp: 175, image: babySoap },
  { name: "Baby Shampoo", category: "Baby Care", price: 235, mrp: 270, image: babyShampoo },
  { name: "Baby Powder", category: "Baby Care", price: 185, mrp: 215, image: babyPowder },
  { name: "Baby Oil", category: "Baby Care", price: 199, mrp: 230, image: babyOil },
  { name: "Baby Wipes", category: "Baby Care", price: 220, mrp: 260, image: babyWipes },
  { name: "Feeding Bottle", category: "Baby Care", price: 340, mrp: 399, image: babyBottle },
  { name: "Nutrition Powder", category: "Baby Care", price: 450, mrp: 520, image: babyNutrition },

  // ---------------- First Aid / OTC ----------------
  { name: "Antiseptic Cream", category: "First Aid / OTC", price: 65, mrp: 80, image: faAntisepticCream },
  { name: "Antiseptic Liquid", category: "First Aid / OTC", price: 95, mrp: 120, image: faAntisepticLiquid },
  { name: "Bandage", category: "First Aid / OTC", price: 90, mrp: 110, image: faBandage },
  { name: "Cotton", category: "First Aid / OTC", price: 55, mrp: 70, image: faCotton },
  { name: "Micropore Tape", category: "First Aid / OTC", price: 45, mrp: 60, image: faMicropore },
  { name: "Gauze", category: "First Aid / OTC", price: 40, mrp: 55, image: faGauze },
  { name: "ORS", category: "First Aid / OTC", price: 25, mrp: 35, image: faOrs },
  { name: "Hand Sanitizer", category: "First Aid / OTC", price: 165, mrp: 195, image: faSanitizer },

  // ---------------- Health Devices ----------------
  { name: "BP Monitor", category: "Health Devices", price: 1450, mrp: 1699, image: deviceBpMonitor },
  { name: "Sugar Testing Kit", category: "Health Devices", price: 1250, mrp: 1450, image: deviceSugarKit },
  { name: "Thermometer", category: "Health Devices", price: 250, mrp: 300, image: deviceThermometer },
  { name: "Pulse Oximeter", category: "Health Devices", price: 1150, mrp: 1350, image: deviceOximeter },
  { name: "Nebulizer", category: "Health Devices", price: 1650, mrp: 1899, image: deviceNebulizer },
  { name: "Steam Inhaler", category: "Health Devices", price: 750, mrp: 900, image: deviceInhaler },

  // ---------------- Personal Care ----------------
  { name: "Toothpaste", category: "Personal Care", price: 95, mrp: 115, image: pcToothpaste },
  { name: "Toothbrush", category: "Personal Care", price: 65, mrp: 80, image: pcToothbrush },
  { name: "Mouthwash", category: "Personal Care", price: 175, mrp: 210, image: pcMouthwash },
  { name: "Face Wash", category: "Personal Care", price: 145, mrp: 170, image: pcFaceWash },
  { name: "Body Wash", category: "Personal Care", price: 220, mrp: 260, image: pcBodyWash },
  { name: "Conditioner", category: "Personal Care", price: 190, mrp: 225, image: pcConditioner },
  { name: "Moisturizer", category: "Personal Care", price: 210, mrp: 250, image: pcMoisturizer },
  { name: "Sunscreen", category: "Personal Care", price: 285, mrp: 330, image: pcSunscreen },

  // ---------------- Veterinary ----------------
  { name: "Dog Care & Food", category: "Veterinary", price: 950, mrp: 1100, image: vetDog },
  { name: "Cat Care & Food", category: "Veterinary", price: 620, mrp: 720, image: vetCat },
  { name: "Cow Care", category: "Veterinary", price: 680, mrp: 780, image: vetCow },
  { name: "Goat Care", category: "Veterinary", price: 540, mrp: 620, image: vetGoat },
  { name: "Bird Care", category: "Veterinary", price: 220, mrp: 260, image: vetBird },
  { name: "Veterinary Vaccines", category: "Veterinary", price: 450, mrp: 520, image: vetVaccine },
];

export const SERVICES = [
  { title: "Prescription Medicines", text: "Upload your prescription and we'll verify, prepare, and deliver it — no repeat pharmacy visits." },
  { title: "OTC Medicines", text: "Everyday over-the-counter essentials for colds, allergies, pain relief, and minor ailments." },
  { title: "Home Delivery", text: "Same-day and next-day delivery across the city, with cold-chain handling for sensitive medicines." },
  { title: "Health Check-up Support", text: "Book routine health screenings and diagnostic packages through our partner labs." },
  { title: "Online Consultation", text: "Connect with registered pharmacists and doctors for quick guidance before you order." },
  { title: "Chronic Care Refills", text: "Auto-refill reminders and subscription plans for long-term medication so you never run out." },
  { title: "Lab Sample Pickup", text: "Free at-home sample collection for common blood tests, arranged around your schedule." },
  { title: "Corporate Health Plans", text: "Bulk healthcare supply and wellness packages tailored for offices and institutions." },
];

export const TESTIMONIALS = [
  { name: "Priya Ramesh", role: "Regular Customer, Chennai", quote: "Arasu Medical has been our family pharmacy for years. Orders arrive fast and the pharmacists always take time to explain dosage.", rating: 5 },
  { name: "Karthik Subramaniam", role: "Diabetes Care Patient", quote: "Their chronic care refill reminders have genuinely helped me stay consistent with my medication for the first time.", rating: 5 },
  { name: "Fathima Begum", role: "New Mother", quote: "I needed baby care products urgently at night and their home delivery team came through within the hour.", rating: 4 },
  { name: "Arun Prakash", role: "Corporate Client", quote: "We switched our office wellness supply to Arasu Medical — reliable billing and always in stock.", rating: 5 },
  { name: "Deepa Lakshmi", role: "Senior Citizen", quote: "The staff are patient and kind, and always help me understand generic alternatives that save money.", rating: 5 },
  { name: "Suresh Kumar", role: "Regular Customer, Madurai", quote: "Clean stores, genuine products, and a loyalty program that actually gives useful discounts.", rating: 4 },
];

export const FAQS = [
  { q: "Do I need to upload a prescription for every order?", a: "Prescriptions are required only for scheduled/prescription-only medicines. OTC products, vitamins, and personal care items can be ordered without one." },
  { q: "How fast is delivery?", a: "Most orders within city limits arrive same-day if placed before 4 PM. Other locations typically receive orders within 24–48 hours." },
  { q: "Can I return a medicine if I ordered the wrong one?", a: "Yes, unopened and unexpired medicines in original packaging can be returned within 7 days. Certain temperature-sensitive items are non-returnable for safety reasons." },
  { q: "Do you offer discounts on chronic/long-term medication?", a: "Yes — our Chronic Care Refill plan offers subscription pricing and reminders so you never miss a dose." },
  { q: "Is online consultation with a pharmacist free?", a: "Basic guidance from our in-house pharmacists is free. Consultations with partner doctors may carry a nominal fee shown before booking." },
  { q: "Which areas do you currently deliver to?", a: "We currently deliver across all 4 branch cities and surrounding areas. Enter your pincode at checkout to confirm coverage." },
  { q: "Are your medicines sourced from authorized distributors?", a: "Yes, every product is sourced directly from licensed manufacturers and authorized distributors, with batch verification at every branch." },
  { q: "Can businesses set up a corporate healthcare account?", a: "Yes, our Corporate Health Plans team can set up bulk ordering, consolidated billing, and wellness packages for your organization." },
];