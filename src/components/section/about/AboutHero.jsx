import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FotoPndeveloper from "../../assets/me-image.png";

const AboutHero = () => {
  // Animasi
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-linear-to-b from-[#000000] to-[#17248D] font-sans border-b rounded-b-3xl border-white/10 shadow-2xl shadow-blue-900/20">
      <motion.div
        className="container mx-auto h-full px-6 pt-24 pb-10 lg:pt-20 lg:pb-0 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* GRID SYSTEM:
          - Mobile & Tablet (md): 1 Kolom (Stacked)
          - Laptop (lg): 12 Kolom (Side by Side)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center gap-8 lg:gap-0">
          {/* 1. Left Column: Headline */}
          <motion.div
            className="lg:col-span-3 flex flex-col justify-center order-1 relative z-20 text-center lg:text-left"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold font-heading leading-tight text-white tracking-tight">
              Empowering <br />
              Creativity <br />
              Everywhere
            </h1>
          </motion.div>

          {/* 2. Center Column: Image */}
          <motion.div
            className="lg:col-span-6 h-auto lg:h-full flex items-end justify-center relative order-2"
            variants={fadeInUp}
          >
            <img
              src={FotoPndeveloper}
              alt="Profile"
              // Mobile/Tablet: Tinggi 50vh, Laptop: Tinggi 75vh
              className="h-[50vh] md:h-[60vh] lg:h-[75vh] w-auto object-cover object-top drop-shadow-2xl mask-image-gradient"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </motion.div>

          {/* 3. Right Column: Description & Button */}
          <motion.div
            className="lg:col-span-3 flex flex-col justify-center items-center lg:items-start gap-6 relative z-20 mt-0 order-3 text-center lg:text-left"
            variants={fadeInUp}
          >
            <p className="text-white text-sm md:text-lg md:pb-24 lg:text-base leading-relaxed max-w-md lg:max-w-xs font-text">
              Professional website creation services to showcase your portfolio,
              share your work, and reach clients globally.
            </p>
            {/* <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium w-fit hover:bg-gray-800 transition shadow-lg transform hover:-translate-y-1">
              Explore Opportunities
            </button> */}
          </motion.div>
        </div>
      </motion.div>

      {/* --- Big Bottom Text (Overlay) --- */}
      <motion.div
        className="absolute bottom-0 left-0 w-full z-30 pointer-events-none select-none overflow-hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-[18vw] leading-[0.8] font-bold font-heading text-white text-center tracking-tighter w-full">
          About Me
        </h2>
      </motion.div>
    </section>
  );
};

export default AboutHero;
