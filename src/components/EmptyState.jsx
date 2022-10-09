import { Alert } from 'react-bootstrap';

export const EmptyState = () => (
  <Alert variant='warning'>
    <Alert.Heading>Hey, you didn't select any pokemon yet</Alert.Heading>
    <p>
      Choose a pokemon on the left form so that we show you a bit more about it
    </p>
    <hr />
    <p className='mb-0'>Enjoy</p>
  </Alert>
);
