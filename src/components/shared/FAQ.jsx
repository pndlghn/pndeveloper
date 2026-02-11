import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Apa itu Website?",
      answer:
        "Website merupakan rangkaian halaman web yang terkait dan dapat diakses melalui internet dengan browser seperti Chrome, Firefox, atau Safari. Di dalam website, ada teks, gambar, video, audio, dan unsur interaktif untuk beragam keperluan seperti menyampaikan informasi, transaksi online, perkenalan produk, hingga hiburan.",
    },
    {
      question: "Mengapa bisnis saya harus memiliki website?",
      answer:
        "Website meningkatkan kredibilitas bisnis, memperluas jangkauan pasar hingga ke seluruh dunia, dan bekerja sebagai sales marketing 24 jam nonstop. Di era digital saat ini, pelanggan cenderung mencari informasi produk atau jasa di Google sebelum memutuskan untuk membeli.",
    },
    {
      question: "Jenis website apa saja yang pndeveloper kerjakan?",
      answer:
        "Kami melayani pembuatan berbagai jenis website, mulai dari Landing Page untuk promosi produk, Website Company Profile untuk perusahaan, Toko Online (E-Commerce) dengan fitur keranjang belanja, hingga website Custom sesuai kebutuhan spesifik bisnis Anda.",
    },
    {
      question: "Berapa lama proses pembuatan website?",
      answer:
        "Durasi pengerjaan tergantung pada kompleksitas website. Untuk Landing Page biasanya memakan waktu 3-5 hari kerja. Untuk Company Profile sekitar 1-2 minggu, dan untuk Toko Online atau website Custom bisa memakan waktu 2-4 minggu setelah semua data materi kami terima.",
    },
    {
      question: "Apakah saya bisa mengupdate konten sendiri nantinya?",
      answer:
        "Tentu saja! Kami membangun website menggunakan CMS (Content Management System) yang user-friendly. Anda akan diberikan akses dashboard admin untuk mengubah teks, gambar, atau menambah artikel blog dengan mudah tanpa perlu mengerti coding.",
    },
    {
      question: "Apakah harga sudah termasuk Domain dan Hosting?",
      answer:
        "Ya, semua paket pembuatan website kami (kecuali paket custom tertentu) sudah termasuk GRATIS Domain (.com) dan Hosting selama 1 tahun pertama. Anda tidak perlu pusing memikirkan biaya sewa server di awal.",
    },
    {
      question: "Bagaimana jika terjadi error setelah website jadi?",
      answer:
        "Tenang, kami memberikan Garansi Maintenance Gratis (durasi sesuai paket yang diambil, mulai dari 15 hingga 45 hari). Jika ada error teknis atau bug pada sistem, kami akan memperbaikinya secara cuma-cuma.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Mengurangi padding vertical di mobile (py-12) dan normal di desktop (md:py-24)
    <section className="py-12 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-16">
          {/* Font size responsif: text-3xl di mobile, text-5xl di desktop */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight">
            FAQ Jasa Pembuatan Website <br />
            <span className="text-blue-500">pndeveloper</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Jawaban atas pertanyaan yang sering diajukan oleh klien kami.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`border rounded-xl md:rounded-2xl transition-all duration-300 overflow-hidden
                ${
                  openIndex === index
                    ? "bg-[#0f0f0f] border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                    : "bg-transparent border-white/10 hover:border-white/30"
                }
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                // Menambah gap agar teks dan icon tidak nempel di HP
                // items-start agar jika teks panjang (2 baris), icon tetap di atas
                className="w-full flex justify-between items-start md:items-center gap-4 p-5 md:p-6 text-left focus:outline-none"
              >
                <span
                  className={`text-base md:text-lg font-bold transition-colors leading-snug ${
                    openIndex === index ? "text-blue-400" : "text-white"
                  }`}
                >
                  {item.question}
                </span>

                {/* shrink-0 PENTING: Mencegah icon gepeng saat teks panjang di Mobile */}
                <div
                  className={`shrink-0 p-1.5 md:p-2 rounded-full transition-all duration-300 -mt-0.5 md:mt-0 ${
                    openIndex === index
                      ? "bg-blue-500/20 text-blue-400 rotate-180"
                      : "bg-white/5 text-gray-400"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={18} className="md:w-5 md:h-5" />
                  ) : (
                    <Plus size={18} className="md:w-5 md:h-5" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? // max-h-[1000px] atau [150vh] agar aman untuk teks panjang di mobile
                      "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {/* Padding responsive: p-5 di mobile, p-6 di desktop */}
                <div className="p-5 md:p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BOTTOM */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Masih punya pertanyaan lain?
          </p>
          <a
            href="mailto:pndeveloperweb@gmail.com"
            className="inline-flex items-center justify-center bg-white text-black px-6 py-3 md:px-8 md:py-3 rounded-full font-bold hover:bg-gray-200 transition-all text-sm md:text-base"
          >
            Hubungi Tim Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
