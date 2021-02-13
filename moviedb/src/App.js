import React, { useState } from 'react';
import axios from 'axios'

import Search from './components/Search';
import Results from './components/Results';

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apıurl = "http://www.omdbapi.com/?i=tt3896198&apikey=cb42259e";

  const search = (e) => {
    if ( e.key === "Enter") {
      axios(apıurl + "&s=" + state.s).then(( { data }) => {
        let result = data.Search;

        setState(prevState => {
          return {...prevState, result :result}
        })
      }); 
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;
    
    setState(prevState => {
      return {...prevState, s : s}
    });
    
  }
  return (
    <div className="App">
      <header>
        <h1>Movie DB</h1>
      </header>
      <main>
        <Search handleInput = {handleInput} search={search}></Search>
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
