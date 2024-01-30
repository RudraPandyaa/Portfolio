import React from "react";

const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-20 m-3">{children}</div>;
};

export default CardWrapper;
