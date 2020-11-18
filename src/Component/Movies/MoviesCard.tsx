import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


type MoviesCardProps = {
title: string;
poster: string;
release: string;
id: string;
}

export default function MoviesCard({id, title, poster, release} : MoviesCardProps) {
  return (
    <div>
      <Link to={`moviesDetails/${id}`}>
     <p>{title}</p>
    <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="movie poster"/>
    <p>{release}</p>
    </Link>
    </div>
  )
}
