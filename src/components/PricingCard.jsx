import React from "react";
import { CheckCircle2 } from "lucide-react";

const PricingCard = ({ pkg, index }) => {
  // Logic Styling berdasarkan index (0: Biru, 1: Merah, 2: Hijau)
  const getCardStyle = (i) => {
    if (i === 0)
      return {
        glow: "from-blue-600/40",
        btn: "bg-white/10 text-white hover:bg-white/20",
      };
    if (i === 1)
      return {
        glow: "from-red-500/40",
        btn: "bg-[#E54D5D] text-white hover:bg-[#d63f4f] shadow-lg shadow-red-500/30",
      };
    return {
      glow: "from-green-500/40",
      btn: "bg-white/10 text-white hover:bg-white/20",
    };
  };

  const style = getCardStyle(index);

  return (
    <div
      className={`relative group bg-[#0A0A0A] border border-white/10 rounded-[30px] p-8 overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col
        ${
          index === 1
            ? "lg:h-[680px] lg:-mt-6 ring-1 ring-white/20 shadow-2xl shadow-red-900/10"
            : "lg:h-[640px]"
        }
      `}
    >
      {/* Top Glow */}
      <div
        className={`absolute top-0 inset-x-0 h-40 bg-linear-to-b ${style.glow} to-transparent blur-3xl opacity-50 pointer-events-none`}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-white mb-2">{pkg.level}</h3>
          <p className="text-gray-400 text-sm h-10 line-clamp-2">{pkg.desc}</p>
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-gray-400 text-lg">Rp</span>
            <span className="text-4xl font-bold text-white tracking-tight">
              {pkg.price}
            </span>
          </div>
          <span className="text-xs text-gray-500 mt-1 block">/ Tahun</span>
        </div>

        <a
          href="https://wa.me/6285167148132?text=Halo%20Admin,%20saya%20ingin%20memesan%20paket%20website%20ini"
          target="_blank"
          rel="noopener noreferrer"
          // Tambahkan 'block text-center' agar teks berada di tengah tombol
          className={`w-full py-4 rounded-xl text-sm font-bold tracking-wide transition-all mb-8 block text-center ${style.btn}`}
        >
          Pilih Paket Ini
        </a>

        <div className="w-full h-px bg-white/10 mb-6"></div>

        <div className="grow overflow-y-auto custom-scrollbar pr-2">
          <ul className="space-y-4">
            {pkg.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-300 text-sm font-medium"
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

        {/* Footer Note */}
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
};

export default PricingCard;
