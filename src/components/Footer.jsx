import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import logoImage from "../assets/logo-pndev.png"; // Pastikan path logo sesuai

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* KOLOM 1: IDENTITAS PERUSAHAAN */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <img
                src={logoImage}
                alt="NuhaWeb"
                className="h-32 w-auto object-contain"
              />
            </div>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" />
                <p>
                  Jl. Garut - Tasikmalaya, RT 01 RW 02, Cilawu, Garut - 44181
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a
                  href="mailto:info@nuhaweb.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  pndeveloper@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <a
                  href="https://wa.me/6285167148132"
                  className="hover:text-blue-500 transition-colors"
                >
                  (+62) 851-6714-8132
                </a>
              </div>
            </div>
          </div>

          {/* KOLOM 2: INFORMASI */}
          <div className="lg:pl-12">
            <h3 className="text-white font-bold text-lg mb-6">Informasi</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">&gt;</span> Ketentuan Layanan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">&gt;</span> Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">&gt;</span> FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: KONTEN */}
          <div className="lg:pl-12">
            <h3 className="text-white font-bold text-lg mb-6">Konten</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">&gt;</span> Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">&gt;</span> Tentang
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">&gt;</span> Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">&gt;</span> Harga Website
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">&gt;</span> Cara Pesan web
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition-colors flex items-center gap-2"
                >
                  <span className="text-gray-600">&gt;</span> Jasa Pembuatan
                  Website
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: TOMBOL BANTUAN */}
          <div>
            <div className="space-y-4 mb-8">
              {/* Tombol Bantuan Teknis (Background Putih agar kontras di Dark Mode) */}
              <button className="w-full bg-white text-black font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-all">
                <HelpCircle size={20} /> Bantuan Teknis
              </button>

              {/* Tombol Chat Admin (Outline) */}
              <a
                href="https://wa.me/6285167148132?text=Halo%20Admin,%20saya%20ingin%20bertanya%20mengenai%20jasa%20pembuatan%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-white text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
              >
                <MessageCircle size={20} /> Chat Admin
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/share/1F1rLUS1Fh/"
                className="bg-white/5 p-2 rounded-lg hover:bg-blue-600 transition-colors text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/pndeveloper"
                className="bg-white/5 p-2 rounded-lg hover:bg-pink-600 transition-colors text-white"
              >
                <Instagram size={20} />
              </a>
              <span className="text-gray-400 font-medium">pndeveloper</span>
            </div>
          </div>
        </div>

        {/* COPYRIGHT BOTTOM */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} pndeveloper Jasa Pembuatan Website
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
