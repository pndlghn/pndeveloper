import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import PortfolioScroll from "../components/PortfolioScroll";
import Features from "../components/Features";
import Criteria from "../components/Criteria";
import Pricing from "../components/Pricing";
import WhyChooseUs from "../components/WhyChooseUs";
import WebsiteProcess from "../components/WebProcess";
import AdditionalServices from "../components/AddtionalService";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import GoogleTranslateWidget from "../components/GoogleTranslateWidget";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <GoogleTranslateWidget /> */}
      <Hero />
      <TrustedBy />
      <PortfolioScroll />
      <Features />
      <Criteria />
      <Pricing />
      <WhyChooseUs />
      <WebsiteProcess />
      <AdditionalServices />
      <FAQ />
    </div>
  );
}

export default App;
