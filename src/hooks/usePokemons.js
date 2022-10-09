import { useState, useEffect } from 'react';

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((e) => e.json())
      .then((response) => {
        const pokemonList = response.results;
        setPokemons(pokemonList);
      })
      .catch(console.warn);
  }, []);

  return pokemons;
};
