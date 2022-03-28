import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [pokemon_list, setPokemon_list] = useState([]);

  // Technically as of 1/2022 there are 905 pokemon with the release of Sword and Shield.
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(response => response.json())
      .then(response => setPokemon_list(response.results))
  }, []);

  return (
    <div className="App">
      <ul>
        {pokemon_list.length > 0 && pokemon_list.map((pokemon, index) => {
          return (<li key={index}>{pokemon.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
