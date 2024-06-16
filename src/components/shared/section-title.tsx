import { cn } from "@/lib/utils";
import React from "react";

export default function SectionTitle({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-bold text-4xl my-10  text-center text-slate-400",
        className
      )}
    >
      {children}
    </div>
  );
}
