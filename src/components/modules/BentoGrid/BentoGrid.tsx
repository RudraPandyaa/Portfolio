"use client";

import { UiWrapper } from "@/components/shared";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import totalCorporateExperience from "@/lib/calculateTotalExperience";

import dayjs from "dayjs";
import { use, useEffect, useState } from "react";

const BentoGrid = () => {
  const [totalExpText, setTotalExpText] = useState("");

  useEffect(() => {
    const calculateTotalExperience = async () => {
      const totalExperience = await totalCorporateExperience();
      setTotalExpText(totalExperience);
    };

    calculateTotalExperience();
  }, []);

  return (
    <UiWrapper>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          {/* //TODO: Make this dynamic as per the months spent in devstree */}
          <Card className="w-full h-full">
            <CardHeader className="text-center">
              <CardTitle>Experience</CardTitle>
              <CardDescription>{totalExpText}</CardDescription>
            </CardHeader>
            <div className="grid grid-cols-2 gap-4 px-6 pb-4">
              <Card className="px-2 py-5">
                <CardTitle
                  className="px-2 py-2
                "
                >
                  Devstree It Services
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
                  Viji Foods
                </CardTitle>
                <CardDescription className="px-2 py-2">
                  Team Lead Customer Service | Jan 2022 - Nov 2022 <br />
                </CardDescription>
              </Card>
            </div>
          </Card>
        </div>
        <div>
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
        </div>
      </div>
    </UiWrapper>
  );
};

export default BentoGrid;
