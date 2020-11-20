import React, { useState, useEffect } from "react";
import useMoviesId from "../hooks/useMoviesId";
import styled from "styled-components";
import { Button, HeadTag } from "../Component/index";
import PageLayout from "../Layout/PageLayout";

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3em;
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

const LayoutStyled = styled(PageLayout)`
  main {
    align-items: flex-start;
    padding: 0 2em;
  }
`;

const CategoryDetails = styled.div`
  margin-top: 2em;
  width: fit-content;
  padding: 0.5em 1em;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  text-align: start;
`;

const CategoryTitle = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  margin-bottom: 0.5em;
`;

export default function MovieDetailsPage() {
  const idPage = window.location.pathname.substr(7);
  const [movieId, setMovieId] = useState("");

  useEffect(() => {
    setMovieId(idPage);
  }, [idPage]);

  const dataMovies = useMoviesId({ movieId: movieId });

  return (
    <LayoutStyled>
      <HeadTag title="Movie details" />
      <img
        style={{
          background: "red",
          width: "100%",
          height: "30em",
          objectFit: "cover",
        }}
        src={`https://image.tmdb.org/t/p/w300/${dataMovies.backdrop_path}`}
        alt="movie poster"
      />
      <ResumeContainer>
        <FlexRow>
          <FlexColumn>
            <h1>{dataMovies.title}</h1>
            <h2>{dataMovies.tagline}</h2>
            <p>
              <StyledSpan>Release date :</StyledSpan>{" "}
              {dataMovies.release_date}
            </p>
            <p>
              <StyledSpan>Duration :</StyledSpan> {dataMovies.runtime} minutes
            </p>
            {dataMovies.genres && (
              <p>
                <StyledSpan>Genre :</StyledSpan>
                &nbsp;{dataMovies.genres[0].name}
              </p>
            )}
          </FlexColumn>

          {dataMovies.homepage ? (
            <a href={dataMovies.homepage} target="_blank" rel="noreferrer">
              <Button label="See the website" />
            </a>
          ) : (
            <p>No link available</p>
          )}
        </FlexRow>
        <OverviewContainer>
          <StyledTitle>Synopsis and details</StyledTitle>
          {dataMovies.adult && <p>Adult movie</p>}
          <Overview>{dataMovies.overview}</Overview>
        </OverviewContainer>
      </ResumeContainer>

      <CategoryDetails>
        <CategoryTitle>Production details</CategoryTitle>
        {dataMovies.production_companies && (
          <p>
            <StyledSpan>Company :</StyledSpan>{" "}
            {dataMovies.production_companies[0].name}
          </p>
        )}
        <p>
          <StyledSpan>Budget :</StyledSpan>&nbsp;
          {dataMovies.budget
            ? dataMovies.budget.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            : `Budget not available`}
        </p>
      </CategoryDetails>

      <CategoryDetails>
        <CategoryTitle>Statistics</CategoryTitle>
        {dataMovies.vote_average && (
          <p>
            <StyledSpan>Note :</StyledSpan>&nbsp;
            {dataMovies.vote_average} / 10
          </p>
        )}
        <p>
          <StyledSpan>Income :</StyledSpan>&nbsp;
          {dataMovies.revenue
            ? dataMovies.revenue.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            : `Income not available`}
        </p>
        {dataMovies.vote_count && (
          <p>
            <StyledSpan>Vote count :</StyledSpan> {dataMovies.vote_count}
          </p>
        )}
      </CategoryDetails>
    </LayoutStyled>
  );
}
