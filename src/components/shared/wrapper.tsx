import React from "react";

const UiWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-full px-2.5 xl:py-1 xl:px-8  md:px-3 sm:px-0 overflow-hidden my-3">
      {children}
    </div>
  );
};

export default UiWrapper;
