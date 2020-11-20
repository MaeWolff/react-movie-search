import useFetcher from "./useFetcher";


function useMoviesPopular() {
  const dataMovies = useFetcher({
    ROUTE: `https://api.themoviedb.org/3/movie/popular`,
    optionnal : `&language=en-US&page=1`
  });

  return dataMovies;
}

export default useMoviesPopular;

