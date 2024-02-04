import React from "react";

const V2Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-full px-36 xl:py-1 xl:px-32 md:px-4 sm:px-3 overflow-hidden">
      {children}
    </div>
  );
};

export default V2Wrapper;
