import React, { useState } from "react";
import styled from "styled-components";
import PageLayout from "../Layout/PageLayout";
import device from "../theme/device";
import useMovieSearch from "../hooks/useMovieSearch";
import BackgroundImg from "../background.png";
import debounce from "debounce";
import {
  InputComponent,
  MoviesCard,
  MoviesPopular,
  MoviesUpComing,
  HeadTag,
} from "../Component/index";

const HeroSection = styled.div`
  width: 100%;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  height: 55vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.div`
  margin-top: 5em;
  font-weight: 900;

  h1 {
    font-size: 4rem;
    color: ${(props) => props.theme.colors.primary};

    @media ${device.laptop} {
      font-size: 11rem;
    }
  }
`;

const SearchInput = styled(InputComponent)`
  width: 80%;
  margin-top: 2em;

  @media ${device.laptop} {
    max-width: 40em;
  }

  input {
    height: 3.5em;
  }
`;

const MoviesListLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;
`;

const MoviesListContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media ${device.laptop} {
    align-items: flex-start;
    }
`

const MoviesCardContainer = styled.div<{ fullWidth?: boolean }>`
  width: ${(props) => (props.fullWidth ? "100%" : "90%")};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoriesTitle = styled.h3`
  margin-bottom: 0.5em;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};

  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

const SearchTitle = styled.h3`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.grey};

  span {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.5rem;
  }
`;

export default function HomePage() {
  const [search, setSearch] = useState("");
  const dataMovies = useMovieSearch({ search: search });

  const renderMovies = dataMovies.map((movie) => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    let releaseDate = new Date(movie.release_date);

    return (
      <div key={`${movie}:${movie.id}`}>
        <MoviesCard
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          release={releaseDate.toLocaleString("en-US", options)}
        />
      </div>
    );
  });

  return (
    <PageLayout>
      <HeadTag title="Homepage" />
      <HeroSection>
        <Heading>
          <h1>KATANA</h1>
          <p>Find now the details of all your favorite movies</p>
        </Heading>

        <SearchInput
          type="text"
          id="search"
          placeholder="Enter the name of a movie (ex: Spider-Man))"
          handleChange={debounce(
            (e) =>
              e.target.value.length >= 3
                ? setSearch((search) => e.target.value)
                : setSearch((search) => ""),
            500
          )}
        />

        {search.length > 0 && (
          <SearchTitle>
            Results for <span>"{search}"</span>
          </SearchTitle>
        )}
      </HeroSection>

      {search ? (
        <MoviesListLayout>
          <MoviesCardContainer>{renderMovies}</MoviesCardContainer>
        </MoviesListLayout>
      ) : (
        <>
          <MoviesListLayout>
            <MoviesListContainer>
              <CategoriesTitle>Popular</CategoriesTitle>
              <MoviesCardContainer fullWidth>
                <MoviesPopular />
              </MoviesCardContainer>
            </MoviesListContainer>
          </MoviesListLayout>

          <MoviesListLayout>
            <MoviesListContainer>
              <CategoriesTitle>Up Coming</CategoriesTitle>
              <MoviesCardContainer fullWidth>
                <MoviesUpComing />
              </MoviesCardContainer>
            </MoviesListContainer>
          </MoviesListLayout>
        </>
      )}
    </PageLayout>
  );
}
