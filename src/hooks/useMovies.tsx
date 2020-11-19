import { useEffect, useState } from "react";
import axios from "axios";
import { APIKEY } from "./constant";

type useMoviesProps = {
  search: string;
};

function useMovies({ search }: useMoviesProps) {
  const [dataMovies, setDataMovies] = useState<any[]>([]);

  useEffect(() => {
    async function getDataMovies() {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${search}`
        )
        .then((response) => setDataMovies(response.data.results))
        .catch((error) => console.log(error));
    }

    getDataMovies();
  }, [search]);

  return dataMovies;
}

export default useMovies;
