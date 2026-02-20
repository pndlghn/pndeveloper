import React from "react";
import logoTrustedBy from "../../../assets/logo-TrushtedBy.webp";

const TrustedBy = () => {
  // Daftar Logo (Bisa diganti dengan Image URL nanti)
  const logos = [{ name: "PT. Herlinah Cipta Pratama", src: logoTrustedBy }];

  return (
    <section className="py-16 bg-black ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Judul Section */}
        <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-10">
          Telah Dipercaya oleh
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
