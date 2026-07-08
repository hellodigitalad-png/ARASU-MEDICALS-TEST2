import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Statistics from "../components/Statistics/Statistics.jsx";
import About from "../components/About/About.jsx";
import Categories from "../components/Categories/Categories.jsx";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts.jsx";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs.jsx";
import Services from "../components/Services/Services.jsx";
 import Brands from "../components/Brands/Brands.jsx";
import Branches from "../components/Branches/Branches.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import Contact from "../components/Contact/Contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Services />
       <Brands /> 
      <Branches />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
