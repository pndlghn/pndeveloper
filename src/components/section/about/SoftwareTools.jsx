import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import WordpressLogo from "../assets/wordpress.png";
import ElementorLogo from "../assets/elementor.png";
import GoogleAnalyticsLogo from "../assets/google-analytics.png";

const SoftwareTools = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    // RESPONSIVE PADDING:
    // py-16 (Mobile) -> md:py-24 (Tablet) -> lg:pt-40 (Desktop)
    // Ini mencegah jarak terlalu jauh di Tablet (iPad)
    <section className="bg-black text-white py-16 md:py-24 lg:pt-40 lg:pb-20 px-6 border-t border-white/5">
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* --- BAGIAN KIRI: HEADLINE --- */}
          <motion.div className="md:col-span-4" variants={fadeInUp}>
            <h3 className="text-blue-500 font-bold tracking-widest uppercase mb-2 text-xs md:text-sm lg:text-base">
              What do I use?
            </h3>
            {/* Typography Responsif: 4xl (HP) -> 5xl (Tablet) -> 6xl (Laptop) */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white">
              Software
            </h2>
          </motion.div>

          {/* --- BAGIAN KANAN: DESKRIPSI & LOGO --- */}
          <motion.div
            className="md:col-span-8 flex flex-col gap-8 md:gap-10"
            variants={fadeInUp}
          >
            {/* Copywriting */}
            <p className="text-gray-400 text-base md:text-lg leading-loose font-text max-w-2xl">
              I like to use the latest software for my projects, so I know there
              is nothing better to use for my clients. These are the platforms
              that I use on a regular basis.
            </p>

            {/* Logo Grid */}
            {/* Gap: gap-6 (Mobile) -> gap-8 (Tablet) -> gap-12 (Desktop) */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 lg:gap-12 mt-2">
              {/* WordPress */}
              <div className="group flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer">
                <img
                  src={WordpressLogo}
                  alt="WordPress"
                  // Ukuran gambar: h-14 (Mobile) -> h-16 (Tablet) -> h-20 (Desktop)
                  className="h-14 md:h-16 lg:h-20 w-auto object-contain"
                />
              </div>

              {/* Elementor */}
              <div className="group flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer">
                <img
                  src={ElementorLogo}
                  alt="Elementor"
                  className="h-6 md:h-7 lg:h-8 w-auto"
                />
                {/* Font Size: lg (Mobile) -> xl (Tablet/Desktop) */}
                <span className="text-lg md:text-xl font-bold font-heading">
                  elementor
                </span>
              </div>

              {/* Figma */}
              <div className="group flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                  alt="Figma"
                  className="h-6 md:h-7 lg:h-8 w-auto"
                />
                <span className="text-lg md:text-xl font-bold font-heading">
                  Figma
                </span>
              </div>

              {/* Google Analytics */}
              <div className="group flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer">
                <img
                  src={GoogleAnalyticsLogo}
                  alt="Analytics"
                  className="h-6 md:h-7 lg:h-8 w-auto"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-base md:text-lg font-bold font-heading text-gray-200">
                    Google
                  </span>
                  <span className="text-base md:text-lg font-medium font-heading text-gray-400">
                    Analytics
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SoftwareTools;
