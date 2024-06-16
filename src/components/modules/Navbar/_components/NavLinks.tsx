"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

export const NavLinks = ({
  icon,
  href,
  text,
}: {
  icon: ReactNode;
  href: string;
  text: string;
}) => {
  const pathName = usePathname();

  return (
    <Link href={href}>
      <Button variant={pathName == href ? "active" : "ghost"} className="gap-2">
        {icon}
        <div>{text}</div>
      </Button>
    </Link>
  );
};

export const MobileNavLinks = ({
  icon,
  href,
  text,
}: {
  icon: ReactNode;
  href: string;
  text: string;
}) => {
  const pathName = usePathname();

  return (
    <Link href={href}>
      <Button variant={pathName == href ? "active" : "ghost"} className="gap-2">
        <div className="flex flex-col justify-center items-center">
          <div>{icon}</div>
          <div>{text}</div>
        </div>
      </Button>
    </Link>
  );
};
