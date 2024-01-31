import BentoGrid from "@/components/modules/BentoGrid/BentoGrid";
import EducationCard from "@/components/modules/EducationCard/EducationCard";
import NameCard from "@/components/modules/NameCard/NameCard";
import TechStack from "@/components/modules/TechStack/TechStack";
import { UiWrapper } from "@/components/shared";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <NameCard />

      <TechStack />

      <BentoGrid />
      <EducationCard />
    </>
  );
}
