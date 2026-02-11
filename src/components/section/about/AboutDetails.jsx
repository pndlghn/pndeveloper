import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutDetails = () => {
  // Animasi
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-black text-white py-16 md:py-24 lg:py-40 px-6 font-sans">
      <motion.div
        className="container mx-auto max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* --- KOLOM KIRI --- */}
          <motion.div variants={fadeInUp}>
            <div className="flex flex-wrap items-baseline gap-2 md:gap-3 mb-6 md:mb-8">
              <h2 className="text-5xl md:text-6xl font-bold font-heading tracking-tight">
                about.
              </h2>
              <span className="text-xl md:text-2xl font-bold font-heading text-white">
                Pandu Alghani
              </span>
            </div>

            <h3 className="text-xl md:text-2xl text-gray-200 font-medium font-text mb-6 leading-relaxed">
              I am a full-stack web developer and wordpress developer living in
              Indonesia.
            </h3>

            <p className="text-gray-400 leading-loose text-base md:text-lg font-text">
              Since high school, I've loved creating websites that are simple,
              beautiful, and functional. When I'm not diving into Visual Studio
              Code, you'll probably find me chilling, cooking, gaming, or
              playing badminton.
            </p>
          </motion.div>

          {/* --- KOLOM KANAN --- */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-10 mt-0 md:mt-4"
          >
            {/* My Study Section */}
            <div>
              <h4 className="text-xl font-bold text-white mb-3 font-heading">
                My Study
              </h4>
              <p className="text-gray-400 leading-loose font-text text-base md:text-lg">
                I started my study in Garut. Where I studied: SMA Negeri 8 Garut
                and Informatics Engineering at the Garut Institute of Technology
              </p>
            </div>

            {/* Passion Section */}
            <div>
              <h4 className="text-xl font-bold text-white mb-3 font-heading">
                Passion
              </h4>
              <p className="text-gray-400 leading-loose font-text text-base md:text-lg">
                I like to design things, so I usually start by making prototype
                projects to improve my skills. Usually every week something new
                is learned, this makes me a little better than before
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutDetails;
