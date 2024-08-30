import { SectionTitle, V3Wrapper } from "@/components";
import { ProjectsData } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import dynamic from "next/dynamic";
import React from "react";
import { ProductCard } from "./ProductCard";

export interface Props {}

function MyProjects({}: Props) {
  return (
    <V3Wrapper>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid md:grid-cols-3 py-4 gap-4">
        {ProjectsData.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </V3Wrapper>
  );
}

export default dynamic(() => Promise.resolve(MyProjects), {
  ssr: false,
});
