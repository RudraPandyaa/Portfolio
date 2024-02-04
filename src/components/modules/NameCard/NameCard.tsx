import { UiWrapper } from "@/components/shared";
import { Card } from "@/components/ui/card";
import AnimatedName from "./_components/AnimatedName";
import styles from "./NameCard.module.css";
import { FluentEmojiFlatWavingHand } from "@/lib/icons/hey-icon";

const NameCard = () => {
  const getGreeting = () => {
    const time = new Date().getHours();

    console.log("time", time);

    if (time < 12) {
      return "Morning";
    } else if (time < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  const greeting = getGreeting();

  return (
    <UiWrapper>
      <div className="overflow-hidden">
        <div className="flex flex-col justify-center items-center h-[620px]">
          {/* <h2 className="flex font-bold gap-2 items-center text-center xl:text-3xl md:text-2xl text-sm animate-reverse-fade-in [--ani-delay:0ms] opacity-0 translate-y-[-1rem] text-slate-500">
            <div>
              <FluentEmojiFlatWavingHand />
            </div>
            <div>Hey, Good {greeting} I&apos;m</div>
          </h2> */}
          <h1 className="flex font-bold text-center text-4xl  sm:text-4xl xl:text-6xl md:text-5xl lg:text-5xl  animate-fade-in [--ani-delay:200ms] opacity-0 translate-y-[-1rem]">
            <AnimatedName />
          </h1>
          <h2 className="flex font-bold text-center xl:text-3xl md:text-2xl text-sm animate-fade-in [--ani-delay:2000ms] opacity-0 translate-y-[-1rem] text-slate-500">
            a Frontend Developer
          </h2>
          <div className="flex"></div>
          <div className={styles.topBlur} />
          <div className={styles.bottomBlur} />
        </div>
      </div>
    </UiWrapper>
  );
};

export default NameCard;
