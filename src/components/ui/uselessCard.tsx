/* eslint-disable @next/next/no-img-element */
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
      <img
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src= {imageUrl}
        width={200}
      />
      <CardFooter className="h-full w-full  overflow-hidden p-5 absolute before:rounded-xl shadow-small ml-1 z-10 bg-opacity-0 shadow-boxBlur backdrop-blur-lg rounded-lg border border-white border-opacity-20">
        <p className="">{fact}</p>
        
      </CardFooter>
    </Card>
  );
}
