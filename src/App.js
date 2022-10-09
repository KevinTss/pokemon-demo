import { useEffect, useState } from 'react';
import './App.css';

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

  const selectPokemon = selectedPokmeonName
    ? pokemons.find((pokemon) => pokemon.name === selectedPokmeonName)
    : null;

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
