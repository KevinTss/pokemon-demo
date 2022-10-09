import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

export const PokemonForm = ({ options, onPokemonNameSelect }) => {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    selectedValue && onPokemonNameSelect(selectedValue);
  }, [onPokemonNameSelect, selectedValue]);

  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor='pokemons'>Choose a pokemon</Form.Label>
        <Form.Select
          id='pokemons'
          onChange={({ target: { value } }) => {
            setSelectedValue(value);
          }}
        >
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
};
