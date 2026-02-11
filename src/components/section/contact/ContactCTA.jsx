import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MessageCircle, Code2, Mail } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* BOX 1: SALES */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col items-start transition-colors hover:border-blue-500/50"
        >
          <div className="w-14 h-14 bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
            <MessageCircle size={32} />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-4 text-white">
            Sales & Konsultasi
          </h3>
          <p className="text-gray-400 text-base leading-relaxed mb-8 font-text">
            Hubungi tim sales kami untuk konsultasi pembuatan website, informasi
            paket layanan, atau penawaran kerja sama. Kami siap memberikan
            solusi terbaik.
          </p>
          <a
            href="https://wa.me/6285167148132" // Ganti nomormu
            target="_blank"
            rel="noreferrer"
            className="mt-auto flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
          >
            <MessageCircle size={18} />
            Chat Admin WhatsApp
          </a>
        </motion.div>

        {/* BOX 2: SUPPORT */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col items-start transition-colors hover:border-green-500/50"
        >
          <div className="w-14 h-14 bg-green-900/20 rounded-2xl flex items-center justify-center text-green-400 mb-6">
            <Code2 size={32} />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-4 text-white">
            Technical Support
          </h3>
          <p className="text-gray-400 text-base leading-relaxed mb-8 font-text">
            Punya kendala teknis atau butuh bantuan seputar website Anda? Tim
            support kami siap memberikan bantuan teknis dengan cepat dan
            efisien.
          </p>
          <a
            href="mailto:pndeveloperweb@gmail.com"
            className="mt-auto flex items-center gap-2 bg-transparent text-white border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all"
          >
            <Mail size={18} />
            Email Bantuan Teknis
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
