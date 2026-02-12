import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "6285167148132"; // Ganti dengan nomor WhatsApp tujuan
  const message = "Halo, saya ingin konfirmasi pembayaran.";

  const handleOpenChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Container AnimatePresence untuk mendeteksi saat komponen di-unmount */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Animasi Masuk & Keluar
            initial={{ opacity: 0, scale: 0.5, y: 50, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: 50,
              transition: { duration: 0.2 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-72 sm:w-80 bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header Popup */}
            <div className="bg-[#25D366] p-4 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <MessageCircle size={24} fill="white" />
                <span className="font-bold tracking-wide">WhatsApp</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body Popup */}
            <div className="p-4 space-y-4 bg-[#121212]">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-[#303030] text-gray-200 p-3 rounded-lg rounded-tl-none text-[13px] relative shadow-sm"
              >
                <div className="absolute -left-2 top-0 w-0 h-0 border-t-10 border-t-[#303030] border-l-10 border-l-transparent"></div>
                Halo!, Selamat Datang di Layanan Website Kami
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-[#303030] text-gray-200 p-3 rounded-lg rounded-tl-none text-[13px] relative shadow-sm"
              >
                <div className="absolute -left-2 top-0 w-0 h-0 border-t-10 border-t-[#303030] border-l-10 border-l-transparent"></div>
                Silahkan klik tombol Open Chat untuk memulai percakapan.
              </motion.div>
            </div>

            {/* Footer */}
            <div className="p-4 pt-0 bg-[#121212]">
              <button
                onClick={handleOpenChat}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg"
              >
                <MessageCircle size={18} fill="white" />
                Open Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button Utama */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] group relative overflow-hidden"
      >
        {/* Efek Ping saat tertutup */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></span>
        )}
        <MessageCircle size={32} color="white" fill="white" />
      </motion.button>
    </div>
  );
};

export default WhatsAppFloating;
