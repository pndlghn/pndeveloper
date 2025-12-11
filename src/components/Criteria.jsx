import React from "react";
import { Search, Smartphone, Layout, Palette } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Criteria = () => {
  // Data Kriteria
  const criteriaList = [
    {
      icon: <Search size={32} className="text-blue-500" />,
      title: "SEO yang Teroptimasi",
      desc: "Memastikan bisnis Anda mudah ditemukan di Google. Website tanpa SEO bagaikan toko di hutan belantara.",
    },
    {
      icon: <Smartphone size={32} className="text-green-500" />,
      title: "Cepat dan Responsif",
      desc: "Loading ngebut dan tampilan sempurna di semua perangkat. Pengunjung akan kabur jika website lambat.",
    },
    {
      icon: <Layout size={32} className="text-purple-500" />,
      title: "Struktur & Navigasi",
      desc: "Susunan menu yang logis memudahkan pengunjung menemukan apa yang mereka cari tanpa bingung.",
    },
    {
      icon: <Palette size={32} className="text-pink-500" />,
      title: "Visual Kekinian",
      desc: "Desain UI/UX modern yang memanjakan mata, membangun kepercayaan instan, dan terlihat profesional.",
    },
  ];

  // Konfigurasi Animasi Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Muncul satu per satu
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    // Responsive Padding: py-16 di Mobile, py-24 di Tablet/Desktop
    <section className="py-16 md:py-24 bg-black relative overflow-hidden font-sans">
      {/* Background Glow Halus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-900/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Responsive Heading Font Size */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
            Website Anda Perlu Memiliki <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
              Kriteria Berikut
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg px-2">
            Agar efektif menarik dan mempertahankan pengunjung, website tidak
            boleh dibuat asal-asalan. Ini standarnya:
          </p>
        </motion.div>

        {/* GRID KARTU KRITERIA */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {criteriaList.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // Responsive Card Padding: p-6 di Mobile, p-8 di Desktop
              className="group bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 md:p-8 text-center hover:bg-[#151515] hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-black border border-white/5 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Criteria;
