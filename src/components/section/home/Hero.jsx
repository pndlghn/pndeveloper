import React from "react";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";

import ReactPixel from "react-facebook-pixel";

const Hero = () => {
  // Fungsi handler untuk tracking
  const handleCTAClick = (buttonName, eventType = "Contact") => {
    // Memicu event ke Meta Pixel
    ReactPixel.track(eventType, {
      content_name: buttonName,
      content_category: "Freelance Service",
      value: 0, // Anda bisa isi estimasi nilai project jika mau
      currency: "IDR",
    });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-linear-to-bl from-[#555A84] from-10% via-[#17248D] via-20% to-black to-70%"
    >
      {/* Background decoration (Blob) - Disesuaikan opacity agar tidak mengganggu teks di mobile */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 md:w-96 md:h-96 bg-[#3C467B] rounded-full blur-3xl opacity-40 md:opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* KOLOM KIRI: Teks & CTA */}
          <div className="text-center w-full max-w-4xl mx-auto">
            {/* Badge Kecil */}
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold mb-6 animate-fade-in-up border border-blue-200">
              <span className="flex h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
              Jasa Pembuatan Website Terpercaya
            </div>

            {/* Headline Utama */}
            {/* Responsif Font Size: text-4xl (Mobile) -> text-5xl (Tablet) -> text-6xl (Desktop) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight md:leading-tight mb-6 font-heading">
              Bangun Brand Anda dengan{" "}
              <span className="text-blue-600 block md:inline">
                Website Profesional
              </span>
            </h1>

            {/* Subheadline */}
            {/* Responsif Text Size & Max Width agar tidak terlalu lebar di tablet */}
            <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-8 mx-auto leading-relaxed font-text font-light max-w-2xl">
              Saya membantu UMKM dan Perusahaan Corporate memiliki website
              modern, cepat, dan SEO Friendly untuk meningkatkan penjualan dan
              kredibilitas bisnis.
            </p>

            {/* Tombol CTA */}
            {/* Flex-col di mobile (atas bawah), Flex-row di sm (sebelahan) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
              {/* Tombol 1: Konsultasi Gratis */}
              <a
                href="https://wa.me/6285167148132?text=Halo%20admin,%20saya%20ingin%20konsultasi%20gratis%20mengenai%20website"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTAClick("Konsultasi Gratis", "Lead")} // Kita kategorikan Lead karena niat konsultasi lebih tinggi
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1 w-full sm:w-auto cursor-pointer"
              >
                Konsultasi Gratis <ArrowRight size={20} />
              </a>

              {/* Tombol 2: Chat WhatsApp */}
              <a
                href="https://wa.me/6285167148132?text=Halo%20admin,%20saya%20ingin%20bertanya%20lewat%20WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTAClick("Chat WhatsApp", "Contact")} // Kategori Contact untuk pertanyaan umum
                className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:border-blue-600 hover:text-blue-600 transition-all w-full sm:w-auto cursor-pointer"
              >
                <MessageCircle size={20} /> Chat WhatsApp
              </a>
            </div>

            {/* Fitur / Trust Signals */}
            <div className="mt-10 md:mt-12 flex flex-wrap justify-center gap-y-3 gap-x-6 md:gap-x-8 text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} /> SEO
                Friendly
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} /> Desain
                Premium
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} /> Harga
                Terjangkau
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-linear-to-t from-black to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
