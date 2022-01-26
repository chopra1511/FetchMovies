import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
   const response = await fetch("https://swapi.dev/api/films/");

   if(!response.ok){
     throw new Error ('Something went wrong .... Retrying');
   }
   setInterval(() => {
     setIsLoading(true);
   }, 500);
   

   const data = response.json();
    try {
       const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
        setMovies(transformedMovies);
        setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }      
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {!isLoading && error && <p>{error} <button>cancel</button></p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
