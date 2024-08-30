"use client";

import { UiWrapper } from "@/components/shared";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import totalCorporateExperience from "@/lib/calculateTotalExperience";
import { motion, useInView } from "framer-motion";

import { useEffect, useMemo, useRef, useState } from "react";
import { experienceData } from "../../../constants/data";

const Experience = () => {
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
      <div className="text-center text-2xl font-bold">
        <div className="grid grid-cols-3 gap-4  md:px-28 px-0">
          <div className="col-span-3">
            <div className="w-full">
              <CardHeader className="text-center">
                <CardTitle>Experience</CardTitle>
                <CardDescription>
                  {isLoading ? "Loading..." : totalExpText}
                </CardDescription>
              </CardHeader>
              <div
                className="grid xl:grid-cols-2
               lg:grid-cols-2  md:grid-cols-1
               sm:grid-cols-1
              gap-4 md:px-6 pb-4"
              >
                <Card className="px-2 py-5 bg-[#9ecac9] text-[#0d4644]">
                  <CardHeader>
                    <CardTitle
                      className="px-2 py-2 
                    "
                    >
                      Devstree IT Services
                    </CardTitle>
                    <CardDescription className="px-2 py-2 text-teal-800">
                      {experienceData[0].subRoles[0].role} | April 2023 -
                      Present <br />
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-lg text-start">
                    <div>
                      Actively engaged in contributing to
                      <span className="text-black">
                        {" "}
                        large-scale live projects{" "}
                      </span>{" "}
                      , where I focus on implementing{" "}
                      <span className="text-black">Clean Code</span> principles
                      to ensure the robustness and maintainability of the
                      software dedicated to achieving client satisfaction by
                      translating project requirements into{" "}
                      <span className="text-black">
                        efficient and effective{" "}
                      </span>{" "}
                      code solutions
                    </div>
                  </CardContent>
                </Card>
                <Card className="px-2 py-5 bg-violet-200 text-violet-800">
                  <CardHeader>
                    <CardTitle
                      className="px-2 py-2 
                    "
                    >
                      Viji Foods
                    </CardTitle>
                    <CardDescription className="px-2 py-2 text-violet-950">
                      Team Lead Customer Service | Jan 2022 - Nov 2022 <br />
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-lg text-start ">
                    <div>
                      <span className="text-indigo-950">Lead a team</span> of
                      customer service representatives overseeing dynamic
                      professionals dedicated to providing exceptional service
                      to a renowned food chain, As the team lead for the
                      drive-through service, my responsibilities extended to
                      managing and coordinating order-taking processes to ensure
                      a seamless and efficient customer experience.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UiWrapper>
  );
};

export default Experience;
