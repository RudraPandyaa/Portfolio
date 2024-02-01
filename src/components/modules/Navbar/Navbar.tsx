import React from "react";
import { ThemeToggle } from "../../dark-mode-toggle";
import { Card } from "@/components/ui/card";
import { UiWrapper } from "@/components/shared";

const NavigationBar = () => {
  return (
    <UiWrapper>
      <Card className="rounded-xl xl:my-2 lg:my-2">
        <nav className="flex justify-between px-10 py-5 sticky  ">
          <div className="font-mono">portfolio-v8</div>
          <div>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </Card>
    </UiWrapper>
  );
};

export default NavigationBar;
