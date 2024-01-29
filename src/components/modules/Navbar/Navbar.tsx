import React from "react";
import { ThemeToggle } from "../../dark-mode-toggle";
import { Card } from "@/components/ui/card";

const NavigationBar = () => {
  return (
    <Card className="rounded-xl px-10  mx-20 my-3">
      <nav className="flex justify-between px-10 py-5 sticky  ">
        <div className="font-mono">portfolio-v8</div>
        <div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </Card>
  );
};

export default NavigationBar;
