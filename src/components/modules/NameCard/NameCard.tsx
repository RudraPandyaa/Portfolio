import { UiWrapper } from "@/components/shared";
import { Card } from "@/components/ui/card";
import AnimatedName from "./_components/AnimatedName";
import styles from "./NameCard.module.css";
import { FluentEmojiFlatWavingHand } from "@/lib/icons/hey-icon";
import SocialGrid from "../SocialGrid/SocialGrid";
import dynamic from "next/dynamic";
import AnimatedTextV2 from "@/components/shared/AnimatedTextV2";
import AnimatedText from "@/components/shared/AnimatedText";
import CyberpunkText from "@/components/shared/CyberPunkText";

const NameCard = () => {
  const getGreeting = () => {
    const time = new Date().getHours();

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
          <h1 className="flex font-bold text-center text-4xl  sm:text-4xl xl:text-6xl md:text-5xl lg:text-5xl  animate-fade-in [--ani-delay:200ms] opacity-0 translate-y-[-1rem]">
            <AnimatedName />
          </h1>
          <h2 className="flex font-bold text-center xl:text-3xl md:text-2xl text-sm animate-fade-in [--ani-delay:2000ms] opacity-0 translate-y-[-1rem] text-slate-500">
            a Frontend Developer
          </h2>

          <div className={styles.topBlur} />
          <div className={styles.bottomBlur} />
        </div>
      </div>
    </UiWrapper>
  );
};

export default dynamic(() => Promise.resolve(NameCard), {
  ssr: false,
  loading: () => (
    <div className="h-[620px] flex justify-center items-center">Loading...</div>
  ),
});
