import { UiWrapper } from "@/components/shared";
import { Card } from "@/components/ui/card";
import AnimatedName from "./_components/AnimatedName";

const NameCard = () => {
  return (
    <UiWrapper>
      <Card className="flex flex-col justify-center items-center h-[620px]">
        <h1 className="flex font-bold text-center text-6xl animate-fade-in [--ani-delay:200ms] opacity-0 translate-y-[-1rem]">
          <AnimatedName />
        </h1>
        <h2 className="flex font-bold text-center text-3xl animate-fade-in [--ani-delay:2000ms] opacity-0 translate-y-[-1rem] text-slate-500">
          a Frontend Developer
        </h2>
        <div className="flex"></div>
      </Card>
    </UiWrapper>
  );
};

export default NameCard;
