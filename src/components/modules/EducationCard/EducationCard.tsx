"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

import { UiWrapper } from "@/components/shared";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { collageData } from "@/constants/data";

const EducationCard: React.FC = () => {
  const ref2 = useRef(null);
  const isInView = useInView(ref2, { amount: 0.5, once: false });
  return (
    <UiWrapper>
      <motion.div
        ref={ref2}
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
          duration: 0.7,
        }}
        className="text-center text-2xl"
      >
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <Card className="px-2 py-5">
              <CardTitle
                className="px-2 py-2
                "
              >
                Skill Based Education
              </CardTitle>

              <Card className="px-2 py-5 mb-4">
                <CardTitle
                  className="px-2 py-2
                "
                >
                  {/* MERN Stack Web Development Bootcamp by Angela Yu */}
                  Lorem ipsum dolor sit.
                </CardTitle>
                <CardDescription className="px-2 py-2">
                  foo | April 2023 - Present <br />
                </CardDescription>
              </Card>
              <Card className="px-2 py-5">
                <CardTitle
                  className="px-2 py-2
                "
                >
                  Lorem ipsum dolor sit amet consectetur.
                </CardTitle>
                <CardDescription className="px-2 py-2">
                  foo | April 2023 - Present <br />
                </CardDescription>
              </Card>
            </Card>
          </Card>
          <Card className="px-2 py-5">
            <CardTitle
              className="px-2 py-2
                "
            >
              Formal Education
            </CardTitle>
            <CardDescription className="px-2 py-2">
              {/* Bachelor of Technology in Information Technology | April 2023 -
                Present <br /> */}
            </CardDescription>
            <div className="flex flex-col justify-start items-start text-start pl-7">
              <p>{collageData.collage}</p>
              <p className="text-sm text-zinc-400">{collageData.degree}</p>
              <p className="text-sm text-zinc-500">
                {collageData.startDate} - {collageData.endDate}
              </p>
            </div>
          </Card>
        </div>
      </motion.div>
    </UiWrapper>
  );
};

export default EducationCard;
