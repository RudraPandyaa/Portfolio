import { cn } from "@/lib/utils";
import React from "react";

const UiWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-full px-2.5 xl:py-1 xl:px-4 md:px-4 sm:px-3 overflow-hidden my-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export default UiWrapper;
