import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, ShieldCheck } from "lucide-react";

const Features = () => {
  return (
    // Responsive Padding: py-16 di mobile, py-24 di desktop
    <section className="py-16 md:py-24 bg-black overflow-hidden px-4 md:px-0">
      {/* Container spacing: space-y-16 di mobile, 32 di desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-32">
        {/* --- BAGIAN 1: TEKS KIRI - GAMBAR KANAN --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* KOLOM TEKS (Mobile: Order 2 (bawah), Desktop: Order 1 (kiri)) */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-4 md:mb-6">
              Sekedar Punya Website Aja{" "}
              <span className="text-red-500">Gak Cukup!</span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                Bayangkan Anda memiliki toko fisik di gang sempit, catnya kusam,
                dan etalasenya berantakan. Apakah pelanggan akan masuk? Mungkin
                tidak. Mereka akan lari ke toko sebelah yang lebih terang dan
                rapi.
              </p>
              <p>
                Begitu juga di dunia digital. Website yang asal jadi tanpa
                strategi hanya akan menjadi "kuburan digital". Tidak ada
                pengunjung, tidak ada penjualan, dan parahnya:{" "}
                <strong>merusak citra brand Anda.</strong>
              </p>
            </div>

            <div className="mt-6 md:mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex gap-4 items-start">
              <div className="bg-red-500 p-2 rounded-lg text-white mt-1 shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-base md:text-lg">
                  Resiko Website Murahan
                </h4>
                <p className="text-sm text-red-200 mt-1">
                  Loading lambat, tidak mobile-friendly, dan sulit ditemukan di
                  Google.
                </p>
              </div>
            </div>
          </div>

          {/* KOLOM GAMBAR (Mobile: Order 1 (atas), Desktop: Order 2 (kanan)) */}
          <div className="order-1 lg:order-2 perspective-1000">
            <div className="relative group transform transition-all duration-500 lg:hover:rotate-y-12 lg:hover:scale-105 cursor-pointer">
              {/* Efek Glow (Perbaikan Syntax gradient) */}
              <div className="absolute -inset-4 bg-linear-to-r from-red-600 to-orange-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-60 transition duration-500"></div>

              {/* Container Gambar */}
              <div className="relative bg-[#111] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser Mockup Header */}
                <div className="h-6 md:h-8 bg-gray-900 border-b border-gray-800 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop"
                  alt="Website Lama vs Baru"
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition duration-500"
                />

                {/* Floating Card (Responsive Position) */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white p-3 md:p-4 rounded-xl shadow-xl transform translate-y-4 group-hover:translate-y-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 delay-100">
                  <p className="text-black font-bold text-[10px] md:text-xs flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                    Traffic Menurun 40%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BAGIAN 2: GAMBAR KIRI - TEKS KANAN --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* KOLOM GAMBAR (Selalu Order 1 di Mobile & Desktop untuk variasi visual, atau bisa disesuaikan) */}
          {/* Di sini saya biarkan order-1 agar di mobile: Gambar dulu, baru teks. Konsisten dengan bagian atas */}
          <div className="order-1 perspective-1000">
            <div className="relative group transform transition-all duration-500 lg:hover:-rotate-y-12 lg:hover:scale-105 cursor-pointer">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-60 transition duration-500"></div>

              <div className="relative bg-[#111] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="h-6 md:h-8 bg-gray-900 border-b border-gray-800 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2536&auto=format&fit=crop"
                  alt="Website Profesional"
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition duration-500"
                />

                {/* Floating Element Positive */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600/90 backdrop-blur-md text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-2xl transform scale-90 group-hover:scale-110 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500">
                  <p className="font-bold text-xs md:text-sm whitespace-nowrap">
                    🚀 Sales Naik 300%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM TEKS (Order 2) */}
          <div className="order-2 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-4 md:mb-6">
              Bisnis Anda Butuh <br />
              <span className="text-blue-500">Website Profesional</span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                Website profesional adalah investasi terbaik. Di era digital
                yang bising ini, website bukan sekadar brosur, tapi{" "}
                <strong>salesman 24 jam</strong> yang bekerja tanpa henti untuk
                Anda.
              </p>
              <p>
                Saya merancang website yang tidak hanya indah dipandang, tapi
                juga <em>user-friendly</em>, cepat, dan dirancang khusus untuk
                mengonversi pengunjung menjadi pembeli setia.
              </p>
            </div>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/pricing" // 2. Ganti '/contact' dengan alamat halaman tujuanmu
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 group w-full sm:w-auto shadow-lg shadow-blue-600/20"
              >
                Bikin Website Sekarang
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <div className="flex items-center justify-center gap-2 text-gray-400 px-4 py-3 border border-white/5 rounded-full sm:border-none">
                <Zap className="text-yellow-500 shrink-0" size={20} />
                <span className="text-sm font-medium">
                  Proses Cepat & Mudah
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
