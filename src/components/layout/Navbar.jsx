import React, { useState } from "react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import logoImage from "../../assets/logo-pndev.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1,
      }}
      className="fixed top-6 left-1/2 z-50 
                   w-[95%] max-w-5xl 
                   bg-[#000000]/30 backdrop-blur-md
                   border border-white/20 
                   rounded-full 
                   shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                   px-6 py-3"
    >
      <div className="flex justify-between items-center h-14 md:h-16">
        {/* --- LOGO --- */}
        <div className="shrink-0 flex items-center cursor-pointer">
          <img
            src={logoImage}
            alt="logo-pndev"
            // Ukuran logo tetap proporsional (tidak terlalu besar agar tidak merusak navbar h-16)
            className="h-14 md:h-18 w-auto object-contain"
          />
        </div>

        {/* --- DESKTOP MENU (Hanya muncul di Laptop/lg ke atas) --- */}
        {/* Tablet (md) tetap disembunyikan agar memakai Hamburger Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          <a
            href="/"
            className="text-white hover:text-blue-600 font-light transition font-text"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:text-blue-600 font-light transition font-text"
          >
            Tentang
          </a>
          <a
            href="/portfolio"
            className="text-white hover:text-blue-600 font-light transition font-text"
          >
            Portofolio
          </a>
          <a
            href="/pricing"
            className="text-white hover:text-blue-600 font-light transition font-text"
          >
            Harga Website
          </a>

          <div className="flex items-center">
            <a href="/contact">
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5">
                Kontak Admin
              </button>
            </a>
          </div>

          <div className="flex items-center gap-4 border-l border-gray-500/50 pl-6 h-8">
            <a
              href="https://www.instagram.com/pndeveloper/"
              className="text-white hover:text-pink-600 transition hover:scale-110"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1F1rLUS1Fh/"
              className="text-white hover:text-blue-700 transition hover:scale-110"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* --- TOMBOL HAMBURGER (Muncul di Mobile & Tablet) --- */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-blue-600 focus:outline-none p-1"
          >
            {/* Ukuran Icon Tetap (28px) */}
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- DROPDOWN MENU (Mobile & Tablet) --- */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-in-out
          
          /* PENGATURAN LEBAR RESPONSIF */
          w-[95%]                /* Lebar dasar 95% layar */
          max-w-sm               /* Mobile: Dibatasi maksimal seukuran HP (small) */
          md:max-w-5xl           /* Tablet: Dibatasi maksimal 5xl (SAMA DENGAN NAVBAR) */
          
          ${
            isOpen
              ? "top-24 opacity-100 scale-100 visible"
              : "top-20 opacity-0 scale-95 invisible pointer-events-none"
          }`}
      >
        <div className="bg-[#1a1a1a] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5">
          {/* Menu Links */}
          <nav className="flex flex-col space-y-2">
            <a
              href="/"
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-xl text-base font-medium text-white hover:text-blue-400 hover:bg-white/5 transition-colors"
            >
              Beranda
            </a>
            <a
              href="/about"
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-xl text-base font-medium text-white hover:text-blue-400 hover:bg-white/5 transition-colors"
            >
              Tentang
            </a>
            <a
              href="/portfolio"
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-xl text-base font-medium text-white hover:text-blue-400 hover:bg-white/5 transition-colors"
            >
              Portofolio
            </a>
            <a
              href="/pricing"
              onClick={handleLinkClick}
              className="block px-4 py-3 rounded-xl text-base font-medium text-white hover:text-blue-400 hover:bg-white/5 transition-colors"
            >
              Harga Website
            </a>
          </nav>

          {/* CTA Button Mobile/Tablet */}
          <div className="pt-5 mt-4 border-t border-white">
            <a href="/contact">
              <button className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold shadow-md hover:bg-blue-700 transition active:scale-95">
                Kontak Admin
              </button>
            </a>
          </div>

          {/* Social Icons Mobile/Tablet */}
          <div className="flex justify-center items-center gap-8 pt-6">
            <a
              href="https://www.instagram.com/pndeveloper/"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            >
              <Instagram size={28} /> {/* Ukuran Icon Tetap */}
            </a>
            <a
              href="https://www.facebook.com/share/1F1rLUS1Fh/"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              <Facebook size={28} /> {/* Ukuran Icon Tetap */}
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
