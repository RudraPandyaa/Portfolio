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
import { navLinks } from "../../../../constants/nav-links";
import NavLinks from "./_components/NavLinks";

const NavigationBar = () => {
  return (
    <>
      <AlertNote />
      <div className=" xl:my-2 lg:my-2 bg-orange-200 dark:bg-inherit">
        <nav className="flex justify-between items-center px-10 py-5">
          <div className="font-mono w-[150px]">portfolio-v8</div>

          <div className="xl:flex lg:flex md:flex ~hidden  gap-x-10 items-center text-sm">
            {navLinks.map((link, index) => (
              <NavLinks
                key={index}
                icon={link.icon}
                href={link.href}
                text={link.text}
              />
            ))}

            {/* <Button variant={"active"} className="gap-2">
                <FluentEmojiFlatHouse />
                <div>Home</div>
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
              </Button> */}
          </div>

          <div className="w-[150px]">
            <div className="flex items-center justify-end">
              {/* <ThemeToggle /> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
