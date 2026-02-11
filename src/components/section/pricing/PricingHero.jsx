import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PricingHero = () => {
  return (
    <section className="relative w-full py-32 bg-black overflow-hidden flex items-center justify-center border-b border-white/10">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            Transparan & Fleksibel
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Investasi Terbaik untuk <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-600">
              Pertumbuhan Bisnis Anda
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-text leading-relaxed">
            Pilih paket yang sesuai dengan tahap bisnis Anda saat ini. Tanpa
            biaya tersembunyi, semua fitur dirancang untuk performa maksimal.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
