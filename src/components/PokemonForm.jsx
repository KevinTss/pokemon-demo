import { Form } from 'react-bootstrap';

export const PokemonForm = ({ options, onPokemonNameSelect }) => (
  <Form>
    <Form.Group className='mb-3'>
      <Form.Label htmlFor='pokemons'>Choose a pokemon</Form.Label>
      <Form.Select
        id='pokemons'
        onChange={({ target: { value } }) => {
          onPokemonNameSelect(value);
        }}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </Form.Select>
    </Form.Group>
  </Form>
);
