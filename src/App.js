import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PokemonForm } from './components/PokemonForm';

const getPokemonByName = (list, name) => {
  if (!name || !list?.length) return null;

  return list.find((item) => item.name === name);
};

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokmeonName, setSelectedPokmeonName] = useState('');
  const [selectedPokemonData, setSelectedPokemonData] = useState(null);

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

    if (!selectedItem?.url) return;

    fetch(selectedItem.url)
      .then((e) => e.json())
      .then((response) => {
        setSelectedPokemonData(response);
      })
      .catch(console.warn);
  }, [selectedPokmeonName]);

  const selectPokemon = getPokemonByName(pokemons, selectedPokmeonName);

  const handlePokemonSelect = (pokemonName = '') => {
    setSelectedPokmeonName(pokemonName);
  };

  const formOptions =
    pokemons?.map((pokemon) => ({
      label: pokemon.name,
      value: pokemon.name,
    })) || [];

  return (
    <div className='App'>
      <PokemonForm
        options={formOptions}
        onPokemonNameSelect={handlePokemonSelect}
      />
      <h3>Selected Pokemon: {selectPokemon?.name}</h3>
      {selectedPokemonData && (
        <div>
          <img src={selectedPokemonData.sprites.front_default} />
        </div>
      )}
    </div>
  );
}

export default App;
