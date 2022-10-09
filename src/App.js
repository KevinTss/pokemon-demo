import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PokemonForm } from './components/PokemonForm';
import { EmptyState } from './components/EmptyState';
import { PokemonCard } from './components/PokemonCard';
import { usePokemons } from './hooks/usePokemons';

const getPokemonByName = (list, name) => {
  if (!name || !list?.length) return null;

  return list.find((item) => item.name === name);
};

function App() {
  const { pokemons, isLoading, error } = usePokemons();

  const [selectedPokmeonName, setSelectedPokmeonName] = useState('');
  const [selectedPokemonData, setSelectedPokemonData] = useState(null);

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

  const handlePokemonSelect = (pokemonName = '') => {
    setSelectedPokmeonName(pokemonName);
  };
  const handleReset = () => {
    setSelectedPokmeonName('');
    setSelectedPokemonData(null);
  };

  const formOptions =
    pokemons?.map((pokemon) => ({
      label: pokemon.name,
      value: pokemon.name,
    })) || [];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='App'>
      <PokemonForm
        options={formOptions}
        onPokemonNameSelect={handlePokemonSelect}
      />
      {selectedPokemonData ? (
        <PokemonCard pokemon={selectedPokemonData} onReset={handleReset} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default App;
