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
import { collageData } from "../../../../constants/data";
import { Button } from "@/components/ui/button";
import { Dot, ExternalLink } from "lucide-react";

const EducationCard: React.FC = () => {
  const ref2 = useRef(null);
  const isInView = useInView(ref2, { amount: 0.5, once: false });
  return (
    <UiWrapper className="min-h-screen ">
      <div className="grid md:grid-cols-2 gap-4 md:px-28 text-center">
        <div className="px-2 py-5">
          <div className="px-2 py-2">Skill Based Education</div>

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

        <div className="px-2 py-5">
          <div className="px-2 py-2">Formal Education</div>
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

      <div className="grid md:grid-cols-3 gap-5 md:px-32 grid-col-1">
        <Card>
          <CardHeader>
            <CardTitle>Next Js 14</CardTitle>
            <CardDescription>Youtube</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>React Crash Course</CardTitle>
            <CardDescription>Dave Gray | Youtube</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tanstack Query</CardTitle>
            <CardDescription>lorem ipsum</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Zustland</CardTitle>
            <CardDescription>lorem ipsum</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Redux</CardTitle>
            <CardDescription>lorem ipsum</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </UiWrapper>
  );
};

export default EducationCard;
