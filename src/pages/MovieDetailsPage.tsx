import React, { useState, useEffect } from "react";
import useMoviesId from "../hooks/useMoviesId";

export type MoviesDetailsPageProps = {};

export default function MovieDetailsPage() {
  const idPage = window.location.pathname.substr(7);
  const [movieId, setMovieId] = useState("");

  const dataMovies = useMoviesId({ movieId: movieId });

  useEffect(() => {
    setMovieId(idPage);
  }, [idPage]);

  return (
    <div>
      Movie details page
      {dataMovies.title}
    </div>
  );
}
