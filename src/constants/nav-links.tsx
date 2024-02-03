import { FluentEmojiFlatBriefcase } from "@/lib/icons/breaf-case";
import { FluentEmojiFlatGraduationCap } from "@/lib/icons/education";
import { FluentEmojiFlatHouse } from "@/lib/icons/house";
import { FluentEmojiFlatMemo } from "@/lib/icons/memo";

export const navLinks = [
  {
    icon: <FluentEmojiFlatHouse />,
    href: "/",
    text: "Home",
  },
  {
    icon: <FluentEmojiFlatGraduationCap />,
    href: "/education",
    text: "Education",
  },
  {
    icon: <FluentEmojiFlatBriefcase />,
    href: "/work",
    text: "Work",
  },
  {
    icon: <FluentEmojiFlatMemo />,
    href: "https://faizanahmed.hashnode.dev/",
    text: "Blogs",
  },
] as const;
