import React from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const characters = useFetch("https://rickandmortyapi.com/api/character/", []);
  const results = characters.data.results;
  return (
    <div className="App">
      <h2>Personajes</h2>

      <ul>
        {results &&
          results.map(character => (
            <div className="card" key={character.id}>
              <div className="content">
                <img src={character.image} alt={character.name} />
                <h1>{character.name}</h1>
                <p>{character.status}</p>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default App;
