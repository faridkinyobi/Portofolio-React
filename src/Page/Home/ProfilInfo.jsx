import React from "react";
import { motion } from "framer-motion";

export default function ProfilInfo() {
  return (
    <div className=" md:flex md:justify-around py-6 items-center">
      <motion.p
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        className="text-neutral-300 dark:text-neutral-500 text-base md:text-lg font-normal"
      >
        Frontend developer
      </motion.p>
      <motion.p
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
        className="text-neutral-300 dark:text-neutral-500 text-base md:text-lg font-normal"
      >
        Sukoharjo, Jawa Tengah, Indonesia
      </motion.p>
      <motion.a
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
        href="https://github.com/faridkinyobi"
        className="text-blue-400 hover:text-blue-500 dark:hover:text-blue-700 dark:text-blue-600 text-base md:text-lg font-normal"
      >
        https://github.com/faridkinyobi
      </motion.a>
    </div>
  );
}
