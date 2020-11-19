import React, { useState, useEffect } from "react";
import useMoviesId from "../hooks/useMoviesId";
import styled from "styled-components";
import { Button } from "../Component/index";
import PageLayout from "../Layout/PageLayout";

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2em 0 2em;

  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  h2 {
    margin-top: 0.5em;
    margin-bottom: 1em;
    color: ${(props) => props.theme.colors.grey};
  }

  p {
    margin-top: 0.25em;
  }

  button {
    width: 10em;
    height: fit-content;
    margin-right: 2em;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2em;
`;

const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const StyledTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  margin-top: 3em;
`;

const Overview = styled.p`
  && {
    margin-top: 1em;
    line-height: 1.25em;
  }
`;

export default function MovieDetailsPage() {
  const idPage = window.location.pathname.substr(7);
  const [movieId, setMovieId] = useState("");

  useEffect(() => {
    setMovieId(idPage);
  }, [idPage]);

  const dataMovies = useMoviesId({ movieId: movieId });

  console.log(dataMovies);

  return (
    <PageLayout>
      <img
        style={{
          background: "red",
          width: "100%",
          height: "20em",
          objectFit: "cover",
        }}
        src={`https://image.tmdb.org/t/p/w300/${dataMovies.poster_path}`}
        alt="movie poster"
      />
      <ResumeContainer>
        <FlexRow>
          <FlexColumn>
            <h1>{dataMovies.title}</h1>
            <h2>{dataMovies.tagline}</h2>
            <p>
              <StyledSpan>Data de sortie :</StyledSpan>{" "}
              {dataMovies.release_date}
            </p>
            <p>
              <StyledSpan>Durée :</StyledSpan> {dataMovies.runtime} minutes
            </p>
            {/* <p>Genre : {dataMovies.genres[1].name}</p> */}
          </FlexColumn>
          <a href={dataMovies.homepage} target="_blank" rel="noreferrer">
            <Button label="Voir le site" />
          </a>
        </FlexRow>
        <OverviewContainer>
          <StyledTitle>Synopsis et détails</StyledTitle>
          {dataMovies.adult && <p>Film pour adulte</p>}
          <Overview>{dataMovies.overview}</Overview>
        </OverviewContainer>
      </ResumeContainer>
    </PageLayout>
  );
}
