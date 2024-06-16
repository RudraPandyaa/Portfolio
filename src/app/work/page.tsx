import { Experience } from "@/components/modules";
import { UiWrapper } from "@/components/shared";
import UnderConstruction from "@/components/shared/under-construction";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experienceData } from "../../../constants/data";

const Work = () => {
  if (process.env.NEXT_PUBLIC_DEPLOY === "true") {
    return <UnderConstruction />;
  }

  return (
    <UiWrapper className="min-h-screen">
      <Experience />
    </UiWrapper>
  );
};

export default Work;
