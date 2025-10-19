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
import { collageData, collageDataMCA } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { Dot, ExternalLink } from "lucide-react";

const EducationCard: React.FC = () => {
  const ref2 = useRef(null);
  const isInView = useInView(ref2, { amount: 0.5, once: false });
  return (
    <UiWrapper className="min-h-screen">
  {/* Skill Based Learning Section */}
  <div className="px-2 py-5">
    <h2 className="text-2xl font-bold mb-4 text-center">Skill Based Learning</h2>
    <div className="grid md:grid-cols-2 gap-4 md:px-28 text-center">
      
      {/* Course 1: Data Structures + Algorithms */}
      <Card className="flex flex-col px-2 py-5 h-[300px]">
        <CardHeader>
          <CardTitle>
            <span className="text-amber-200">Data Structures + Algorithms</span> | Udemy
          </CardTitle>
          <CardDescription>By Andrei Neagoie</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm">
            Gain strong fundamentals in data structures, algorithms, and Big O notation, along with essential interview preparation and career skills to excel in technical interviews and land top tech jobs.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <div className="flex justify-between w-full items-center text-sm">
            <div className="text-muted-foreground">View Course</div>
            <Button variant={"ghost"}>
              <ExternalLink size={20} />
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Course 2: 100 Days of Code: Python */}
      <Card className="flex flex-col px-2 py-5 h-[300px]">
        <CardHeader>
          <CardTitle>
            <span className="text-amber-200">100 Days of Code: Python Bootcamp</span> | Udemy
          </CardTitle>
          <CardDescription>By Dr. Angela Yu</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm">
            Learn Python programming from scratch, build real-world projects, and strengthen problem-solving skills to become a confident Python developer.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
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

  {/* Formal Education Section */}
  <div className="px-2 py-5">
    <h2 className="text-2xl font-bold mb-4 text-center">Education</h2>
    <div className="grid md:grid-cols-2 gap-4 md:px-28 text-center">

      {/* MCA */}
      <Card className="flex flex-col px-2 py-5 h-[300px]">
        <CardHeader>
          <CardTitle>
            <span className="text-teal-200">MCA</span> | {collageDataMCA.collage}
          </CardTitle>
          <CardDescription>{collageDataMCA.degree}</CardDescription>
          <CardDescription>
            {collageDataMCA.startDate} - {collageDataMCA.endDate}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm">
            Currently exploring the fundamental concepts of computer science and programming, including data structures, algorithms, and software development principles. Gaining a strong foundation in logical thinking, problem-solving, and hands-on coding practices through continuous learning and experimentation. 
          </p>
        </CardContent>
      </Card>

      {/* BCA */}
      <Card className="flex flex-col px-2 py-5 h-[300px]">
        <CardHeader>
          <CardTitle>
            <span className="text-teal-200">BCA</span> | {collageData.collage}
          </CardTitle>
          <CardDescription>{collageData.degree}</CardDescription>
          <CardDescription>
            {collageData.startDate} - {collageData.endDate}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm">
             Acquired a solid understanding of core computer science and programming fundamentals, covering topics such as algorithms, data structures, and object-oriented design. Developed the ability to analyze problems logically and implement efficient code solutions through consistent practice and project-based learning. 
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
    </UiWrapper>
  );
};

export default EducationCard;
