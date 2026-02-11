import React from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/section/home/Hero";
import TrustedBy from "../components/section/home/TrustedBy";
import PortfolioScroll from "../components/section/home/PortfolioScroll";
import Features from "../components/section/home/Features";
import Criteria from "../components/shared/Criteria";
import Pricing from "../components/section/home/Pricing";
import WhyChooseUs from "../components/section/home/WhyChooseUs";
import WebsiteProcess from "../components/shared/WebProcess";
import AdditionalServices from "../components/shared/AddtionalService";
import FAQ from "../components/shared/FAQ";
import Footer from "../components/layout/Footer";
import GoogleTranslateWidget from "../components/layout/GoogleTranslateWidget";

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
