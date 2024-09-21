import { motion } from "framer-motion";
import React from "react";
export default function About() {
  return (
    <div className="space-y-3 md:space-y-6 md:px-10 px-5">
      {/* contain */}
      <motion.h2
        initial={{ opacity: 0, x: 10 }}
        animate={{ scale: 1 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delay: 0.5,
            ease: [0.25, 0.8, 0.25, 1],
          },
        }}
        className="text-neutral-100 dark:text-neutral-700 font-bold text-2xl md:text-3xl"
      >
        Tentang Saya
      </motion.h2>
      <hr></hr>
      <div className="md:flex space-y-4 md:px-1 md:space-y-0 gap-10 text-base md:text-lg relative">
        <motion.p
          className="text-neutral-300 dark:text-neutral-500 text-justify indent-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ y: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.6,
              ease: [0.25, 0.8, 0.25, 1],
            },
          }}
        >
          Sebagai lulusan baru dari program studi Informatika, saya memiliki
          minat yang mendalam dalam front-end development dan bersemangat untuk
          memulai karir saya di dunia teknologi. Dengan pemahaman yang kuat
          tentang HTML, CSS, JavaScript, dan framework modern seperti React,
          saya siap untuk berkontribusi dalam menciptakan pengalaman pengguna
          yang intuitif dan menarik.
        </motion.p>

        <motion.p
          className="text-neutral-300 dark:text-neutral-500 text-justify indent-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ y: 1 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              delay: 0.7,
              ease: [0.25, 0.8, 0.25, 1],
            },
          }}
        >
          Proyek tugas akhir saya, membangun sistem persewaan sewa gedung,
          menjadi titik puncak dari perjalanan akademik saya. Dalam proyek ini,
          saya mengembangkan sebuah platform berbasis web yang memungkinkan
          pengguna untuk melakukan sewa gedung dengan mudah dan petugas tidak
          perlu lagi melakukan pencatatan dalam penjadwalan gedung. Proyek ini
          tidak hanya memperkuat kemampuan teknis saya, tetapi juga meningkatkan
          kemampuan saya dalam desain antarmuka pengguna, pemecahan masalah.
        </motion.p>
      </div>
      <hr></hr>
    </div>
  );
}
