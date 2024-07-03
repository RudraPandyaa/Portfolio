"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

export default function VariantSwitch({}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Select
      onValueChange={(value) => {
        if (value === "v-1") {
          router.push("/");
        } else if (value === "v-2") {
          router.push("/v-2");
        } else {
        }
      }}
      defaultValue={pathname === "/v-2" ? "v-2" : "v-1"}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Variant" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="v-1">Variant 1</SelectItem>
        <SelectItem value="v-2">Variant 2</SelectItem>
      </SelectContent>
    </Select>
  );
}
