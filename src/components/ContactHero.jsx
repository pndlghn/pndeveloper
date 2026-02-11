import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden border-b border-white/10">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-4 block">
          Hubungi Kami
        </span>
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight text-white">
          Mulai Perjalanan Digital Anda <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-green-400">
            Bersama pndeveloper
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-text leading-relaxed">
          Kami siap membantu Anda membangun website profesional yang sesuai
          kebutuhan bisnis. Baik untuk konsultasi awal, pertanyaan teknis, atau
          penawaran kerja sama kami siap mendengar.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
