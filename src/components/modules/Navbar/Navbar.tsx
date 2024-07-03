"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { navLinks } from "../../../../constants/nav-links";
import AlertNote from "./_components/AlertNote";
import { MobileNavLinks, NavLinks } from "./_components/NavLinks";
import { useRouter } from "next/navigation";

const NavigationBar = () => {
  const router = useRouter();
  return (
    <>
      <AlertNote />
      <div className=" xl:my-2 lg:my-2 bg-orange-200 dark:bg-inherit">
        <nav className="flex flex-col md:flex-row justify-between items-center px-10 py-5">
          <div className="font-mono w-[150px] hidden lg:block">
            portfolio-v8
          </div>

          <div className="hidden lg:flex gap-x-10 items-center text-sm">
            {navLinks.map((link, index) => (
              <NavLinks
                key={index}
                icon={link.icon}
                href={link.href}
                text={link.text}
              />
            ))}
          </div>

          <div className="w-[150px]">
            <div className="flex items-center justify-end">
              {/* <ThemeToggle /> */}
              <Select
                onValueChange={(value) => {
                  if (value === "v-1") {
                    router.push("/");
                  } else if (value === "v-2") {
                    router.push("/v-2");
                  } else {
                  }
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Variant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="v-1">Variant 1</SelectItem>
                  <SelectItem value="v-2">Variant 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </nav>
      </div>
      <div className="fixed bottom-0 flex justify-center items-center text-center  backdrop-blur  py-3 rounded-lg lg:hidden mx-10">
        {navLinks.map((link, index) => (
          <MobileNavLinks
            key={index}
            icon={link.icon}
            href={link.href}
            text={link.text}
          />
        ))}
      </div>
    </>
  );
};

export default NavigationBar;
