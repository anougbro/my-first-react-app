
import React from "react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://image.url/inception.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Exploring space and time.",
      posterURL: "https://image.url/interstellar.jpg",
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const addMovie = () => {
    const newMovie = {
      title: prompt("Enter movie title:"),
      description: prompt("Enter description:"),
      posterURL: prompt("Enter poster URL:"),
      rating: parseInt(prompt("Enter rating (1-5):")),
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div className="App">
      <h1>🎥 My Movie App</h1>
      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />
      <button onClick={addMovie}>Add Movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>
        <Link to={`/movie/${movie.title}`}>{movie.title}</Link>
      </h2>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;