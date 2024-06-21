"use client";

import * as React from "react";
import UselessCard from "@/components/ui/uselessCard";
import { uselessFacts } from "@/datas/facts";
import { imageUrls } from "@/datas/imageUrls";
import Link from "next/link";

const Shape = () => {

  return (
    <>
    <div className="flex">
        <div className="bg-red-700 w-1/3 h-screen"></div>
        <div className="bg-blue-700 w-1/3 h-screen"></div>
        <div className="bg-green-700 w-1/3 h-screen"></div>
    </div>
    </>
   
  );
};

export default Shape;
