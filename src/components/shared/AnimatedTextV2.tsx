"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedTextV2: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.svg
        viewBox="0 0 1320 300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full"
      >
        <motion.text
          x="50%"
          y="50%"
          dy=".35em"
          textAnchor="middle"
          initial={{
            strokeDasharray: "0 50%",
            strokeDashoffset: "25%",
            strokeWidth: 2,
            fill: "rgba(255, 255, 255, 0)",
            stroke: "#3B82F6", // Tailwind's blue-500
          }}
          animate={{
            strokeDashoffset: "-25%",
            strokeDasharray: "50% 0",
            strokeWidth: 0,
            fill: "rgba(96, 165, 250, 1)", // Tailwind's blue-400
            stroke: "rgba(96, 165, 250, 0)",
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="uppercase text-[300px] sm:text-[340px] font-bold"
        >
          faizanahmed
        </motion.text>
      </motion.svg>
    </div>
  );
};

export default AnimatedTextV2;
