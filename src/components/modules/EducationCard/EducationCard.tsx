"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

import { UiWrapper } from "@/components/shared";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { collageData } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { Dot, ExternalLink } from "lucide-react";

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
          duration: 0.5,
        }}
        className="text-center text-2xl"
      >
        <div className="grid grid-cols-2 gap-4 px-28 h-screen">
          <div className="px-2 py-5 h-full">
            <div
              className="px-2 py-2
                "
            >
              Skill Based Education
            </div>

            <Card className="px-2 py-5 mb-4">
              <CardHeader>
                <CardTitle>
                  <span className="text-amber-200"> Full Stack Web Dev </span> |
                  Udemy
                </CardTitle>
                <CardDescription>By Angela Yu</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus ipsam voluptatibus suscipit natus impedit dolore
                  repudiandae, odit molestiae animi aliquam eos dolorum cumque
                  quasi itaque praesentium reiciendis rerum velit esse.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between w-full items-center text-sm">
                  <div className="text-muted-foreground">View Course</div>
                  <Button variant={"ghost"}>
                    <ExternalLink size={20} />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="px-2 py-5 mb-4 h-full">
            <div
              className="px-2 py-2
                "
            >
              Formal Education
            </div>
            {/* <CardDescription className="px-2 py-2">
            
            </CardDescription>
            <div className="flex flex-col justify-start items-start text-start pl-7">
              <div className="flex justify-center items-center">
                <div className="rounded-full w-2 h-2 bg-sky-300 mr-3"></div>

                <div>{collageData.collage}</div>
              </div>
              <p className="text-sm text-zinc-400">{collageData.degree}</p>
              <p className="text-sm text-zinc-500">
                {collageData.startDate} - {collageData.endDate}
              </p>
            </div> */}
            <Card className="px-2 py-5">
              <CardHeader>
                <CardTitle>
                  <span className="text-teal-200"> Btech IT</span> |{" "}
                  {collageData.collage}
                </CardTitle>
                <CardDescription>{collageData.degree}</CardDescription>
                <CardDescription>
                  {collageData.startDate} - {collageData.endDate}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus ipsam voluptatibus suscipit natus impedit dolore
                  repudiandae, odit molestiae animi aliquam eos dolorum cumque
                  quasi itaque praesentium reiciendis rerum velit esse.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between w-full items-center text-sm">
                  <div className="text-muted-foreground">View Course</div>
                  <Button variant={"ghost"}>
                    <ExternalLink size={20} />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </motion.div>
    </UiWrapper>
  );
};

export default EducationCard;
