import { Card, Button } from 'react-bootstrap';

export const PokemonCard = ({ pokemon, onReset }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant='top' src={pokemon.sprites.front_default} />
    <Card.Body>
      <Card.Title>{pokemon.name}</Card.Title>
      <Card.Text>Experience: {pokemon.base_experience}</Card.Text>
      <Button variant='primary' onClick={onReset}>
        Reset
      </Button>
    </Card.Body>
  </Card>
);
