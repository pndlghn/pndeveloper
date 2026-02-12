import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react"; // Opsional: pakai lucide-react untuk icon

const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "628123456789"; // Ganti dengan nomor WhatsApp kamu
  const message = "Halo, saya ingin konfirmasi pembayaran.";

  const handleOpenChat = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      {/* Gambar 2: Popup Message */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header Popup */}
          <div className="bg-[#25D366] p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
              <MessageCircle size={24} fill="white" />
              <span className="font-bold">WhatsApp</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Popup */}
          <div className="p-4 space-y-3">
            <div className="bg-[#303030] text-gray-200 p-3 rounded-lg rounded-tl-none text-sm relative">
              <div className="absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-[#303030] border-l-[10px] border-l-transparent"></div>
              Hello, Selamat datang di **Lobby Market Garut**
            </div>
            <div className="bg-[#303030] text-gray-200 p-3 rounded-lg rounded-tl-none text-sm relative">
              <div className="absolute -left-2 top-0 w-0 h-0 border-t-[10px] border-t-[#303030] border-l-[10px] border-l-transparent"></div>
              Silahkan klik tombol Open Chat untuk melakukan konfirmasi
              pembayaran!
            </div>
          </div>

          {/* Footer/Action Popup */}
          <div className="p-4 pt-0">
            <button
              onClick={handleOpenChat}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-2 px-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <MessageCircle size={18} />
              Open Chat
            </button>
          </div>
        </div>
      )}

      {/* Gambar 1: Floating Button Utama */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 group relative"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden"></div>
        <MessageCircle
          size={32}
          color="white"
          fill="white"
          className="relative z-10"
        />
      </button>
    </div>
  );
};

export default WhatsAppFloating;
