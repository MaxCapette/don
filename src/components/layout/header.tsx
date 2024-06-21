import Image from "next/image";
import ModeToggle from "../component/ModeToggle";
import UselessSocials from "../ui/uselessSocials";
import PokemonList from "@/datas/PokemonList";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full flex content-center items-center text-center h-20">
      <div className="absolute"><ModeToggle  /></div>
      
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
              <a href="/shape" className="">
                Homev2
              </a>
            </li>
            <li>
              <a href="/pokedex" className="">
                Pokedex
              </a>
            </li>
          </ul>
        </nav>
      
      </div>
    
    </header>
  );
}
