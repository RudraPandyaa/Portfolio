"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify-icon/react";
import dynamic from "next/dynamic";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const langIconSize = {
    fontSize: "70px",
  };
  4;
  const mobileLangIconSize = {
    fontSize: "60px",
  };
  const frameWorkIconSize = {
    fontSize: "50px",
  };

  const mobileFrameWorkIconSize = {
    fontSize: "50px",
  };

  const libraryIconSize = {
    fontSize: "66px",
  };

  const mobileLibraryIconSize = {
    fontSize: "46px",
  };

  const techStack = [
    "TypeScript",
    "Next JS",
    "React Js",
    "Svelte",
    "Ionic",
    "Tailwind CSS",
  ] as const;

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
      <div className="h-full grid xl:grid-cols-3 lg:grid-cols-2 gap-4 mt-14 md:px-32 px-0">
        <Card>
          <CardHeader>
            <CardTitle className="text-rose-50">Languages</CardTitle>
          </CardHeader>
          <div className="p-5 md:flex justify-center gap-5 hidden">
            <Icon icon="skill-icons:typescript" style={langIconSize} />
            <Icon icon="skill-icons:javascript" style={langIconSize} />
            <Icon icon="skill-icons:java-dark" style={langIconSize} />
            <div className="bg-zinc-900 rounded-2xl h-[4.2rem]">
              <Icon icon="mdi:language-c" style={langIconSize} />
            </div>
          </div>

          <div className="p-5 md:hidden flex justify-center gap-5">
            <Icon icon="skill-icons:typescript" style={mobileLangIconSize} />
            <Icon icon="skill-icons:javascript" style={mobileLangIconSize} />
            <Icon icon="skill-icons:java-dark" style={mobileLangIconSize} />
            <div className="bg-zinc-900 rounded-2xl h-[4.2rem]">
              <Icon icon="mdi:language-c" style={mobileLangIconSize} />
            </div>
          </div>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-green-100">Frameworks</CardTitle>
          </CardHeader>
          <div
            className="p-5 md:flex justify-center gap-5 hidden 
            "
          >
            <Icon icon="devicon:nextjs" style={frameWorkIconSize} />
            <Icon icon="logos:react" style={frameWorkIconSize} />
            <Icon icon="logos:ionic-icon" style={frameWorkIconSize} />
            <Icon icon="devicon:svelte" style={frameWorkIconSize} />
          </div>

          <div
            className="p-5 md:hidden justify-center gap-5 flex 
            "
          >
            <Icon icon="devicon:nextjs" style={mobileFrameWorkIconSize} />
            <Icon icon="logos:react" style={mobileFrameWorkIconSize} />
            <Icon icon="logos:ionic-icon" style={mobileFrameWorkIconSize} />
            <Icon icon="devicon:svelte" style={mobileFrameWorkIconSize} />
          </div>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lime-50">Libraries</CardTitle>
          </CardHeader>
          <div
            className="p-5 hidden md:flex justify-center gap-5 
            "
          >
            <Icon icon="logos:ant-design" style={libraryIconSize} />
            <Icon icon="simple-icons:shadcnui" style={libraryIconSize} />
            <Icon icon="devicon:tailwindcss" style={libraryIconSize} />
            <Icon icon="simple-icons:mui" style={libraryIconSize} />
          </div>

          <div
            className="p-5 md:hidden flex justify-center gap-5
            "
          >
            <Icon icon="logos:ant-design" style={mobileLibraryIconSize} />
            <Icon icon="simple-icons:shadcnui" style={mobileLibraryIconSize} />
            <Icon icon="devicon:tailwindcss" style={mobileLibraryIconSize} />
            <Icon icon="simple-icons:mui" style={mobileLibraryIconSize} />
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default TechStack;
