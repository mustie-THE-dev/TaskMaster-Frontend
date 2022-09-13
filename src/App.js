

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import MainFeed from './components/MainFeed';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import Home from './components/Home';

function App() {

  const [pokemons, setPokemon] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/pokemon")
    .then((r) => r.json())
    .then((pokemon) => setPokemon(pokemon))
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/pokemon" element={<MainFeed pokemons={pokemons} />}></Route>
          <Route path="/pokemon/:id" element={<Pokemon />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;