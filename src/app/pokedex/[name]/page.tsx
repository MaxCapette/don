/* eslint-disable @next/next/no-img-element */
// app/[name].tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Fetching data from PokeAPI
async function fetchPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function PokemonDetail({
  params,
}: {
  params: { name: string };
}) {
  const pokemon = await fetchPokemon(params.name);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
        <Link href="/pokedex">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded m-1">
            Back
          </button>
        </Link>
      </div>
    <div className="flex flex-col items-center" >
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        width={400}
        height={400}
        className="mx-auto"
      />
      <div className="mt-4">
        <p className="text-lg">
          <strong>Height:</strong> {pokemon.height} decimetres
        </p>
        <p className="text-lg">
          <strong>Weight:</strong> {pokemon.weight} kg
        </p>
        <p className="text-lg">
          <strong>Type:</strong>{" "}
          {pokemon.types.map((type: any) => type.type.name).join(", ")}
        </p>
        <p className="text-lg">
          <strong>Abilities:</strong>{" "}
          {pokemon.abilities
            .map((ability: any) => ability.ability.name)
            .join(", ")}
        </p>
        <div className="flex gap-10">
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Base Stats</h2>
          <ul className="list-disc list-inside">
            {pokemon.stats.map((stat: any) => (
              <li key={stat.stat.name} className="text-sm">
                <strong>{stat.stat.name}:</strong> {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Moves</h2>
          <ul className="list-disc list-inside">
            {pokemon.moves.slice(0, 10).map(
              (
                move: any // Limiter le nombre de mouvements affichés
              ) => (
                <li key={move.move.name} className="text-sm">
                  {move.move.name}
                </li>
              )
            )}
          </ul>
        </div>
        </div>
          {/* Afficher les cris */}
          <div className="mt-4 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Cries</h2>
          <audio controls>
            <source src={`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemon.id}.ogg`} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
          <audio controls >
            <source src={`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/${pokemon.id}.ogg`} type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        {/* Afficher les sprites */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Sprites</h2>
          <div className="grid grid-cols-2 gap-4">
            {pokemon.sprites.front_default && (
              <div>
                <h3 className="capitalize">Front Default</h3>
                <img
                  src={pokemon.sprites.front_default}
                  alt={`${pokemon.name} front default`}
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
            )}
            {pokemon.sprites.back_default && (
              <div>
                <h3 className="capitalize">Back Default</h3>
                <img
                  src={pokemon.sprites.back_default}
                  alt={`${pokemon.name} back default`}
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
            )}
            {pokemon.sprites.front_shiny && (
              <div>
                <h3 className="capitalize">Front Shiny</h3>
                <img
                  src={pokemon.sprites.front_shiny}
                  alt={`${pokemon.name} front shiny`}
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
            )}
            {pokemon.sprites.back_shiny && (
              <div>
                <h3 className="capitalize">Back Shiny</h3>
                <img
                  src={pokemon.sprites.back_shiny}
                  alt={`${pokemon.name} back shiny`}
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
