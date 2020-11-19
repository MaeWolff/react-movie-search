import { useEffect, useState } from "react";
import axios from "axios";
import { APIKEY } from "./constant";

type fetcherProps = {
  ROUTE: string;
  optionnal?: string;
};

function useFetcher({ ROUTE, optionnal }: fetcherProps) {
  const [dataResultsMovies, setDataResultsMovies] = useState<any[]>([]);

  useEffect(() => {
    async function getDataMovies() {
      await axios
        .get(`${ROUTE}?api_key=${APIKEY}${optionnal}`)
        .then((response) => setDataResultsMovies(response.data.results)
        )
        .catch((error) => console.log(error));
    }

    getDataMovies();
  }, [ROUTE, optionnal]);

  return dataResultsMovies;
}

export default useFetcher;
