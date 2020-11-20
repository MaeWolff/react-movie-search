import React from 'react'
import useMoviesPopular from "../../hooks/useMoviesPopular";
import { MoviesCard } from "../../Component/index";

export default function MoviesPopular() {
  const dataPopularMovies = useMoviesPopular();

  const renderPouplarMovies = dataPopularMovies.map((movie) => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    let releaseDate = new Date(movie.release_date);
    return (
      <div key={`${movie}:${movie.id}`}>
        <MoviesCard
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          release={releaseDate.toLocaleString("en-US", options)}
        />
      </div>
    );
  });
  return (
    <>
      {renderPouplarMovies}
    </>
  )
}
