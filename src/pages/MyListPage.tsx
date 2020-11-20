import React, { useState, useEffect } from "react";
import axios from "axios";
import { APIKEY } from "../hooks/constant";
import PageLayout from "../Layout/PageLayout";

export default function MyListPage() {
  const favorisList: any = JSON.parse(localStorage.getItem("favoris") || "[]");
  const [dataMovies, setDataMovies] = useState<any>([]);
  const dataList: any = [];

  function handleClick() {
    for (let index = 0; index < favorisList?.length; index++) {
      function getMoviesId() {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${favorisList[index]}?api_key=${APIKEY}`
          )
          .then((response) => setDataMovies(response.data))
          .catch((error) => console.log(error));
      }
      getMoviesId();
      dataList.push(dataMovies);
    }
    console.log(dataList);
  }

  useEffect(() => {
    for (let index = 0; index < favorisList?.length; index++) {
      function getMoviesId() {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${favorisList[index]}?api_key=${APIKEY}`
          )
          .then((response) => setDataMovies(response.data))
          .catch((error) => console.log(error));
      }

      getMoviesId();
      dataList.push(dataMovies);
    }

    console.log(dataList);
  }, []);

  const render = dataList.map((movie, index) => {
    return (
      <div key={index}>
        <p>{movie.title}</p>
      </div>
    );
  });

  return (
    <PageLayout>
      Page en construction...
      <div onClick={handleClick}>dqjkhdk</div>
      <div>{render}</div>
      <p>{dataList}</p>
    </PageLayout>
  );
}
