import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((e) => e.json())
      .then((response) => {
        console.log('res', response);
      })
      .catch(console.warn);
  }, []);

  return <div className='App'>pokemon</div>;
}

export default App;
