import React from "react";
import PortfolioHero from "../components/section/porfolio/PortfolioHero";
import PortfolioGallery from "../components/section/porfolio/PortfolioGallery";

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
