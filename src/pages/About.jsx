import React from "react";
import AboutHero from "../components/section/about/AboutHero";
import AboutDetails from "../components/section/about/AboutDetails";
import Stats from "../components/ui/Stats"; // Pastikan nama file Stats.jsx benar
import SoftwareTools from "../components/section/about/SoftwareTools";

const About = () => {
  return (
    <div className="bg-black text-white pb-20">
      {/* 1. Hero Section (Intro & Gambar) */}
      <AboutHero />

      {/* 2. Details Section (About Text & Study) */}
      <AboutDetails />

      {/* 3. Statistics */}
      <Stats />

      {/* 4. Software Tools */}
      <SoftwareTools />
    </div>
  );
};

export default About;
