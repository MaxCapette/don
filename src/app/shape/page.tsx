"use client";

import * as React from "react";
import UselessCard from "@/components/ui/uselessCard";
import { uselessFacts } from "@/datas/facts";
import { imageUrls } from "@/datas/imageUrls";
import Link from "next/link";
import UselessTitle from "@/components/ui/uselessTitle";
import Menu from "@/components/ui/uselessNav";

const Shape = () => {

  return (
    <>
   <div className="flex">
  <div className="bg-red-200 w-1/3 h-screen hover:blur-none blur-md transition duration-300">
    <Link href="/facts">
      <p>Go to facts</p>
    </Link>
    <UselessTitle />
  </div>
  <div className="bg-blue-100 w-1/3 h-screen hover:blur-none blur-md transition duration-300">
  <Menu />
  </div>
  <div className="bg-blue-200 w-1/3 h-screen hover:blur-none blur-md transition duration-300"></div>
</div>

    </>
   
  );
};

export default Shape;
