import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

// Komponen Counter (Tidak berubah, logic sudah bagus)
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest) + suffix;
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
};

const Stats = () => {
  return (
    <section className="bg-black text-white py-10 md:py-16 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        {/* Grid: Tetap 2 kolom di semua ukuran karena data hanya sedikit */}
        <div className="grid grid-cols-2 gap-0 md:gap-8 relative divide-x divide-white/10 md:divide-x-0">
          {/* --- Item 1: Projects --- */}
          {/* border-r manual dihapus, diganti 'divide-x' di parent agar lebih rapi */}
          <div className="flex flex-col items-center justify-center p-4 md:p-6 lg:p-10 relative group md:border-r md:border-white/10">
            {/* Dekorasi Glow (Hover) */}
            <div className="absolute w-16 h-16 md:w-24 md:h-24 bg-blue-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Typography Angka */}
            {/* Mobile: text-5xl | Tablet (md): text-7xl | Desktop (lg): text-8xl */}
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-2 text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500">
              <Counter value={69} suffix="+" />
            </h3>

            {/* Typography Label */}
            {/* Mobile: text-xs (12px) | Tablet: text-sm | Desktop: text-base */}
            <p className="text-xs md:text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium text-center">
              Projects Completed
            </p>
          </div>

          {/* --- Item 2: Experience --- */}
          <div className="flex flex-col items-center justify-center p-4 md:p-6 lg:p-10 relative group">
            {/* Dekorasi Glow (Hover) */}
            <div className="absolute w-16 h-16 md:w-24 md:h-24 bg-blue-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Typography Angka */}
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-2 text-transparent bg-clip-text bg-linear-to-b from-white to-gray-500">
              <Counter value={2} suffix=" Years" />
            </h3>

            {/* Typography Label */}
            <p className="text-xs md:text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium text-center">
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
