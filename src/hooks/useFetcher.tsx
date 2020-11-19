import { useEffect, useState } from "react";
import axios from "axios";
import { APIKEY } from "./constant";

type fetcherProps = {
  ROUTE: string;
  optionnal?: string;
};

function useFetcher({ ROUTE, optionnal }: fetcherProps) {
  const [dataMovies, setDataMovies] = useState<any>([]);

  useEffect(() => {
    async function getDataMovies() {
      await axios
        .get(`${ROUTE}?api_key=${APIKEY}${optionnal}`)
        .then((response) => setDataMovies(response.data))
        .catch((error) => console.log(error));
    }

    getDataMovies();
  }, [ROUTE, optionnal]);

  return dataMovies;
}

export default useFetcher;
