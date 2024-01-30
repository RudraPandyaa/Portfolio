import { UiWrapper } from "@/components/shared";
import CardWrapper from "@/components/shared/CardWrapper";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import dayjs from "dayjs";

const BentoGrid = () => {
  // const currentDate = new Date();

  // const startDate = new Date("April 2023");

  // const monthsDiff =
  //   (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
  //   currentDate.getMonth() -
  //   startDate.getMonth();

  // const years = Math.floor(monthsDiff / 12);
  // const remainingMonths = monthsDiff % 12;

  //TODO: FIX THIS CALCULATION

  const currentDate = dayjs();

  const startDate = dayjs("2023-04-01");

  const monthsDiff = currentDate.diff(startDate, "month");

  const years = Math.floor(monthsDiff / 12);
  const remainingMonths = monthsDiff % 12;

  const experienceText = `Total of ${years} years and ${remainingMonths} months of experience in Corporate`;

  console.log("years", years);
  console.log("remainingMonths", remainingMonths);

  return (
    <UiWrapper>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          {/* //TODO: Make this dynamic as per the months spent in devstree */}
          <Card className="w-full h-full">
            <CardHeader className="text-center">
              <CardTitle>Experience</CardTitle>
              <CardDescription>
                Total of 1 year and 9 Months of experience in Corporate
              </CardDescription>
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
                  Customer Service Team Lead | Jan 2022 - Nov 2022 <br />
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
