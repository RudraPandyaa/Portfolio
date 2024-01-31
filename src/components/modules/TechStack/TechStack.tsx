"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

import { UiWrapper } from "@/components/shared";
import { Card } from "@/components/ui/card";

const TechStack = () => {
  const ref3 = useRef(null);
  const isInView = useInView(ref3, { once: false });

  const techStack = [
    "TypeScript",
    "Next JS",
    "React Js",
    "Svelte",
    "Ionic",
    "Tailwind CSS",
  ] as const;

  return (
    <UiWrapper>
      <motion.div
        ref={ref3}
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
        <Card>
          <div className="p-10 grid grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div className="col-span-1" key={index}>
                <div className="flex justify-center items-center h-14 min-w-20 bg-slate-500 rounded-full">
                  <p className="text-white font-bold text-xl">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </UiWrapper>
  );
};

export default TechStack;
