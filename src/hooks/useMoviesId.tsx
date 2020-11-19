import { useEffect, useState } from "react";
import { APIKEY } from './constant';
import axios from 'axios';

interface IMoviesId {
  movieId: string;
}
function useMoviesId({ movieId }: IMoviesId) {
  const [dataMovies, setDataMovies] = useState<any>([]);
  
  useEffect(() => {
    async function getMoviesId() {
      await axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${APIKEY}`)
      .then((response) => setDataMovies(response.data))
      .catch((error) => console.log(error));
    }
    getMoviesId()
  }, [movieId]);

  return dataMovies;
}

export default useMoviesId;
