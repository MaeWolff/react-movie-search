import { useEffect, useState } from "react";
import axios from "axios";
import { APIKEY } from "./constant";

type fetcherProps = {
  ROUTE: string;
};

<<<<<<< HEAD
function useFetcher({ ROUTE, optionnal }: fetcherProps) {
  const [dataResultsMovies, setDataResultsMovies] = useState<any[]>([]);
=======
function useFetcher({ ROUTE }: fetcherProps) {
>>>>>>> 8c1768c... add movie details page and style
  const [dataMovies, setDataMovies] = useState<any>([]);

  useEffect(() => {
    async function getDataMovies() {
      await axios
<<<<<<< HEAD
        .get(`${ROUTE}?api_key=${APIKEY}${optionnal}`)
        .then((response) => response.data.results ? setDataResultsMovies(response.data.results) : setDataMovies(response.data))
=======
        .get(`${ROUTE}?api_key=${APIKEY}`)
        .then((response) => setDataMovies(response.data))
>>>>>>> 8c1768c... add movie details page and style
        .catch((error) => console.log(error));
    }

    getDataMovies();
  }, [ROUTE]);

  return dataMovies.length ? dataMovies : dataResultsMovies ;
}

export default useFetcher;
