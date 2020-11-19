import { useEffect, useState } from "react";
import axios from "axios";
import { APIKEY } from "./constant";

interface IMoviesId {
  movieId: string;
}

function useMoviesId({ movieId }: IMoviesId) {
  const [dataMovies, setDataMovies] = useState<any>([]);

  useEffect(() => {
    async function getDataMovies() {
      await axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}`)
        .then((response) => setDataMovies(response.data))
        .catch((error) => console.log(error));
    }

    getDataMovies();
  }, [movieId]);

  return dataMovies;
}

export default useMoviesId;
