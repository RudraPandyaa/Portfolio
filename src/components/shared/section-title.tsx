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
      className={cn("font-bold text-4xl mt-10 mb-20 text-center", className)}
    >
      {children}
    </div>
  );
}
