import React from 'react'
import useMoviesUpComing from "../../hooks/useMoviesUpComing";
import { MoviesCard } from "../../Component/index";

export default function MoviesUpComing() {
  const dataPopularMovies = useMoviesUpComing();

  const renderUpComingMovies = dataPopularMovies.map((movie) => {
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
      {renderUpComingMovies}
    </>
  )
}
