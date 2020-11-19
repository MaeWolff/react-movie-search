import React, { useState } from "react";
import styled from "styled-components";
import PageLayout from "../Layout/PageLayout";
import device from "../theme/device";
import { InputComponent, MoviesCard } from "../Component/index";
import useMovieSearch from "../hooks/useMovieSearch";
import BackgroundImg from "../background.png";
import debounce from 'debounce'

const HeroSection = styled.div`
  width: 100%;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  height: 66vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.div`
  margin-top: 10em;
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
`;

const MoviesCardContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function HomePage() {
  const [search, setSearch] = useState("");
  const dataMovies = useMovieSearch({ search: search });

  

  
  const renderMovies = dataMovies.map((movie) => {  
    let options = { year: "numeric", month: "long", day: "numeric"};
    let releaseDate = new Date(movie.release_date)
    return (
      <div key={`${movie}:${movie.id}`}>
        <MoviesCard
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          release={releaseDate.toLocaleString('fr-FR', options)}
        />
      </div>
    );
  });

  return (
    <PageLayout>
      <HeroSection>
        <Heading>
          <h1>KATANA</h1>
          <p>Retrouvez dès maintenant les details de tout vos films préférés</p>
        </Heading>

        <SearchInput
          type="text"
          id="search"
          placeholder="Entrez le nom d'un film (ex: Spider-Man)"
          handleChange={debounce((e) => e.target.value.length >= 3? setSearch((search) => e.target.value): setSearch((search) => ''), 300)}
        />
      </HeroSection>
      
      {search ?
        <MoviesCardContainer>{renderMovies}</MoviesCardContainer>
        :<div>
          <p>Nouveautés</p>
        </div>
      }
    </PageLayout>
  );
}
