import { Experience } from "@/components/modules";
import UnderConstruction from "@/components/shared/under-construction";

const Work = () => {
  console.log("process.env.NEXT_PUBLIC_DEPLOY", process.env.NEXT_PUBLIC_DEPLOY);

  if (process.env.NEXT_PUBLIC_DEPLOY === "true") {
    return <UnderConstruction />;
  }

  return <Experience />;
};

export default Work;
