import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Medicines from "./pages/Medicines.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import BrandsPage from "./pages/BrandsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}