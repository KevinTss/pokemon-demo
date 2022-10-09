import { useEffect, useState } from 'react';
import './App.css';

const getPokemonByName = (list, name) => {
  if (!name || !list?.length) return null;

  return list.find((item) => item.name === name);
};

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokmeonName, setSelectedPokmeonName] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((e) => e.json())
      .then((response) => {
        const pokemonList = response.results;
        setPokemons(pokemonList);
      })
      .catch(console.warn);
  }, []);

  useEffect(() => {
    const selectedItem = getPokemonByName(pokemons, selectedPokmeonName);

    fetch(selectedItem.url)
      .then((e) => e.json())
      .then((response) => {
        console.log('re', response);
      })
      .catch(console.warn);
  }, [selectedPokmeonName]);

  const selectPokemon = getPokemonByName(pokemons, selectedPokmeonName);

  return (
    <div className='App'>
      <ul>
        {pokemons.map((pokemon) => (
          <li
            key={pokemon.name}
            onClick={() => setSelectedPokmeonName(pokemon.name)}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
      <h3>Selected Pokemon: {selectPokemon?.name}</h3>
    </div>
  );
}

export default App;
