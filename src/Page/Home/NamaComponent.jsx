import React from "react";
import { motion } from "framer-motion";
export default function NamaComponent() {
  return (
    <div className="leading-tight overflow-hidden">
      <motion.div
        className="flex justify-center items-center"
        initial={{
          opacity: 0,
          x: -8,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
        animate={{ rotate: 10 }}
        whileInView={{
          opacity: 1,
          rotate: 0,
          x: 0,
          transition: {
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <h1 className=" text-[3rem] md:text-[6.7rem] font-extrabold text-white dark:text-transparent dark:bg-clip-text dark:from-blue-400 dark:to-slate-200 dark:bg-gradient-to-l uppercase pointer-events-none whitespace-nowrap">
          MUHAMMAD
        </h1>
        <h1 className=" textOutline absolute text-[3rem] md:text-[6.7rem] font-extrabold text-white uppercase pointer-events-none whitespace-nowrap dark:text-slate-700">
          MUHAMMAD
        </h1>
      </motion.div>
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ rotate: 10 }}
        whileInView={{
          opacity: 1,
          rotate: 0,
          transition: {
            duration: 0.6,
            delay: 0.6,
            ease: "easeInOut",
          },
        }}
      >
        <h1 className=" text-[3rem] md:text-[6.7rem] font-extrabold text-white dark:text-transparent dark:bg-clip-text dark:from-blue-400 dark:to-yellow-100 dark:bg-gradient-to-r pointer-events-none ">
          FARID KINYOBI
        </h1>
        <h1 className="textOutline absolute text-[3rem] md:text-[6.7rem] font-extrabold text-white dark:text-slate-700  pointer-events-none ">
          FARID KINYOBI
        </h1>
      </motion.div>
      <motion.div
        className=" flex justify-center items-center"
        initial={{
          opacity: 0,
          x: 80,
        }}
        animate={{ x: -10 }}
        whileInView={{
          rotate: 0,
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <h1 className="text-[3.4rem] md:text-[7rem] font-extrabold text-white uppercase pointer-events-none whitespace-nowrap dark:text-transparent dark:bg-clip-text dark:from-yellow-200 dark:to-blue-200 dark:bg-gradient-to-l">
          AKBAR
        </h1>
        <h1 className="textOutline absolute text-[3.4rem] md:text-[7rem] font-extrabold text-white uppercase pointer-events-none whitespace-nowrap dark:text-slate-700">
          AKBAR
        </h1>
      </motion.div>
    </div>
  );
}
