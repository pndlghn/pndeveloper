import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

// import image
import PortfolioImage1 from "../../../assets/portfolio-1.webp";
import PortfolioImage2 from "../../../assets/portfolio-2.webp";

// --- DATA DUMMY PROYEK ---
const projects = [
  // 1. E-COMMERCE (Ada Data)
  {
    id: 1,
    title: "Toko Online Lobby Market Garut",
    category: "E-Commerce",
    image: PortfolioImage1,
    description:
      "Platform e-commerce modern dengan fitur keranjang belanja, pembayaran gateway, dan manajemen stok real-time.",
    tech: ["WordPress", "WooCommerce", "Payment Gateway"],
    link: "https://lobbymarketpicnic.com/",
  },
  // 2. COMPANY PROFILE (Ada Data)
  {
    id: 2,
    title: "Picnic Dodol Garut",
    category: "Company Profile",
    image: PortfolioImage2,
    description:
      "Website profil perusahaan profesional yang menampilkan porduk, form pengisian utnuk menjadi reseller, dan profil perusahaan.",
    tech: ["Wordpress", "Elementor"],
    link: "https://picnicdodolgarut.com/",
  },
  // 3. LANDING PAGE (KOSONG - Tidak ada data di array ini)
];

// --- KATEGORI TAB ---
const categories = ["All", "Landing Page", "Company Profile", "E-Commerce"];

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Logic Filter
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* --- TABS FILTER (BUTTONS) --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-transparent border-white/20 text-gray-400 hover:border-white hover:text-white"
              }`}
            >
              {category}
              {/* Indikator Titik Aktif (Opsional) */}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute -bottom-2 left-1/2 w-1 h-1 bg-blue-500 rounded-full"
                  style={{ x: "-50%" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* --- GALLERY GRID --- */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300 flex flex-col h-full"
                >
                  {/* Image Container dengan Efek Hover Zoom */}
                  <div className="relative h-60 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    {/* Badge Category */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-black/70 backdrop-blur-md text-xs font-semibold px-3 py-1 rounded-full border border-white/10 text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-text line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.tech.map((item, index) => (
                        <span
                          key={index}
                          className="text-[10px] uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <a
                      href={project.link}
                      className="mt-auto flex items-center justify-between w-full py-3 px-4 bg-white/5 rounded-xl hover:bg-blue-600 hover:text-white transition-all group/btn"
                    >
                      <span className="text-sm font-medium">Lihat Detail</span>
                      <ExternalLink
                        size={16}
                        className="transform group-hover/btn:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              // --- TAMPILAN JIKA KOSONG (Empty State) ---
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5"
              >
                <div className="mb-4 inline-flex p-4 rounded-full bg-white/5 text-gray-500">
                  <ArrowRight size={32} className="-rotate-45" />{" "}
                  {/* Ikon Panah/Design */}
                </div>
                <h3 className="text-xl font-bold text-gray-300 mb-2">
                  Belum Ada Proyek
                </h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Kategori{" "}
                  <span className="text-blue-400 font-semibold">
                    "{activeCategory}"
                  </span>{" "}
                  sedang dalam tahap kurasi atau pengembangan. Cek kembali
                  nanti!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
