import { useEffect, useState } from "react";
import axios from "axios";
import { APIKEY } from "./constant";

type fetcherProps = {
  ROUTE: string;
  query?: string;
};

function useFetcher({ ROUTE, query }: fetcherProps) {
  const [dataMovies, setDataMovies] = useState<any[]>([]);

  useEffect(() => {
    async function getDataMovies() {
      await axios
        .get(`${ROUTE}${APIKEY}${query && `?query=${query}`}`)
        .then((response) => setDataMovies(response.data.results))
        .catch((error) => console.log(error));
    }

    getDataMovies();
  }, [ROUTE, query]);

  return dataMovies;
}

export default useFetcher;
