import React from "react";
import {Card, CardFooter} from "@nextui-org/card";
import Image from "next/image";
import { Button } from "./button";

interface UselessCardProps {
    fact: string;
    imageUrl: string;
  }
export default function UselessCard({ fact, imageUrl }: UselessCardProps) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none  content-center justify-center flex flex-col items-center gap-4 w-max"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src= {imageUrl}
        width={200}
      />
      <CardFooter className="h-4/5 before:bg-white/10 border-white/20 border-1 overflow-hidden p-5 absolute before:rounded-xl rounded-large shadow-small ml-1 z-10">
        <p className="">{fact}</p>
        
      </CardFooter>
    </Card>
  );
}
