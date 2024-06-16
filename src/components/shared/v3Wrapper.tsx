import React from "react";

const V3Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-full overflow-hidden lg:px-32 px-4 my-10 md:px-20 ">
      {children}
    </div>
  );
};

export default V3Wrapper;
