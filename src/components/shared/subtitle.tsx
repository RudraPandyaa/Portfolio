import { cn } from "@/lib/utils";
import React from "react";

export default function Subtitle({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("font-bold", className)}>{children}</div>;
}
