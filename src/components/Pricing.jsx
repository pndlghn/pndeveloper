import React, { useState } from "react";
import {
  Check,
  CheckCircle2,
  LayoutTemplate,
  Globe,
  ShoppingBag,
} from "lucide-react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("landing");

  const pricingData = {
    landing: [
      {
        level: "Basic",
        description: "Untuk kebutuhan personal atau landing page sederhana.",
        price: "1.500.000",
        features: [
          "Free Domain (.com)",
          "Shared Hosting (1 Year)",
          "Responsive Design",
          "1 Page Long Scroll",
          "1 Email Business",
          "1 GB Disk Storage",
          "Free SSL",
          "Free 2 Revision",
        ],
        isPopular: false,
      },
      {
        level: "Professional",
        description: "Pilihan terbaik untuk bisnis yang sedang berkembang.",
        price: "2.750.000",
        features: [
          "Everything in Basic",
          "Complex Visual Design",
          "Direct WhatsApp Chat",
          "2 Email Business",
          "10 GB Disk Storage",
          "Free 3 Revision",
          "SEO On Page Basic",
          "30 Days Maintenance",
        ],
        isPopular: true,
      },
      {
        level: "Enterprise",
        description: "Fitur lengkap untuk performa maksimal.",
        price: "3.750.000",
        features: [
          "Everything in Standard",
          "Up to 2 Additional Pages",
          "Interactive Design",
          "Speed Optimization",
          "10 GB Disk Storage",
          "Free 5 Revision",
          "45 Days Maintenance",
        ],
        isPopular: false,
      },
    ],
    company: [
      {
        level: "Basic",
        description: "Profil perusahaan essensial untuk branding.",
        price: "2.500.000",
        features: [
          "Free Domain (.com)",
          "Shared Hosting (1 Year)",
          "3 Main Pages",
          "1 Email Business",
          "2 GB Disk Storage",
          "Free SSL",
          "Free 2 Revision",
        ],
        isPopular: false,
      },
      {
        level: "Professional",
        description: "Desain profesional untuk meningkatkan kredibilitas.",
        price: "4.000.000",
        features: [
          "Everything in Basic",
          "5-6 Pages Complete",
          "Premium Clean Design",
          "10 GB Disk Storage",
          "Free 3 Revision",
          "Basic On-Page SEO",
          "30 Days Maintenance",
        ],
        isPopular: true,
      },
      {
        level: "Enterprise",
        description: "Skala perusahaan besar dengan fitur custom.",
        price: "6.000.000",
        features: [
          "Everything in Standard",
          "8-10 Pages",
          "Interactive Animations",
          "Instagram/YouTube Embed",
          "Free 5 Revision",
          "3 Email Business",
          "Google Business Setup",
        ],
        isPopular: false,
      },
    ],
    ecommerce: [
      {
        level: "Basic",
        description: "Toko online simpel untuk mulai berjualan.",
        price: "2.500.000",
        features: [
          "Free Domain (.com)",
          "Shared Hosting (1 Year)",
          "1 Page Long Scroll",
          "2 GB Disk Storage",
          "Checkout via WhatsApp",
          "Free 3 Revision",
          "15 Days Maintenance",
        ],
        isPopular: false,
      },
      {
        level: "Professional",
        description: "Katalog produk dinamis dengan fitur filter.",
        price: "6.000.000",
        features: [
          "Everything in Basic",
          "5-7 Pages Store",
          "Katalog 20-100 Produk",
          "10 GB Disk Storage",
          "Cart -> WA Checkout",
          "Desain Kategori Custom",
          "30 Days Maintenance",
        ],
        isPopular: true,
      },
      {
        level: "Enterprise",
        description: "Sistem e-commerce full otomatis payment gateway.",
        price: "12.000.000",
        features: [
          "Everything in Standard",
          "Payment Gateway (Midtrans)",
          "Dashboard Admin Lengkap",
          "Ongkir Otomatis",
          "Mobile Friendly Cart",
          "Speed Optimization",
          "5x Revisi Gratis",
        ],
        isPopular: false,
      },
    ],
  };

  // Helper untuk menentukan style berdasarkan index kartu (0: Biru, 1: Merah, 2: Hijau)
  const getCardStyle = (index) => {
    if (index === 0) {
      return {
        glow: "from-blue-600/40 to-blue-900/0",
        title: "Basic",
        btnColor: "bg-white/10 hover:bg-white/20 text-white",
      };
    } else if (index === 1) {
      return {
        glow: "from-red-500/40 to-red-900/0", // Menggunakan Merah sesuai referensi gambar tengah
        title: "Professional",
        btnColor:
          "bg-[#E54D5D] hover:bg-[#d63f4f] text-white shadow-lg shadow-red-500/30",
      };
    } else {
      return {
        glow: "from-green-500/40 to-green-900/0",
        title: "Enterprise",
        btnColor: "bg-white/10 hover:bg-white/20 text-white",
      };
    }
  };

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden font-sans">
      {/* Background Noise/Stars (Opsional) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pricing Plans
          </h2>
          <p className="text-gray-400 text-lg">
            Investasi terbaik untuk kehadiran digital bisnis Anda.
          </p>
        </div>

        {/* --- TABS --- */}
        <div className="flex justify-center gap-2 mb-16 flex-wrap">
          {[
            { id: "landing", label: "Landing Page", icon: LayoutTemplate },
            { id: "company", label: "Company Profile", icon: Globe },
            { id: "ecommerce", label: "E-Commerce", icon: ShoppingBag },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-gray-400 border-white/20 hover:border-white hover:text-white"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {pricingData[activeTab].map((pkg, index) => {
            const style = getCardStyle(index);

            return (
              <div
                key={index}
                className={`relative group bg-[#0A0A0A] border border-white/10 rounded-[30px] p-8 overflow-hidden transition-transform duration-300 hover:-translate-y-2
                  ${
                    index === 1
                      ? "lg:h-[620px] lg:-mt-6 ring-1 ring-white/10"
                      : "lg:h-[580px]"
                  }
                  flex flex-col
                `}
              >
                {/* GLOW EFFECT DI ATAS KARTU */}
                <div
                  className={`absolute top-0 inset-x-0 h-40 bg-linear-to-b ${style.glow} blur-3xl opacity-60 pointer-events-none`}
                ></div>

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Title & Desc */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-medium text-white mb-3">
                      {pkg.level}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed h-10 line-clamp-2">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-gray-400 text-lg">Rp</span>
                      <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        {pkg.price}
                      </span>
                    </div>
                    {/* Opsional: Text /project atau /year */}
                    <span className="text-gray-500 text-xs mt-1 block">
                      / one-time payment
                    </span>
                  </div>

                  {/* Button */}
                  <a
                    href="https://wa.me/6285167148132?text=Halo%20Admin,%20saya%20tertarik%20untuk%20memesan%20paket%20website%20ini."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl text-sm font-semibold tracking-wide transition-all mb-8 block text-center ${style.btnColor}`}
                  >
                    Choose this plan
                  </a>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/10 mb-6"></div>

                  {/* Features List */}
                  <div className="grow overflow-y-auto custom-scrollbar">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 text-sm"
                        >
                          <CheckCircle2
                            size={18}
                            className={`shrink-0 mt-0.5 ${
                              index === 0
                                ? "text-blue-400"
                                : index === 1
                                ? "text-red-400"
                                : "text-green-400"
                            }`}
                          />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Extra Info (mirip 'seats available' di gambar) */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-500">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        index === 0
                          ? "bg-blue-500"
                          : index === 1
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                    ></div>
                    {index === 0
                      ? "Perfect for starters"
                      : index === 1
                      ? "Most popular choice"
                      : "For large scale needs"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
