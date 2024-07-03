import { EducationCard } from "@/components/modules";
import UnderConstruction from "@/components/shared/under-construction";

const Education = () => {
  if (process.env.NEXT_PUBLIC_DEPLOY === "true") {
    return <UnderConstruction />;
  }

  return <EducationCard />;
};

export default Education;
