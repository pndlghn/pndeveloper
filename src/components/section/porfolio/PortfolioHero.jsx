import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";

// Image
import projectImage1 from "../../../assets/portfolio-1.webp";
import projectImage2 from "../../../assets/portfolio-2.webp";

const PortfolioHero = () => {
  // Animasi Variabel
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="relative w-full min-h-[90vh] bg-black text-white overflow-hidden flex items-center py-20 lg:py-32 border-b border-white/10">
      {/* Background Glow Effect (Opsional, biar tidak terlalu mati hitamnya) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 h-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
          {/* --- BAGIAN KIRI: TEXT CONTENT --- */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            {/* Tagline Kecil */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="p-2 bg-blue-600/20 rounded-lg text-blue-400">
                <Layers size={20} />
              </span>
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">
                My Masterpiece
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Curated <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600">
                Design Works
              </span>
            </h1>

            {/* Description (Copywriting disesuaikan) */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-text">
              Di sini Anda akan menemukan seleksi proyek yang telah saya
              kerjakan dengan dedikasi tinggi. Bagi saya, website bukan sekadar
              tampilan visual, tetapi solusi digital yang menggabungkan performa
              teknis yang solid, fungsionalitas yang mulus, dan tujuan bisnis
              klien.
            </p>
          </motion.div>

          {/* --- BAGIAN KANAN: IMAGE COMPOSITION (Seperti Gambar) --- */}
          <motion.div
            className="lg:col-span-7 relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            {/* IMAGE 1 (Belakang - Kiri Atas) 
              Rotasi: -6deg, Opacity agak turun biar kesan depth
            */}
            <motion.div
              className="absolute top-10 left-4 md:left-10 w-[75%] md:w-[65%] z-10 shadow-2xl shadow-blue-900/20 rounded-2xl border border-white/10 overflow-hidden bg-[#1a1a1a]"
              initial={{ rotate: 0, y: 50, opacity: 0 }}
              whileInView={{ rotate: -6, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Browser Bar Mockup */}
              <div className="h-6 md:h-8 bg-black/50 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              </div>
              <img
                src={projectImage2}
                alt="Project 1"
                className="w-full h-auto object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>

            {/* IMAGE 2 (Depan - Kanan Bawah - Utama) 
              Rotasi: 3deg, Shadow tebal, Z-index tinggi
            */}
            <motion.div
              className="absolute bottom-10 right-4 md:right-10 w-[80%] md:w-[70%] z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl border border-white/20 overflow-hidden bg-[#1a1a1a]"
              initial={{ rotate: 0, y: 100, opacity: 0 }}
              whileInView={{ rotate: 6, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{
                scale: 1.02,
                rotate: 3,
                transition: { duration: 0.3 },
              }} // Interaksi hover
            >
              {/* Browser Bar Mockup */}
              <div className="h-6 md:h-8 bg-[#1a1a1a] border-b border-white/10 flex items-center px-4 gap-2 justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-black/40 px-3 py-1 rounded-full text-[8px] text-gray-500 font-mono">
                  lobbyamrketpicnic.com
                </div>
              </div>
              <img
                src={projectImage1}
                alt="Project 2"
                className="w-full h-auto object-cover"
              />

              {/* Overlay Gradient on Image (Biar teks putih diatasnya terbaca kalau ada) */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg">
                  E-Commerce Dashboard
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
