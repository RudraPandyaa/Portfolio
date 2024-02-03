import { UiWrapper } from "@/components/shared";
import { Card } from "@/components/ui/card";
import AnimatedName from "./_components/AnimatedName";
import styles from "./NameCard.module.css";

const NameCard = () => {
  return (
    <UiWrapper>
      <div className="overflow-hidden">
        <Card className="flex flex-col justify-center items-center h-[620px]">
          <h1 className="flex font-bold text-center text-4xl  sm:text-4xl xl:text-6xl md:text-5xl lg:text-5xl  animate-fade-in [--ani-delay:200ms] opacity-0 translate-y-[-1rem]">
            <AnimatedName />
          </h1>
          <h2 className="flex font-bold text-center xl:text-3xl md:text-2xl text-sm animate-fade-in [--ani-delay:2000ms] opacity-0 translate-y-[-1rem] text-slate-500">
            a Frontend Developer
          </h2>
          <div className="flex"></div>
          <div className={styles.topBlur} />
          <div className={styles.bottomBlur} />
        </Card>
      </div>
    </UiWrapper>
  );
};

export default NameCard;
