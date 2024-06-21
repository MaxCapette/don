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
    <section className="flex  justify-center items-center gap-4">
      {uselessFacts.slice(0, visibleFacts).map((fact) => (
        <Link href={`/facts/${fact.id}`} key={fact.id} className="hover:scale-110 transition duration-300">
          <UselessCard key={fact.id} fact={fact.fact} imageUrl={getRandomImageUrl()} />
        </Link>
      ))}
      {visibleFacts < uselessFacts.length && ( // Afficher le bouton "Afficher plus" s'il reste des faits à charger
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={loadMoreFacts}
        >
          Afficher plus
        </button>
      )}
    </section>
  );
};

export default Facts;
