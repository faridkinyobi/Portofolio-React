import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParallaxText from "./ParallaxText.jsx"; // Pastikan sudah membuat komponen ini

const ImageSection = () => {
  const [y, setY] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setY(scrollY * -1); // Mengatur kecepatan gerakan gambar
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="relative pt-10">
      <motion.div
        style={{ y }}
        initial={{ opacity: -10 }}
        transition={{
          type: "tween",
          duration: 0.3,
          staggerChildren: 0.2,
        }}
        whileInView={{ opacity: 1 }}
        className="relative"
      >
        <img
          src="/assets/DSCF3040-removebg-preview.png"
          alt="My image file description"
          width="208"
          height="208"
          className="w-48 md:w-auto h-auto mx-auto object-contain mt-10 z-10 "
          fetchpriority="high"
          sizes="(max-width: 600px) 200px, 50vw"
        />
        <div className="h-40 md:h-96 absolute w-full bg-gradient-to-t from-[#262626] dark:from-[#f5f5ff] from-20% to-transparent bottom-0"></div>
      </motion.div>
      <div className="absolute overflow-y-auto max-w-[100%] bottom-12 md:space-y-20">
        {/* top contain fitur run*/}
        <div className="flex justify-center items-center gap-4 mb-10 md:mb-20">
          {/* img end desc */}
          <motion.div
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.4,
                ease: "easeInOut",
              },
            }}
            initial={{
              opacity: 0,
            }}
            className="flex items-center space-x-3"
          >
            <img
              src="./assets/icon/logo192.webp"
              alt=""
              className="md:w-16 w-9 md:h-16 h-9 bg-white dark:bg-yellow-300 rounded-full p-1 object-contain"
            />
            <p className="text-neutral-300 dark:text-neutral-500 text-base font-bold">Rect.js</p>
          </motion.div>
          <motion.div
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.5,
                ease: "easeInOut",
              },
            }}
            initial={{
              opacity: 0,
            }}
            className="flex items-center space-x-3"
          >
            <img
              src="./assets/icon/framer.svg"
              alt=""
              className="md:w-16 w-9 md:h-16 h-9 bg-white dark:bg-yellow-300 rounded-full p-1 object-contain"
            />
            <p className="text-neutral-300 dark:text-neutral-500 text-base font-bold">Rect.js</p>
          </motion.div>
        </div>
        {/* run text */}
        <div>
          <ParallaxText baseVelocity={5}>portofolio</ParallaxText>
          <hr />
          <ParallaxText baseVelocity={-5}>Frontend developer</ParallaxText>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
