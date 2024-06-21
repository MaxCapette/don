// app/[name].tsx
import Image from 'next/image';
import React from 'react';

// Fetching data from PokeAPI
async function fetchPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function PokemonDetail({ params }: { params: { name: string } }) {
  const pokemon = await fetchPokemon(params.name);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <Image src={pokemon.sprites.front_default}
       alt={pokemon.name}
       width={200}
       height={200}
        />
      
      <p>Type: {pokemon.types.map((type: any) => type.type.name).join(', ')}</p>
    </div>
  );
}
