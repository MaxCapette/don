// app/PokemonList.tsx
"use client";
// app/PokemonList.tsx
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../lib/utils"; // Importez la fonction utilitaire
import Image from "next/image";

// Constant pour le nombre de Pokémon à charger à chaque fois
const ITEMS_PER_PAGE = 100;

// Fonction pour récupérer les Pokémon depuis l'API
async function fetchPokemons(offset: number = 0) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${ITEMS_PER_PAGE}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [nextOffset, setNextOffset] = useState(0);

  // Fonction pour charger plus de Pokémon
  const loadMorePokemons = async () => {
    try {
      const data = await fetchPokemons(nextOffset);
      const newPokemons = await Promise.all(
        data.results.map(async (result: any) => {
          const res = await fetch(result.url);
          if (!res.ok) {
            throw new Error("Failed to fetch Pokemon details");
          }
          return res.json();
        })
      );
      setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
      setNextOffset(nextOffset + ITEMS_PER_PAGE);
    } catch (error) {
      console.error("Error loading more pokemons:", error);
    }
  };

  // Au premier rendu, charger les premiers Pokémon
  useEffect(() => {
    loadMorePokemons();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className=" font-bold text-center my-8 px-6 py-4 text-3xl">Pokemon List</h1>
      <div className="flex flex-wrap justify-center gap  ">
        {pokemons.map((pokemon: any) => (
          <div
            key={pokemon.name}
            className="max-w-sm overflow-hidden shadow-lg  hover:scale-110 transition duration-300 glassmorphism-container"
          >
            <Link href={`/pokedex/${pokemon.name}`}>
              {pokemon.sprites && (
                <Image
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                />
              )}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                  {capitalizeFirstLetter(pokemon.name)}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={loadMorePokemons}
        >
          Load More
        </button>
      </div>
    </div>
  );
}
