import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

// Components
import PricingHero from "../components/PricingHero";
import PricingTabs from "../components/PricingTabs";
import PricingInfo from "../components/PricingInfo";
import PricingCard from "../components/PricingCard";

// Data
import { pricingContent } from "../data/pricingData";

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState("landing");

  // Mengambil data paket yang sedang aktif
  const currentData = pricingContent[activeTab];
  if (!currentData) {
    return (
      <div className="text-white text-center py-20">
        Loading data or Error...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30">
      {/* 1. Hero Section */}
      <PricingHero />

      {/* 2. Sticky Navigation Tabs */}
      <PricingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="container mx-auto px-6 max-w-7xl pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* 3. Info Section (Why & Benefits) */}
            <PricingInfo data={currentData} />

            {/* 4. Pricing Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {currentData.packages.map((pkg, index) => (
                <PricingCard key={index} pkg={pkg} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-4">Masih bingung menentukan paket?</p>
          <a
            href="https://wa.me/6285167148132?text=Halo%20Admin,%20saya%20ingin%20memesan%20paket%20website%20ini"
            target="_blank"
            rel="noopener noreferrer"
            // Tambahkan 'block text-center' agar teks berada di tengah tombol
            className="text-white underline underline-offset-4 hover:text-blue-400 transition"
          >
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
