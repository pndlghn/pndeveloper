import React from "react";
import AboutHero from "../components/AboutHero";
import AboutDetails from "../components/AboutDetails";
import Stats from "../components/Stats"; // Pastikan nama file Stats.jsx benar
import SoftwareTools from "../components/SoftwareTools";

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
