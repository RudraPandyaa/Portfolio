import React from "react";

const UiWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-full px-2.5 md:px-20 overflow-hidden my-3">
      {children}
    </div>
  );
};

export default UiWrapper;
