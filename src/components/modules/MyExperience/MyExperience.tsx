// components/shared/MyExperience.tsx

import V3Wrapper from "@/components/shared/v3Wrapper";
import { cn } from "@/lib/utils";
import { collageData, collageDataMCA, experienceData } from "@/constants/data";
import Subtitle from "@/components/shared/subtitle";
import SectionTitle from "@/components/shared/section-title";
import { Badge } from "@/components/ui/badge";
import React from "react";

const TOOLS = [
  "TanStack Query",
  "Redux Toolkit",
  "Tailwind CSS",
  "Bootstrap",
  "Axios",
  "Mongoose",
  "Prisma",
  "Type ORM",
  "JWT",
  "Postman",
  "Render",
  "Vercel",
  "OpenAI API",
  "Git & GitHub"
];


const FEATURES = [
  "JWT Authentication",
  "Role-based Access Control",
  "File Uploads & Cloud Storage",
  "Responsive UI with Tailwind",
  "Google OAuth Login"
];

const MCA_SUBJECTS = [
  "Full Stack Web Development",
  "Software Testing Quality Management",
  "Data Warehousing & Mining",
  "Scientific Research Methods",
  "Machine Learning",
];

const SUBJECTS = [
  "Data Structures and Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Artificial Intelligence",
  "Machine Learning",
];


const MCA_EVENTS = [
  "ODDO Workshop and tech community events",
  "Gujarat’s first AI Meetup focused on AI innovation and the regional startup ecosystem."
];

const BCA_EVENTS = [
  "Academic projects and coding sessions"
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
              duration="May 2024 - May 2025"
              badgesTitle="Contributed to live projects using:"
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
              title={collageDataMCA.degreeShort}
              subtitle={collageDataMCA.collage}
              duration={`${collageDataMCA.startDate} - ${collageDataMCA.endDate}`}
              badgesTitle="Studying Subjects like"
              badgeItems={MCA_SUBJECTS}
              badgeStyle="bg-[#b9d2d2] text-[#0d4644]"
              containerStyle="w-full"
              textStyle="text-[#0d4644]"
              extraContent={
                <div>
                  <h3>₪ Participating in</h3>
                  <BadgeList
                    items={MCA_EVENTS}
                    className="bg-[#b9d2d2] text-[#0d4644]"
                  />
                  <h3>₪ Collaborating with ambitious peers</h3>
                </div>
              }
            />
            

            <InfoSection
              title={collageData.degreeShort}
              subtitle={collageData.collage}
              duration="July 2022 - June 2025"
              badgesTitle="Studied Subjects like"
              badgeItems={SUBJECTS}
              badgeStyle="bg-[#b9d2d2] text-[#0d4644]"
              containerStyle="w-full"
              textStyle="text-[#0d4644]"
              extraContent={
                <div>
                  <h3>₪ Participated in</h3>
                  <BadgeList
                    items={BCA_EVENTS}
                    className="bg-[#b9d2d2] text-[#0d4644]"
                  />
                  <h3>₪ Developed teamwork and problem-solving skills</h3>
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
