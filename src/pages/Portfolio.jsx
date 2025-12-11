import React from "react";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioGallery from "../components/PortfolioGallery";

const Portfolio = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section Portfolio */}
      <PortfolioHero />
      <PortfolioGallery />
      {/* (Nanti bisa ditambah list project grid dibawah ini) */}
    </div>
  );
};

export default Portfolio;
