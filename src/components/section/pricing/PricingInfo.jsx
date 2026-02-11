import React from "react";
import { Zap, CheckCircle2 } from "lucide-react";

const PricingInfo = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
      {/* Box Kiri: Alasan (Why) */}
      <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-center">
        <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6">
          <Zap size={28} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-white">
          {data.reason.title}
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed font-text">
          {data.reason.desc}
        </p>
      </div>

      {/* Box Kanan: Benefit List (What) */}
      <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10">
        <h3 className="text-xl font-bold font-heading mb-6 text-white border-b border-white/10 pb-4">
          Apa yang Anda Dapatkan?
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
            >
              <CheckCircle2
                size={20}
                className="text-blue-500 shrink-0 mt-0.5"
              />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingInfo;
