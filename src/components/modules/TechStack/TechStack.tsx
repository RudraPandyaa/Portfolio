import { UiWrapper } from "@/components/shared";
import { Card } from "@/components/ui/card";
import React from "react";

const TechStack = () => {
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
    </UiWrapper>
  );
};

export default TechStack;
