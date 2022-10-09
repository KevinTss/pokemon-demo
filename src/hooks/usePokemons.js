import { useState, useEffect } from 'react';

export const usePokemons = () => {
  const [isLoading, setisLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((e) => e.json())
      .then((response) => {
        const pokemonList = response.results;
        setPokemons(pokemonList);
        setisLoading(false);
      })
      .catch((error) => {
        console.warn(error);
        setisLoading(false);
        setError('Faile to fetch pokemons');
      });
  }, []);

  return {
    pokemons,
    isLoading,
    error,
  };
};
