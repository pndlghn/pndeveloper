import React from "react";
import { Wrench, Search, Settings, ArrowRight } from "lucide-react";

const AdditionalServices = () => {
  // Nomor WA Admin
  const phoneNumber = "6285167148132";

  const services = [
    {
      icon: <Wrench size={32} />,
      title: "Perbaikan Website",
      desc: "Saya menawarkan layanan perbaikan untuk memastikan website Anda selalu berjalan optimal. Mulai dari memperbaiki bug, mengatasi masalah performa, hingga mengatasi error coding.",
      message: "Halo, saya butuh bantuan untuk Perbaikan Website.",
    },
    {
      icon: <Search size={32} />,
      title: "Jasa SEO Website",
      desc: "Dapatkan peringkat terbaik di mesin pencari. Kami melakukan optimasi konten dan struktur situs untuk meningkatkan visibilitas di Google dan mendatangkan traffic organik.",
      message: "Halo, saya tertarik dengan jasa SEO Website.",
    },
    {
      icon: <Settings size={32} />,
      title: "Maintenance Rutin",
      desc: "Jaga website Anda selalu up-to-date dan aman. Layanan mencakup backup data, update plugin/tema, serta monitoring keamanan dari serangan siber.",
      message: "Halo, saya ingin berlangganan Maintenance Website.",
    },
  ];

  return (
    // Mobile: py-16, Desktop: py-24
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        {/* Mobile: gap-8 & mb-12, Desktop: gap-12 & mb-20 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-20 items-start">
          <div>
            {/* Typography: Mobile text-3xl, Desktop text-5xl */}
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              Layanan Tambahan Untuk
              <br className="hidden md:block" />{" "}
              <span className="text-blue-500">Optimasi Website Anda</span>
            </h2>
          </div>
          <div>
            {/* Typography: Mobile text-base, Desktop text-lg */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed border-l-2 border-white/20 pl-4 md:pl-6">
              Saya menyediakan berbagai layanan teknis tambahan yang dirancang
              untuk meningkatkan performa, keamanan, dan efektivitas website
              bisnis Anda.
            </p>
          </div>
        </div>

        {/* SERVICE CARDS GRID */}
        {/* Mobile: grid-cols-1 
            Tablet (md): grid-cols-2 (agar kartu tidak terlalu gepeng)
            Desktop (lg): grid-cols-3
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              // Card Padding: p-6 (mobile), p-8 (desktop)
              className="group flex flex-col bg-[#0f0f0f] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-lg group-hover:shadow-blue-600/20">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 md:mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8 grow">
                {item.desc}
              </p>

              {/* BUTTON WHATSAPP */}
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  item.message
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-auto w-full py-3 px-6 rounded-xl font-semibold text-white border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                Dapatkan Layanan
                <ArrowRight
                  size={18}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
