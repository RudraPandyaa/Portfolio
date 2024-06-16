import { Experience } from "@/components/modules";
import { UiWrapper } from "@/components/shared";
import UnderConstruction from "@/components/shared/under-construction";

const Work = () => {
  if (process.env.NEXT_PUBLIC_DEPLOY === "true") {
    return <UnderConstruction />;
  }

  return (
    <UiWrapper className="h-screen">
      <Experience />
      {/* <Projects /> */}
    </UiWrapper>
  );
};

export default Work;
