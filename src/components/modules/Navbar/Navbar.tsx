import React from "react";
import { ThemeToggle } from "../../dark-mode-toggle";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between px-10 py-5 sticky bg-violet-950 m-5 rounded-xl">
      <div className="font-mono">portfolio-v8</div>
      <div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
