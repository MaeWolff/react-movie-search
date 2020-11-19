import { useEffect, useState } from "react";
import axios from "axios";
import { APIKEY } from "./constant";

type fetcherProps = {
  ROUTE: string;
  optionnal?: string;
};

function useFetcher({ ROUTE, optionnal }: fetcherProps) {
  const [dataResultsMovies, setDataResultsMovies] = useState<any[]>([]);
  const [dataMovies, setDataMovies] = useState<any>([]);

  useEffect(() => {
    async function getDataMovies() {
      await axios
        .get(`${ROUTE}?api_key=${APIKEY}${optionnal}`)
        .then((response) => response.data.results ? setDataResultsMovies(response.data.results) : setDataMovies(response.data))
        .catch((error) => console.log(error));
    }

    getDataMovies();
  }, [ROUTE]);

  return dataMovies.length ? dataMovies : dataResultsMovies ;
}

export default useFetcher;
