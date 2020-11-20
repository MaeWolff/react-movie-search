import React, { useState } from "react";
import styled from "styled-components";
import PageLayout from "../Layout/PageLayout";
import device from "../theme/device";
import useMovieSearch from "../hooks/useMovieSearch";
import usePopular from "../hooks/usePopular";
import useUpComing from "../hooks/useUpComing";
import BackgroundImg from "../background.png";
import debounce from "debounce";
import { InputComponent, MoviesCard, HeadTag } from "../Component/index";

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

    input {
      height: 3.5em;
    }
  }
`;

const MoviesCardLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;
`

const MoviesCardContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoriesTitle = styled.h3`
    margin: 0 0 0.5em 3em;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primary};
    @media ${device.laptop} {
      font-size: 3rem;
    }
`

export default function HomePage() {
  const [search, setSearch] = useState("");
  const dataMovies = useMovieSearch({ search: search });
  const dataPopularMovies = usePopular();
  const dataUpComingMovies = useUpComing();

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
  
  const renderPouplarMovies = dataPopularMovies.map((movie) => {
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

  const renderUpComingMovies = dataUpComingMovies.map((movie) => {
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
            300
          )}
        />
      </HeroSection>

      {search ? (
        <MoviesCardLayout>
          <MoviesCardContainer>{renderMovies}</MoviesCardContainer>
        </MoviesCardLayout>
      ) : (
        <>
          <CategoriesTitle>Popular</CategoriesTitle>
          <MoviesCardLayout>
            <MoviesCardContainer>
                {renderPouplarMovies}
            </MoviesCardContainer>
          </MoviesCardLayout>
          <CategoriesTitle>Up Coming</CategoriesTitle>
          <MoviesCardLayout>
            <MoviesCardContainer>
                {renderUpComingMovies}
            </MoviesCardContainer>
          </MoviesCardLayout>
        </>
      )}
    </PageLayout>
  );
}
