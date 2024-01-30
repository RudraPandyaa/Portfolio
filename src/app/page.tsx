import BentoGrid from "@/components/modules/BentoGrid/BentoGrid";
import NameCard from "@/components/modules/NameCard/NameCard";
import TechStack from "@/components/modules/TechStack/TechStack";
import { UiWrapper } from "@/components/shared";

export default function Home() {
  return (
    <>
      <NameCard />

      <TechStack />

      <BentoGrid />
    </>
  );
}
