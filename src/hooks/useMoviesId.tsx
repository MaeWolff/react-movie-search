import useFetcher from "./useFetcher";

interface IMoviesId {
  movieId: string;
}

function useMoviesId({ movieId }: IMoviesId) {
  const dataMovies = useFetcher({
    ROUTE: `https://api.themoviedb.org/3/movie/${movieId}`,
  });

  return dataMovies;
}

export default useMoviesId;
