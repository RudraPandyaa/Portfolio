"use client";

import { motion } from "framer-motion";

const AnimatedName = () => {
  const text = "F a i z a n a h m e d".split(" ");

  return (
    <div className="flex">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedName;
