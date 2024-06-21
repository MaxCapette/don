import Header from "@/components/component/header";
import "./globals.css";
import Image from "next/image";
import UselessAccordion from "@/components/component/uselessAccordion";
import UselessCarousel from "@/components/component/uselessCarousel";
import Cube from "@/components/ui/cube/cube";
import UselessButton from "@/components/ui/uselessButton/uselessButton";
import Link from "next/link";
import UselessTitle from "@/components/ui/uselessTitle";
import UselessMushroom from "@/components/ui/uselessMushroom/uselessMushroom";





export default function Home() {
  return (
    <> 
   
    <div className="parallax-section xl:pt-60">
      <main className="container mx-auto mt-8 flex flex-col items-center gap-4">
       <UselessTitle />
        <Link href={"./facts"} ><UselessButton /></Link>
        <div><UselessAccordion /></div>
        <div  ><UselessCarousel /></div>
        <div className="uselessCube flex justify-center p-20"><Cube /></div>
       <div>
        <UselessMushroom />
       </div>
      </main>
    </div>
      </>
   
    
  );
}
