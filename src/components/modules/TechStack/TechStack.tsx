"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify-icon/react";

interface IconSize {
  fontSize: string;
}

interface TechItem {
  name: string;
  icon: string;
  category: "language" | "framework" | "library";
}

const ICON_SIZES = {
  desktop: {
    language: { fontSize: "70px" },
    framework: { fontSize: "70px" },
    library: { fontSize: "66px" },
  },
  mobile: {
    language: { fontSize: "60px" },
    framework: { fontSize: "50px" },
    library: { fontSize: "46px" },
  },
} as const;

const TECH_STACK: TechItem[] = [
  { name: "TypeScript", icon: "skill-icons:typescript", category: "language" },
  { name: "JavaScript", icon: "skill-icons:javascript", category: "language" },
  { name: "Java", icon: "skill-icons:java-dark", category: "language" },
  { name: "Go", icon: "skill-icons:golang", category: "language" },
  { name: "Next.js", icon: "devicon:nextjs", category: "framework" },
  { name: "React", icon: "logos:react", category: "framework" },
  { name: "Ionic", icon: "logos:ionic-icon", category: "framework" },
  { name: "Svelte", icon: "devicon:svelte", category: "framework" },
  { name: "Ant Design", icon: "logos:ant-design", category: "library" },
  { name: "Tailwind CSS", icon: "devicon:tailwindcss", category: "library" },
  { name: "shadcn/ui", icon: "simple-icons:shadcnui", category: "library" },
  { name: "Material-UI", icon: "simple-icons:mui", category: "library" },
];

const TechIcon: React.FC<{
  name: string;
  icon: string;
  iconSize: IconSize;
  showLabel?: boolean;
}> = ({ name, icon, iconSize, showLabel = false }) => (
  <div>
    <Icon icon={icon} style={iconSize} />
    {showLabel && <h6 className="text-sm">{name}</h6>}
  </div>
);

const TechCategory: React.FC<{
  title: string;
  titleColor: string;
  items: TechItem[];
  category: "language" | "framework" | "library";
}> = ({ title, titleColor, items, category }) => (
  <Card>
    <CardHeader>
      <CardTitle className={titleColor}>{title}</CardTitle>
    </CardHeader>

    {/* Desktop View */}
    <div className="p-5 md:flex justify-center gap-5 hidden">
      {items
        .filter((item) => item.category === category)
        .map((item) => (
          <TechIcon
            key={item.name}
            name={item.name}
            icon={item.icon}
            iconSize={ICON_SIZES.desktop[category]}
            showLabel={true}
          />
        ))}
    </div>

    {/* Mobile View */}
    <div className="p-5 md:hidden flex justify-center gap-5">
      {items
        .filter((item) => item.category === category)
        .map((item) => (
          <TechIcon
            key={item.name}
            name={item.name}
            icon={item.icon}
            iconSize={ICON_SIZES.mobile[category]}
          />
        ))}
    </div>
  </Card>
);

const TechStack: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const animationProps = {
    initial: { opacity: 0, y: 100 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.4 },
  };

  return (
    <motion.div
      ref={ref}
      {...animationProps}
      className="text-center text-2xl font-bold"
    >
      <div className="h-full grid xl:grid-cols-3 lg:grid-cols-2 gap-4 mt-14 md:px-32 px-0">
        <TechCategory
          title="Languages"
          titleColor="text-rose-50"
          items={TECH_STACK}
          category="language"
        />
        <TechCategory
          title="Frameworks"
          titleColor="text-green-100"
          items={TECH_STACK}
          category="framework"
        />
        <TechCategory
          title="Libraries"
          titleColor="text-lime-50"
          items={TECH_STACK}
          category="library"
        />
      </div>
    </motion.div>
  );
};

export default TechStack;
