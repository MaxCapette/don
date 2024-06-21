"use client"
import { getRandomFact } from '@/datas/facts';
import Image from 'next/image';
import { useState, useEffect } from "react";

import * as React from "react"
export default function UselessTitle(){
    const [randomFact, setRandomFact] = useState<string>("");

  useEffect(() => {
    const fact = getRandomFact();
    setRandomFact(fact);
  }, []); // Runs only once on component mount
  return (
    <div className=" uselessTitle relative rounded-lg -skew-x-6 -translate-y-6 hover:-translate-y-1 hover:-translate-x-0 hover:skew-x-0  w-72 h-44 p-2 bg-neutral-50 card-compact hover:bg-base-200 transition-all duration-200 [box-shadow:12px_12px] hover:[box-shadow:4px_4px] ">
    
      <div className="absolute bottom-4 left-0 px-4">
        <span className="font-bold">Random Fact</span>
        <p className="text-sm line-clamp-2">
          {randomFact}
        </p>
      </div>
    </div>
  );
};


