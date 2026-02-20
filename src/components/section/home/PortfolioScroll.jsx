import React from "react";
import { ArrowUpRight } from "lucide-react";
import imagePortfolio1 from "../../../assets/portfolio-1.webp";
import imagePortfolio2 from "../../../assets/portfolio-2.webp";

// Ganti dengan gambar proyek asli Anda nanti
const projects = [
  {
    id: 1,
    title: "E-Commerce Lobby Market",
    category: "Website E-Commerce",
    image: imagePortfolio1,
  },
  {
    id: 2,
    title: "PT. Herlinah Cipta Pratama",
    category: "Website Company Profile",
    image: imagePortfolio2,
  },
  {
    id: 3,
    title: "E-Commerce Lobby Market",
    category: "Website E-Commerce",
    image: imagePortfolio1,
  },
  {
    id: 4,
    title: "PT. Herlinah Cipta Pratama",
    category: "Website Company Profile",
    image: imagePortfolio2,
  },
  {
    id: 5,
    title: "E-Commerce Lobby Market",
    category: "Website E-Commerce",
    image: imagePortfolio1,
  },
  {
    id: 6,
    title: "PT. Herlinah Cipta Pratama",
    category: "Website Company Profile",
    image: imagePortfolio2,
  },
];

const PortfolioCard = ({ project }) => (
  <div
    className="relative group rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg
    /* UKURAN RESPONSIF */
    w-[300px] h-[200px]        /* Mobile: Lebih kecil */
    md:w-[400px] md:h-[250px]  /* Tablet & Desktop: Ukuran Asli */
    "
  >
    {/* Gambar Background */}
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Overlay Gelap (Muncul saat Hover/Tap di Mobile) */}
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-600 flex flex-col justify-end p-4 md:p-6">
      {/* Kategori */}
      <span className="text-blue-400 text-xs md:text-sm font-semibold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-600">
        {project.category}
      </span>

      {/* Judul & Icon */}
      <div className="flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-600 delay-75">
        <h3 className="text-white text-lg md:text-xl font-bold leading-tight pr-2">
          {project.title}
        </h3>
        <div className="bg-white/20 p-1.5 md:p-2 rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition-colors shrink-0">
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
        </div>
      </div>
    </div>
  </div>
);

const PortfolioScroll = () => {
  return (
    <section className="py-8 md:py-10 bg-black overflow-hidden relative">
      {/* Container Slider */}
      <div className="relative w-full">
        {/* Gradient Kiri & Kanan (Agar terlihat infinite smooth) */}
        {/* Lebar gradient disesuaikan: w-12 di mobile, w-32 di desktop */}
        <div className="absolute top-0 left-0 z-10 h-full w-12 md:w-32 bg-linear-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-12 md:w-32 bg-linear-to-l from-black to-transparent pointer-events-none"></div>

        {/* Track Animasi */}
        {/* Gap disesuaikan: gap-4 di mobile, gap-8 di desktop */}
        <div className="flex animate-infinite-scroll gap-4 md:gap-8 w-max hover:[animation-play-state:paused]">
          {/* LOOP PERTAMA */}
          {projects.map((project, index) => (
            <PortfolioCard key={`p1-${index}`} project={project} />
          ))}

          {/* LOOP KEDUA (Duplikat untuk efek seamless) */}
          {projects.map((project, index) => (
            <PortfolioCard key={`p2-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioScroll;
