import React from "react";
import { ThemeToggle } from "../../dark-mode-toggle";
import { Card } from "@/components/ui/card";
import { UiWrapper } from "@/components/shared";
import { FluentEmojiFlatBriefcase } from "@/lib/icons/breaf-case";
import { FluentEmojiFlatGraduationCap } from "@/lib/icons/education";
import { FluentEmojiFlatHouse } from "@/lib/icons/house";
import { FluentEmojiFlatMemo } from "@/lib/icons/memo";
import AlertNote from "./_components/AlertNote";
import { Button } from "@/components/ui/button";

const NavigationBar = () => {
  return (
    <>
      <AlertNote />
      <UiWrapper>
        <Card className="rounded-xl xl:my-2 lg:my-2 bg-orange-200 dark:bg-inherit">
          <nav className="flex justify-between items-center px-10 py-5">
            <div className="font-mono w-[150px]">portfolio-v8</div>

            {/* <div className="flex  gap-7 justify-center text-center items-center">
            <div className="font-mono">menu</div>
            <div className="font-mono">menu</div>
            <div className="font-mono">menu</div>
          </div> */}

            {/* <div>
            <span>menu</span>
            <span>menu</span>
            <span>menu</span>
          </div> */}

            <div className="flex gap-x-10 items-center text-sm">
              <Button variant={"ghost"} className="gap-2">
                <FluentEmojiFlatHouse />
                Home
              </Button>
              <Button variant={"ghost"} className="gap-2">
                <FluentEmojiFlatGraduationCap />
                <div>Education</div>
              </Button>
              <Button variant={"ghost"} className="gap-2">
                <FluentEmojiFlatBriefcase />
                <div>Work</div>
              </Button>
              <Button variant={"ghost"} className="gap-2">
                <FluentEmojiFlatMemo />
                <div>Blogs</div>
              </Button>
              {/* <div className="flex items-center gap-3">
                <FluentEmojiFlatHouse />
                <div>Home</div>
              </div>
              <div className="flex items-center gap-3">
                <FluentEmojiFlatGraduationCap />
                <div>Education</div>
              </div>

              <div className="flex items-center gap-3">
                <FluentEmojiFlatBriefcase />
                <div>Work</div>
              </div>
              <div className="flex items-center gap-3">
                <FluentEmojiFlatMemo />
                <div>Blogs</div>
              </div> */}
              {/* <div>
                <FluentEmojiFlatGraduationCap />
              </div>
              <div>
                <FluentEmojiFlatBriefcase />
              </div>
              <div>
                <FluentEmojiFlatMemo />
              </div> */}
            </div>

            {/* <ul>
            <li className="font-mono">menu</li>
            <li className="font-mono">menu</li>
            <li className="font-mono">menu</li>
          </ul> */}

            <div className="w-[150px]">
              <div className="flex items-center justify-end">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </Card>
      </UiWrapper>
    </>
  );
};

export default NavigationBar;
