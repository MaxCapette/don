"use client";

import * as React from "react";
import UselessCard from "@/components/ui/uselessCard";
import { uselessFacts } from "@/datas/facts";
import { imageUrls } from "@/datas/imageUrls";
import Link from "next/link";

const Facts = () => {
  const [visibleFacts, setVisibleFacts] = React.useState(10); // State pour le nombre de faits à afficher

  const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };

  const loadMoreFacts = () => {
    setVisibleFacts((prevVisibleFacts) => prevVisibleFacts + 10); // Charger 10 faits supplémentaires à chaque clic
  };

  return (
    <section className="flex flex-wrap justify-center items-center gap-4 min-h-screen">
      {uselessFacts.slice(0, visibleFacts).map((fact) => (
        <Link href={`/facts/${fact.id}`} key={fact.id} className="hover:scale-110 transition duration-300">
          <UselessCard key={fact.id} fact={fact.fact} imageUrl={getRandomImageUrl()} />
        </Link>
      ))}
      {visibleFacts < uselessFacts.length && ( // Afficher le bouton "Afficher plus" s'il reste des faits à charger
        <button
          className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md  bg-indigo-900 mt-3 tracking-wide  bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate"
          onClick={loadMoreFacts}
        >
          Show more
        </button>
      )}
    </section>
  );
};

export default Facts;
