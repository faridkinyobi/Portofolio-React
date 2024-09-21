import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
  } from "framer-motion";
export default function ParallaxText({children}) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 100,
      stiffness: 500,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });
    const wrap = (min, max, value) => {
      const range = max - min;
      return ((((value - min) % range) + range) % range) + min;
    };
    const fontStyle = useTransform(
      velocityFactor,
      [0, 0.7, 1],
      ["italic", "normal", "italic"]
    );
  
    const directionFactor = useRef(1);
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    const baseVelocity = 6
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
      baseX.set(baseX.get() + moveBy);
    });
  
    return (
      <div className="parallax overflow-hidden whitespace-nowrap flex flex-nowra bg-slate-300/15">
        <motion.div
          className="text-white whitespace-nowrap flex flex-nowrap font-extrabold m-0 md:text-[7rem] text-[3rem] uppercase -tracking-2 leading-tight space-x-10 dark:text-neutral-500"
          style={{ x, fontStyle, whiteSpace: "nowrap" }}
        >
          <span className="">{children} </span>
          <span className="">{children} </span>
          <span className="">{children} </span>
          <span className=" ">{children} </span>
          <span className="">{children} </span>
          <span className="">{children} </span>
        </motion.div>
      </div>
    );
  }
  