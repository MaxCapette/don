"use client";import Link from "next/link";
import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../lib/utils";
import Image from "next/image";
import Loading from "@/app/loading";

// Fonction pour récupérer les Pokémon depuis l'API
async function fetchAllPokemons() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function PokemonList() {
  const [allPokemons, setAllPokemons] = useState<any[]>([]);
  const [displayedPokemons, setDisplayedPokemons] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // État de chargement initial

  // Charger tous les Pokémon une fois
  useEffect(() => {
    const loadAllPokemons = async () => {
      try {
        const data = await fetchAllPokemons();
        const detailedPokemons = await Promise.all(
          data.results.map(async (result: any) => {
            const res = await fetch(result.url);
            if (!res.ok) {
              throw new Error("Failed to fetch Pokemon details");
            }
            return res.json();
          })
        );
        setAllPokemons(detailedPokemons);
        setDisplayedPokemons(detailedPokemons);
        setLoading(false); // Marquer le chargement comme terminé une fois les données chargées
      } catch (error) {
        console.error("Error loading all pokemons:", error);
        setLoading(false); // Gérer l'erreur de chargement en marquant le chargement comme terminé
      }
    };

    loadAllPokemons();
  }, []);

  // Fonction de gestion de la recherche
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredPokemons = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    );
    setDisplayedPokemons(filteredPokemons);
  };

  // Afficher un indicateur de chargement si les données sont en cours de chargement
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-center my-8 px-6 py-4 text-3xl">Pokemon List</h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search Pokémon"
          className="px-4 py-2 border rounded w-1/2"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {displayedPokemons.map((pokemon: any) => (
          <div
            key={pokemon.name}
            className="max-w-sm overflow-hidden shadow-lg hover:scale-110 transition duration-300 glassmorphism-container"
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
    </div>
  );
}

