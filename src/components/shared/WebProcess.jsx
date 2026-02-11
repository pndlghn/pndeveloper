import React, { useEffect, useState, useRef } from "react";
import {
  Handshake,
  FolderOpen,
  Code2,
  FlaskConical,
  Rocket,
  CheckCheck,
} from "lucide-react";

const WebsiteProcess = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Penawaran",
      desc: "Saya akan merancang dan menawarkan solusi terbaik berupa konsep website berdasarkan kebutuhan bisnis Anda disertai penawaran harga yang transparan.",
      icon: <Handshake size={28} />,
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Persiapan Konten",
      desc: "Anda akan di arahkan dan dibimbing oleh tim sales untuk mengisi dokumen kebutuhan konten website seperti: logo, foto, dan dokumen pendukung lainnya.",
      icon: <FolderOpen size={28} />,
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Pengembangan",
      desc: "Saya akan mengimplementasi website anda bedasarkan konsep dan konten website yang telah dikirimkan lalu dilakukan pengkodean dengan teliti.",
      icon: <Code2 size={28} />,
      image:
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Optimasi & Pengujian",
      desc: "Website akan dilakukan pengujian untuk memastikan semua fitur dan fungsionalitas berjalan dengan baik lalu Anda akan dikirimkan preview website untuk revisi.",
      icon: <FlaskConical size={28} />,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Publish",
      desc: "Saya akan menerbitkan website dengan domain dan hosting yang telah di sepakati lalu menyerahkan akses login website kepada Anda disertai testimonial.",
      icon: <Rocket size={28} />,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Selesai",
      desc: "Website Anda telah siap digunakan. Kami siap membantu jika diperlukan perawatan, penambahan fitur, atau konsultasi teknis di masa depan.",
      icon: <CheckCheck size={28} />,
      image:
        "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const startOffset = windowHeight * 0.3;
        const scrolled = -top + startOffset;
        const totalScrollable = height - windowHeight;

        let progress = (scrolled / totalScrollable) * 100;

        if (progress < 0) progress = 0;
        if (progress > 100) progress = 100;

        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-black text-white relative pb-20 md:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-24">
        {/* --- 1. HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20 items-start">
          <div>
            {/* Typography Responsif: text-3xl di HP, text-6xl di Desktop */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Bagaimana proses kami <br />
              <span className="text-blue-500">membuat website</span>
            </h2>
          </div>
          <div>
            {/* Border padding disesuaikan */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed border-l-2 border-white/20 pl-4 md:pl-6">
              Saya mengutamakan kualitas dan kepuasan klien dalam setiap langkah
              proses Jasa pembuatan website. Mulai dari analisis mendalam hingga
              hasil akhir yang memuaskan.
            </p>
          </div>
        </div>

        {/* --- LAYOUT UTAMA --- */}
        <div className="flex flex-row gap-8 lg:gap-16">
          {/* KOLOM KIRI: STACKED CARDS (Full width di Mobile/Tablet) */}
          <div className="w-full lg:w-10/12 flex flex-col items-center">
            {steps.map((step, index) => {
              // Top offset logic
              const topOffset = 100 + index * 20;

              return (
                <div
                  key={step.id}
                  className="sticky w-full"
                  style={{
                    top: `${topOffset}px`,
                    // Margin bottom lebih kecil di mobile agar tidak terlalu jauh jaraknya
                    marginBottom: index === steps.length - 1 ? "0px" : "80px",
                  }}
                >
                  {/* CARD CONTAINER */}
                  {/* Height: 450px (Mobile), 600px (Desktop) */}
                  <div className="relative h-[450px] sm:h-[500px] md:h-[600px] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                    {/* Gambar Background */}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
                    />

                    {/* Gradient Overlay (Fixed Syntax) */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

                    {/* Badge Langkah */}
                    <div className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-20">
                      <div className="bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold text-white">
                        Langkah {step.id}
                      </div>
                    </div>

                    {/* KONTEN TEXT DI BAWAH */}
                    <div className="absolute bottom-0 left-0 w-full md:w-3/4 p-4 md:p-12 z-20">
                      <div className="bg-black/60 md:bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl">
                        {/* Icon & Title */}
                        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 shrink-0">
                            {/* Ukuran icon menyesuaikan (clone element agar bisa override size) */}
                            {React.cloneElement(step.icon, {
                              size: window.innerWidth < 768 ? 20 : 28,
                            })}
                          </div>
                          <h3 className="text-xl md:text-3xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-200 text-sm md:text-lg leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* KOLOM KANAN: PROGRESS BAR (Hanya Desktop) */}
          {/* 'hidden lg:block' artinya hilang di HP/Tablet, muncul di Laptop */}
          <div className="hidden lg:block w-2/12 relative">
            <div className="sticky top-32 h-[500px] flex flex-col items-center">
              <div className="absolute top-0 bottom-0 w-1 bg-white/20 rounded-full"></div>
              <div
                className="absolute top-0 w-1 bg-blue-500 rounded-full transition-all duration-100 ease-out"
                style={{ height: `${scrollProgress}%` }}
              ></div>

              <div className="flex flex-col justify-between h-full z-10 w-full items-center">
                {steps.map((step) => {
                  const threshold = ((step.id - 1) / (steps.length - 1)) * 100;
                  const isActive = scrollProgress >= threshold - 5;

                  return (
                    <div key={step.id} className="flex items-center w-full">
                      <div
                        className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm border-2 transition-all duration-300 relative z-20
                                    ${
                                      isActive
                                        ? "bg-blue-600 border-blue-600 text-white scale-110 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                                        : "bg-black border-white/20 text-gray-500"
                                    }`}
                      >
                        {step.id}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteProcess;
