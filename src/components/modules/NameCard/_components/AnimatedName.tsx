"use client";

import { motion } from "framer-motion";

const AnimatedName = () => {
  const pretext = "Hey I am ";
  const text = "R u d r a".split(" ");

  return (
    <div className="flex">
      {/* <span>
        {pretext} <br />{" "}
      </span>{" "} */}
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
