import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  async function movieFetchHandler () {
    const firstData = await fetch('https://swapi.dev/api/films/')
    const secondData = await firstData.json();
    
    const movieList = secondData.results.map((movie) => {
        return {
          id : movie.episode_id,
          title : movie.title,
          openingText : movie.opening_crawl,
          releaseDate : movie.release_date
        };
      });
      setMovies(movieList);
    
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={movieFetchHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
