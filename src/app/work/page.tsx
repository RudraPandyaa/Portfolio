import { Experience } from "@/components/modules";
import UnderConstruction from "@/components/shared/under-construction";

const Work = () => {
  if (process.env.NEXT_PUBLIC_DEPLOY === "true") {
    return <UnderConstruction />;
  }

  return <Experience />;
};

export default Work;
