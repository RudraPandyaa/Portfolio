"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const CardScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={
        isInView && {
          opacity: 1,
          y: 0,
        }
      }
      transition={{
        duration: 0.4,
      }}
      className="text-center text-2xl font-bold"
    >
      {children}
    </motion.div>
  );
};

export default CardScrollAnimation;
