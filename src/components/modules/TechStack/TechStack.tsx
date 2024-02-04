"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

import { UiWrapper } from "@/components/shared";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify-icon/react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const langIconSize = {
    fontSize: "70px",
  };

  const frameWorkIconSize = {
    fontSize: "70px",
  };

  const libraryIconSize = {
    fontSize: "66px",
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
    <UiWrapper>
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
        {/* <Card>
          <div className="p-10 grid grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div className="col-span-1" key={index}>
                <div className="flex justify-center items-center h-14 min-w-20 bg-slate-500 rounded-full">
                  <p className="text-white font-bold text-xl">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </Card> */}
        <div className="h-full grid xl:grid-cols-3 lg:grid-cols-2 gap-4 mt-14 px-32">
          <Card>
            <CardHeader>
              <CardTitle className="text-rose-50">Languages</CardTitle>
            </CardHeader>
            <div
              className="p-5 flex justify-center gap-5
            "
            >
              <Icon icon="skill-icons:typescript" style={langIconSize} />
              <Icon icon="skill-icons:javascript" style={langIconSize} />
              <Icon icon="skill-icons:java-dark" style={langIconSize} />
              <div className="bg-zinc-900 rounded-2xl h-[4.2rem]">
                <Icon icon="mdi:language-c" style={langIconSize} />
              </div>
            </div>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-green-100">Frameworks</CardTitle>
            </CardHeader>
            <div
              className="p-5 flex justify-center gap-5
            "
            >
              <Icon icon="devicon:nextjs" style={frameWorkIconSize} />
              <Icon icon="logos:react" style={frameWorkIconSize} />
              <Icon icon="logos:ionic-icon" style={frameWorkIconSize} />
              <Icon icon="devicon:svelte" style={frameWorkIconSize} />
            </div>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lime-50">Libraries</CardTitle>
            </CardHeader>
            <div
              className="p-5 flex justify-center gap-5
            "
            >
              <Icon icon="logos:ant-design" style={libraryIconSize} />
              <Icon icon="simple-icons:shadcnui" style={libraryIconSize} />
              <Icon icon="devicon:tailwindcss" style={libraryIconSize} />
              <Icon icon="simple-icons:mui" style={libraryIconSize} />
            </div>
          </Card>
        </div>
      </motion.div>
    </UiWrapper>
  );
};

export default TechStack;
