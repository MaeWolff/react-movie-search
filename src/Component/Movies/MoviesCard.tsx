import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 17.5em;
  margin: 0.8em;
  transition: all 0.2s ease;
  :hover {
    transform: scale(1.05);
  }

  img {
    width: 15.625em;
    height: 23.75em;
    border-radius: 8px;
  }
`;

const Title = styled.p`
  line-height: 1.25em;
  font-weight: bold;
  margin: 0.7em 0 0.3em 0;
`;

type MoviesCardProps = {
  title: string;
  poster: string;
  release: string;
  id: string;
};

export default function MoviesCard({
  id,
  title,
  poster,
  release,
}: MoviesCardProps) {
  const idPage = window.location.pathname.substr(1,5); 
  
  return (
    <CardContainer>
      <Link to={idPage === 'movie' ? `${id}` :`movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster}`}
          alt="movie poster"
        />
        <Title>{title}</Title>
        <p>{release}</p>
      </Link>
    </CardContainer>
  );
}
