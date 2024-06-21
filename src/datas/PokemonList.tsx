// app/PokemonList.tsx
"use client";
import Image from 'next/image';
// app/PokemonList.tsx
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Constant pour le nombre de Pokémon à charger à chaque fois
const ITEMS_PER_PAGE = 100;

// Fonction pour récupérer les Pokémon depuis l'API
async function fetchPokemons(offset: number = 0) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${ITEMS_PER_PAGE}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
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
            throw new Error('Failed to fetch Pokemon details');
          }
          return res.json();
        })
      );
      setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
      setNextOffset(nextOffset + ITEMS_PER_PAGE);
    } catch (error) {
      console.error('Error loading more pokemons:', error);
    }
  };

  // Au premier rendu, charger les premiers Pokémon
  useEffect(() => {
    loadMorePokemons();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul className="flex flex-wrap justify-center">
        {pokemons.map((pokemon: any) => (
          <li key={pokemon.name} className='hover:scale-110 transition duration-300'>
            <Link href={`/pokedex/${pokemon.name}`}>
              <div>
                <p>{pokemon.name}</p>
                {pokemon.sprites && (
                  <Image
                    src={pokemon.sprites.other['official-artwork'].front_default}
                    alt={pokemon.name}
                    width= {100}
                    height= {100}
                  />
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={loadMorePokemons}>Load More</button>
    </div>
  );
}
