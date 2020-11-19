import useFetcher from "./useFetcher";

interface IMoviesSearch {
  search: string;
}

function useMovieSearch({ search }: IMoviesSearch) {
  const dataMovies = useFetcher({
    ROUTE: `https://api.themoviedb.org/3/search/movie`,
    optionnal : `&query=${search}`
  });

  return dataMovies;
}

export default useMovieSearch;
