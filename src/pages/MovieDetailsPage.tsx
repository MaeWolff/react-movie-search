import React, { useState, useEffect } from "react";
import useMoviesId from "../hooks/useMoviesId";
import styled from "styled-components";
import { Button, HeadTag } from "../Component/index";
import PageLayout from "../Layout/PageLayout";
import device from "../theme/device";

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3em;
    font-weight: bold;
    margin-top: 1em;
    max-width: 10em;
    text-align: center;

    @media ${device.tablet} {
      margin-top: 0;
      text-align: start;
    }
  }

  h2 {
    margin-top: 0.5em;
    margin-bottom: 1em;
    color: ${(props) => props.theme.colors.grey};
  }

  p {
    margin-top: 0.25em;
  }
`;

const DetailsMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: initial;
  }
`;

const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    align-items: flex-start;
  }
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
  margin-top: 2em;
`;

const Overview = styled.p`
  && {
    margin-top: 1em;
    margin-bottom: 2em;
    line-height: 1.25em;
  }
`;

const LayoutStyled = styled(PageLayout)`
  main {
    padding: 0 2em;
    align-items: center;
  }
`;

const CategoryDetails = styled.div`
  margin-top: 2em;
  width: fit-content;
  padding: 0.5em 1em;
  border: 1px solid #33363a;
  border-radius: 8px;
  text-align: start;
`;

const CategoryTitle = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const ButtonsContainer = styled.div`
  margin-top: 2em;

  @media ${device.tablet} {
    margin: 0 1em;
  }

  button {
    width: 13em;
    height: fit-content;
    margin-bottom: 0.5em;
  }
`;

const InfoProductionMovie = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  div {
    margin-right: 1em;
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const UpComingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5em;

  h5 {
    font-size: 2.5rem;
    margin-bottom: 0.5em;
    color: ${(props) => props.theme.colors.primary};

    @media ${device.laptop} {
      align-self: flex-start;
  }
  }
`;

const UpComingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
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

      <ResumeContainer>
        <DetailsMovie>
          <img
            style={{
              maxWidth: "20em",
              objectFit: "cover",
              marginRight: "2em",
              borderRadius: "8px",
            }}
            src={`https://image.tmdb.org/t/p/w300/${dataMovies.poster_path}`}
            alt="movie poster"
          />
          <FlexColumn>
            <h1>{dataMovies.title}</h1>
            <h2>{dataMovies.tagline}</h2>
            <OverviewContainer>
              <StyledTitle>Synopsis and details</StyledTitle>
              {dataMovies.adult && <p>Adult movie</p>}
              <Overview>{dataMovies.overview}</Overview>
            </OverviewContainer>
            <p>
              <StyledSpan>Release date :</StyledSpan> {dataMovies.release_date}
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

            <InfoProductionMovie>
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
                    <StyledSpan>Vote count :</StyledSpan>{" "}
                    {dataMovies.vote_count}
                  </p>
                )}
              </CategoryDetails>

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
            </InfoProductionMovie>
          </FlexColumn>

          <ButtonsContainer>
            {dataMovies.homepage ? (
              <a href={dataMovies.homepage} target="_blank" rel="noreferrer">
                <Button label="See the website" />
              </a>
            ) : (
              <p>No link available</p>
            )}

            <Button secondary label="Add to my favorite" />
          </ButtonsContainer>
        </DetailsMovie>
      </ResumeContainer>
    </LayoutStyled>
  );
}
