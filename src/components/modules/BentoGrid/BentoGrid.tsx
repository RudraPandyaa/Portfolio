"use client";

import { UiWrapper } from "@/components/shared";
import ScrollAnimatedText from "@/components/shared/ScrollAnimatedText/ScrollAnimatedText";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import totalCorporateExperience from "@/lib/calculateTotalExperience";
import { motion, useInView } from "framer-motion";

import { useEffect, useMemo, useRef, useState } from "react";

const BentoGrid = () => {
  const [totalExpText, setTotalExpText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  const memoizedTotalExperience = useMemo(async () => {
    return await totalCorporateExperience();
  }, []);

  useEffect(() => {
    const updateTotalExpText = async () => {
      try {
        setIsLoading(true);
        const result = await memoizedTotalExperience;
        setTotalExpText(result);
      } finally {
        setIsLoading(false);
      }
    };

    updateTotalExpText();
  }, [memoizedTotalExperience]);

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
          duration: 0.6,
        }}
        className="text-center text-2xl font-bold"
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            {/* //TODO: Make this dynamic as per the months spent in devstree */}
            <Card className="w-full h-full">
              <CardHeader className="text-center">
                <CardTitle>
                  {/* <ScrollAnimatedText text="Experience" /> */}
                  Experience
                </CardTitle>
                <CardDescription>
                  {" "}
                  {isLoading ? "Loading..." : totalExpText}
                </CardDescription>
              </CardHeader>
              <div className="grid grid-cols-2 gap-4 px-6 pb-4">
                <Card className="px-2 py-5">
                  <CardTitle
                    className="px-2 py-2
                "
                  >
                    {/* <ScrollAnimatedText text="Devstree IT Services" /> */}
                    Devstree IT Services
                  </CardTitle>
                  <CardDescription className="px-2 py-2">
                    Jr Software Developer | April 2023 - Present <br />
                  </CardDescription>
                </Card>
                <Card className="px-2 py-5">
                  <CardTitle
                    className="px-2 py-2
                "
                  >
                    {/* <ScrollAnimatedText text="Viji Foods" /> */}
                    Viji Foods
                  </CardTitle>
                  <CardDescription className="px-2 py-2">
                    Team Lead Customer Service | Jan 2022 - Nov 2022 <br />
                  </CardDescription>
                </Card>
              </div>
            </Card>
          </div>
          {/* <div>
          <Card
            className="w-full h-full 
           flex justify-center items-center
          "
          >
            <div className="p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aspernatur?
            </div>
          </Card>
        </div>
        <div>
          <Card className="w-full h-full">
            <div className="p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aspernatur?
            </div>
          </Card>
        </div>
        <div>
          <Card className="w-full h-full">
            <div className="p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              aspernatur?
            </div>
          </Card>
        </div> */}
        </div>
      </motion.div>
    </UiWrapper>
  );
};

export default BentoGrid;
