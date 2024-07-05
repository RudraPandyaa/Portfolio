import { Experience, UiWrapper } from "@/components";

const Work = () => {
  // if (process.env.NEXT_PUBLIC_DEPLOY === "true") {
  //   return <UnderConstruction />;
  // }

  return (
    <UiWrapper className="min-h-screen">
      <Experience />
    </UiWrapper>
  );
};

export default Work;
