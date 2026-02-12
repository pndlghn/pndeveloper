import React from "react";
import PortfolioHero from "../components/section/porfolio/PortfolioHero";
import PortfolioGallery from "../components/section/porfolio/PortfolioGallery";

import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const Portfolio = () => {
  useEffect(() => {
    // Mengirim Standard Event 'ViewContent' dengan parameter tambahan
    ReactPixel.track("ViewContent", {
      content_name: "Portfolio Page",
      content_category: "Work Samples",
    });

    // ATAU mengirim Custom Event (Nama bebas)
    ReactPixel.trackCustom("ViewPortfolio", {
      status: "User viewed portfolio list",
    });
  }, []);

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
