"use client";
import dynamic from "next/dynamic";
import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <h3 className="text-3xl font-bold">Loading</h3>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Loading), {
  ssr: false,
});
