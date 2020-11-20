import useFetcher from "./useFetcher";


function useMoviesUpComing() {
  const dataMovies = useFetcher({
    ROUTE: `https://api.themoviedb.org/3/movie/upcoming`,
    optionnal : `&language=en-US&page=1`
  });

  return dataMovies;
}

export default useMoviesUpComing;