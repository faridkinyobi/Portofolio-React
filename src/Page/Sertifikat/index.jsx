import React from "react";
import { motion } from "framer-motion";
export default function Sertifikat() {
  return (
    <div id="Sertifikat" className="m-7">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ scale: 1 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.5,
            ease: [0.25, 0.8, 0.25, 1],
          },
        }}
        className="text-neutral-100 dark:text-neutral-700 font-bold text-2xl md:text-3xl pl-6"
      >
        Sertifikat
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-3 m-7"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          src="/assets/rest-api.png"
          alt="serfikat"
          className="w-full h-52 md:h-80 object-contain "
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src="/assets/problem-solving.png"
          alt="serfikat"
          className="w-full h-52 md:h-80 object-contain"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src="/assets/js-inter.png"
          alt="serfikat"
          className="w-full h-52 md:h-80 object-contain"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}
