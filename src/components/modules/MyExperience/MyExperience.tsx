// components/shared/MyExperience.tsx

import V3Wrapper from "@/components/shared/v3Wrapper";
import { cn } from "@/lib/utils";
import { collageData, experienceData } from "@/constants/data";
import Subtitle from "@/components/shared/subtitle";
import SectionTitle from "@/components/shared/section-title";
import { Badge } from "@/components/ui/badge";
import React from "react";

const TOOLS = [
  "zustand",
  "tanstack query",
  "lodash",
  "dayjs",
  "tailwind",
  "zod",
  "stripe",
  "redux",
  "theme forest",
  "comet chat",
  "drag and drop",
  "calendar view",
];

const FEATURES = [
  "Stripe Payment Integration",
  "Drag and Drop",
  "Calendar View",
  "Comet Chat Integration",
  "Next Auth",
];

const SUBJECTS = [
  "Data Structures",
  "Algorithms",
  "Database Management System",
  "Operating System",
  "Computer Networks",
];

const EVENTS = [
  "Hack for India Hackathon",
  "IIM Red Brick Summit MUN 2022",
  "Google Developer Student Club Events",
];

// 🔁 Reusable BadgeList Component
const BadgeList = ({
  items,
  className,
}: {
  items: string[];
  className: string;
}) => (
  <>
    {items.map((item, index) => (
      <Badge key={index} className={cn("text-sm m-2", className)}>
        {item}
      </Badge>
    ))}
  </>
);

// 🔁 Reusable InfoSection Component
const InfoSection = ({
  title,
  subtitle,
  duration,
  badgesTitle,
  badgeItems,
  badgeStyle,
  extraContent,
  containerStyle,
  textStyle,
}: {
  title: string;
  subtitle: string;
  duration: string;
  badgesTitle: string;
  badgeItems: string[];
  badgeStyle: string;
  extraContent?: React.ReactNode;
  containerStyle: string;
  textStyle: string;
}) => (
  <div className={containerStyle}>
    <div className={cn("p-6", badgeStyle)}>
      <Subtitle>{title}</Subtitle>
      <p className="text-sm">
        {subtitle} | {duration}
      </p>
    </div>
    <div className={cn("p-4 font-medium", textStyle)}>
      <h3>₪ {badgesTitle}</h3>
      <BadgeList items={badgeItems} className={badgeStyle} />
      {extraContent}
    </div>
  </div>
);

// 🧠 Main Component
export default function MyExperience() {
  return (
    <V3Wrapper>
      <SectionTitle>Experience & Education</SectionTitle>

      <div className="grid md:grid-cols-2 gap-4">
        <SimpleCard className="col-span-2">
          <div className="flex flex-col md:flex-row bg-blue-100 text-black rounded-3xl">
            {/* 🚀 Experience Section */}
            <InfoSection
              title={experienceData[0].subRoles[0].role}
              subtitle={experienceData[0].company}
              duration="April 2023 - Present"
              badgesTitle="Actively engaged in contributing to live projects using:"
              badgeItems={TOOLS}
              badgeStyle="bg-violet-800 text-violet-200"
              containerStyle="md:text-end w-full"
              textStyle="text-violet-800"
              extraContent={
                <div>
                  <h3>₪ Integrated Features like</h3>
                  <BadgeList
                    items={FEATURES}
                    className="bg-violet-800 text-violet-200"
                  />
                </div>
              }
            />

            {/* 🎓 Education Section */}
            <InfoSection
              title={collageData.degreeShort}
              subtitle={collageData.collage}
              duration="July 2022 - Present"
              badgesTitle="Studied Subjects like"
              badgeItems={SUBJECTS}
              badgeStyle="bg-[#b9d2d2] text-[#0d4644]"
              containerStyle="w-full"
              textStyle="text-[#0d4644]"
              extraContent={
                <div>
                  <h3>₪ Participated in</h3>
                  <BadgeList
                    items={EVENTS}
                    className="bg-[#b9d2d2] text-[#0d4644]"
                  />
                  <h3>₪ Making connections with ambitious people</h3>
                </div>
              }
            />
          </div>
        </SimpleCard>
      </div>
    </V3Wrapper>
  );
}

// 💡 Card Wrapper
const SimpleCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("border rounded-3xl overflow-hidden", className)}>
      {children}
    </div>
  );
};
