import React from "react";
import {
  Award,
  Target,
  Palette,
  Zap,
  ShieldCheck,
  Users,
  Headphones,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award size={32} />,
      title: "Lebih dari 2 tahun pengalaman",
      desc: "Berpengalaman lebih dari 10+ tahun dalam transformasi digital. Ahli pada bidang pengembangan web dan digital marketing.",
      // Mobile: Default 1 kolom (otomatis). Tablet/Desktop (md): Span 2 kolom.
      className: "md:col-span-2",
    },
    {
      icon: <Target size={32} />,
      title: "Berorientasi Hasil",
      desc: "Menciptakan pengalaman online yang menghasilkan metrik terukur untuk bisnis Anda.",
      className: "md:col-span-1",
    },
    {
      icon: <Palette size={32} />,
      title: "Desain Kekinian",
      desc: "Visual website menawan yang memastikan pengalaman pengguna (UX) yang menyenangkan.",
      className: "md:col-span-1",
    },
    {
      icon: <Zap size={32} />,
      title: "Pengembangan Efisien",
      desc: "Komunikasi transparan. Klien selalu mendapat update di setiap tahap via WhatsApp.",
      className: "md:col-span-2",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Keamanan Cyber",
      desc: "Backup berkala, update sistem, dan perlindungan hosting tingkat lanjut.",
      className: "md:col-span-1",
    },
    {
      icon: <Users size={32} />,
      title: "Kolaborasi Aktif",
      desc: "Pendekatan kolaboratif memastikan keterlibatan aktif Anda untuk hasil sempurna.",
      className: "md:col-span-1",
    },
    {
      icon: <Headphones size={32} />,
      title: "Support Berkelanjutan",
      desc: "Layanan maintenance agar Anda bisa fokus bisnis, sementara kami urus teknisnya.",
      // Item terakhir kita buat lebar full di Tablet agar rapi (opsional), atau tetap kotak.
      // Disini saya biarkan kotak agar sesuai grid 3 kolom (sisa 1 slot kosong bisa diisi atau dibiarkan)
      className: "md:col-span-1",
    },
  ];

  return (
    // Mobile: py-16, Desktop: py-24
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* HEADER SECTION */}
        {/* Mobile: gap-8, Desktop: gap-12. Mobile: mb-10, Desktop: mb-16 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 md:mb-16 items-start">
          <div>
            {/* Typography Responsif */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
              Mengapa harus <br />
              <span className="text-blue-500">Memilih Saya?</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed border-l-2 border-blue-500 pl-4 md:pl-6 mt-4 lg:mt-0">
              Saya menggabungkan seni desain dan teknologi untuk menciptakan
              website yang tidak hanya bagus dilihat, tapi juga bagus untuk
              bisnis.
            </p>
          </div>
        </div>

        {/* BENTO GRID LAYOUT */}
        {/* Mobile: grid-cols-1 (1 kolom ke bawah). Tablet/Desktop: grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              // Padding: p-6 di mobile, p-8 di desktop agar tidak terlalu sempit di HP
              className={`group relative bg-[#0f0f0f] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden ${item.className}`}
            >
              {/* Dekorasi Gradient Halus saat Hover */}
              {/* Note: 'bg-linear-to-br' diperbaiki jadi standard 'bg-gradient-to-br' */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                {/* Icon Wrapper */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-white group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {/* Clone element agar bisa ubah ukuran icon via props jika perlu, atau biarkan default */}
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>

                {/* Title: Text size responsif */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 relative z-10">
                  {item.title}
                </h3>

                {/* Desc: Text size responsif */}
                <p className="text-gray-400 text-sm md:text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </div>

              {/* Dekorasi Visual Tambahan (Arrow atau Shape) untuk Card Lebar */}
              {/* Hanya muncul jika item memiliki class col-span-2 DAN di layar md keatas */}
              {item.className?.includes("col-span-2") && (
                <div className="hidden md:block absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
