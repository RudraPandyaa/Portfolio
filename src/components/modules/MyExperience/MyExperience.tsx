import V3Wrapper from "@/components/shared/v3Wrapper";
import { cn } from "@/lib/utils";
import { collageData, experienceData } from "../../../../constants/data";
import Subtitle from "@/components/shared/subtitle";
import SectionTitle from "@/components/shared/section-title";
import { Badge } from "@/components/ui/badge";

export default function MyExperience() {
  const tools = [
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

  const features = [
    "Stripe Payment Integration",
    "Drag and Drop",
    "Calendar View",
    "Comet Chat Integration",
    "Next Auth",
  ];

  const subjects = [
    "Data Structures",
    "Algorithms",
    "Database Management System",
    "Operating System",
    "Computer Networks",
  ];

  const events = [
    "Hack for India Hackathon",
    "IIM Red Brick Summit MUN 2022",
    "Google Developer Student Club Events",
  ];

  return (
    <>
      <V3Wrapper>
        <SectionTitle>Experience & Education</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          <SimpleCard className="col-span-2">
            <div className="flex bg-slate-50 rounded-3xl text-black">
              <div className="text-end w-full ">
                <div className="bg-violet-200 text-violet-800 rounded-l-3xl  w-full p-6 ">
                  <Subtitle>{experienceData[0].subRoles[0].role}</Subtitle>
                  <p className="text-sm">
                    {experienceData[0].company} | April 2023 - Present <br />
                  </p>
                </div>
                <div className="p-4 text-violet-800 font-medium">
                  <h3>₪ Actively engaged in contributing to live projects</h3>
                  <h3>
                    ₪ Used Technologies like{" "}
                    {tools.map((tool, index) => (
                      <Badge
                        key={index}
                        className="bg-violet-200 text-violet-800 text-sm m-2"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </h3>
                  <h3>
                    ₪ Integrated Features like{" "}
                    {features.map((tool, index) => (
                      <Badge
                        key={index}
                        className="bg-violet-200 text-violet-800 text-sm m-2"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </h3>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-[#9ecac9] text-[#0d4644] rounded-r-3xl  w-full p-6">
                  <Subtitle>{collageData.degreeShort}</Subtitle>
                  <p className="text-sm">
                    {collageData.collage} | July 2022 - Present <br />
                  </p>
                </div>
                <div className="p-4 text-[#0d4644] font-medium">
                  <h3>₪ Making connection with ambitions people</h3>
                  <h3>
                    ₪ Studied Subjects like{" "}
                    {subjects.map((tool, index) => (
                      <Badge
                        key={index}
                        className="bg-[#b9d2d2] text-[#0d4644]  text-sm m-2"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </h3>
                  <h3>
                    ₪ Participated in{" "}
                    {events.map((tool, index) => (
                      <Badge
                        key={index}
                        className="bg-[#b9d2d2] text-[#0d4644] text-sm m-2"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </h3>
                </div>
              </div>
            </div>
          </SimpleCard>
        </div>
      </V3Wrapper>
    </>
  );
}

const SimpleCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("border rounded-3xl", className)}>{children}</div>;
};
