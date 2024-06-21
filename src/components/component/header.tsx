import Image from "next/image";
import ModeToggle from "./ModeToggle";
import UselessSocials from "../ui/uselessSocials";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex content-center items-center text-center h-20">
      <ModeToggle />
      <div className="container mx-auto flex flex-col items-center ">
        <h1 className=" text-2xl font-bold">Useless Facts</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="">
                Home
              </a>
            </li>
            <li>
              <a href="/facts" className="">
                Facts
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      
      </div>
    
    </header>
  );
}
