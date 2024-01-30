import BentoGrid from "@/components/modules/BentoGrid/BentoGrid";
import NameCard from "@/components/modules/NameCard/NameCard";
import TechStack from "@/components/modules/TechStack/TechStack";
import { UiWrapper } from "@/components/shared";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <NameCard />

      <TechStack />

      {/* <UiWrapper>
        <div className="grid grid-cols-2 gap-4 ">
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
      </UiWrapper> */}

      <BentoGrid />
    </>
  );
}
