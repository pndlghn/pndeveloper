import React from "react";
import { pricingContent } from "../../../data/pricingData";

const Pricing = (activeTab, setActiveTab) => {
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

        {/* PRICING TABS */}
        <div className="sticky top-4 md:top-6 z-40 px-4 mb-12 -mt-10">
          <div className="max-w-fit mx-auto bg-black/80 backdrop-blur-xl border border-white/15 p-1.5 rounded-full shadow-2xl flex items-center gap-1 md:gap-2 overflow-x-auto no-scrollbar">
            {Object.values(pricingContent).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeTab === item.id
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.icon && React.cloneElement(item.icon, { size: 16 })}
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
