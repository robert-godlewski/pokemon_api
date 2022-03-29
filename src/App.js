import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon_list, setPokemon_list] = useState([]);

  // Technically as of 1/2022 there are 905 pokemon with the release of Sword and Shield.
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then((response) => {
        console.log(response.data.results)
        setPokemon_list(response.data.results)
      })
      .catch((err) => console.log(err));
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
