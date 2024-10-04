import React from "react";
import { motion } from "framer-motion";
const mySkill = [
  {
    title: "HTML",
    img: "/assets/icon/html.svg",
    duration: 0.4,
  },
  {
    title: "CSS",
    img: "./assets/icon/css.svg",
    duration: 0.5,
  },
  {
    title: "Javascript",
    img: "./assets/icon/js.svg",
    duration: 0.5,
  },
  {
    title: "Tailwind CSS",
    img: "./assets/icon/tailwind.svg",
    duration: 0.4,
  },
  {
    title: "Bootstrap",
    img: "./assets/icon/bootstrap.svg",
    duration: 0.6,
  },
  {
    title: "Node.Js",
    img: "./assets/icon/node.svg",
    duration: 0.8,
  },
  {
    title: "Express.Js",
    img: "./assets/icon/express.svg",
    duration: 0.6,
  },
  {
    title: "Mongodb",
    img: "./assets/icon/mongodb.webp",
    duration: 0.4,
  },
  {
    title: "Mysql",
    img: "./assets/icon/myql.webp",
    duration: 0.5,
  },
  {
    title: "React.js",
    img: "./assets/icon/logo192.webp",
    duration: 0.3,
  },
  {
    title: "Nexts.js",
    img: "./assets/icon/next-js.svg",
    duration: 0.3,
  },
  {
    title: "Git",
    img: "./assets/icon/Git.svg",
    duration: 0.7,
  },
];
export default function Skill() {
  return (
    <div id="Keahlian" className="space-y-6 md:space-y-12 py-10 md:p-10 md:text-center">
      {/* top contain */}
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
        Keahlian Saya
      </motion.h2>
      {/* img end desc */}
      <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 md:gap-4  md:max-w-fit mx-auto md:ml-0 ps-4">
        {mySkill.map((items, index) => (
          <motion.div
            initial={{
              opacity: 0,
              rotate: 20,
            }}
            animate={{
              rotate: -10,
            }}
            whileInView={{
              opacity: 1,
              rotate: 0,
              transition: {
                duration: items.duration,
                delay: items.duration,
                ease: "easeInOut",
              },
            }}
            className="flex items-center gap-2 md:gap-5"
            key={index}
          >
            <img
              src={items.img}
              alt=""
              className="md:w-16 w-9 md:h-16 h-9 bg-white dark:bg-yellow-400 rounded-full p-1 object-contain"
            />
            <p className="text-slate-300 dark:text-neutral-700 text-base font-bold">{items.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
