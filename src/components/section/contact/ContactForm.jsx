import React, { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  // State form dipindahkan ke sini agar komponen mandiri
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic kirim email via mailto
    window.location.href = `mailto:pndeveloperweb@gmail.com?subject=Tanya Website dari ${formData.name}&body=${formData.message}`;
  };

  return (
    <section className="py-20 px-6 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Kiri: Copywriting Info */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight text-white">
              Ajukan Penawaran, <br />
              Tanyakan Kebutuhan, <br />
              <span className="text-gray-500">atau Mulai Konsultasi.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-text leading-relaxed">
              Isi formulir berikut untuk mendiskusikan pembuatan website. Tim
              pndeveloper akan membalas pesan Anda dalam waktu maksimal 1x24
              jam.
            </p>

            {/* Info Kontak Kecil */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Email Kami
                  </p>
                  <p className="font-medium">pndeveloperweb@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-green-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Lokasi
                  </p>
                  <p className="font-medium">Garut, Jawa Barat, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan: Form Input */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#111] border border-white/10 p-6 md:p-8 rounded-3xl space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nama */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Contoh: Pandu Alghani"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-700"
                    required
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">
                    Email Bisnis
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-700"
                    required
                  />
                </div>
              </div>

              {/* Pesan */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">
                  Ceritakan Kebutuhan Website Anda
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Saya ingin membuat website landing page untuk produk herbal..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-700 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
              >
                <Send
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
                Kirim Pesan Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
