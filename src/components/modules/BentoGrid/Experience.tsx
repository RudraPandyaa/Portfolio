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
                className="grid place-items-center 
                xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 
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
                      {experienceData[0].subRoles[0].role} | May 2024 -
                      May 2025 <br />
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-lg text-start">
                    <div>
                      Contributed to live,{" "}
                      <span className="text-black"> production-quality projects</span> during
                      my internship at{" "}
                      <span className="text-black">Devstree IT Services</span>. Concentrated on
                      applying <span className="text-black">Clean Code</span> guidelines to
                      increase software{" "}
                      <span className="text-black">
                        scalability, maintainability, and performance
                      </span>
                      . Coordinated with{" "}
                      <span className="text-black">lead developers</span> to convert client&apos;s
                      requirements into{" "}
                      <span className="text-black">efficient, high-quality code</span> and
                      delivered project milestones timely with{" "}
                      <span className="text-black">technical excellence</span>.
                    </div>
                  </CardContent>

                </Card>
                {/* <Card className="px-2 py-5 bg-violet-200 text-violet-800">
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
                </Card> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </UiWrapper>
  );
};

export default Experience;
