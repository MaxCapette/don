
import "./globals.css";
import Image from "next/image";
import UselessAccordion from "@/components/component/uselessAccordion";
import UselessCarousel from "@/components/component/uselessCarousel";
import Cube from "@/components/ui/cube/cube";
import UselessButton from "@/components/ui/uselessButton/uselessButton";
import Link from "next/link";
import UselessTitle from "@/components/ui/uselessTitle";
import UselessMushroom from "@/components/ui/uselessMushroom/uselessMushroom";
import UselessButton2 from "@/components/ui/uselessButton2/uselessButton2";





export default function Home() {
  return (
    <> 
    <div className="flex justify-center"><Image  src="/images/logo.png" alt="logo" width={200} height={200} /></div>
    
    <div className="parallax-section xl:pt-60">
     
      <main className="container mx-auto mt-8 flex flex-col items-center gap-4">
        
       <UselessTitle />
        <Link href={"./facts"} ><UselessButton2 /></Link>
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
