import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from "styled-components";
import PageLayout from "../Layout/PageLayout";
import device from "../theme/device";
import { InputComponent, MoviesCard } from "../Component/index";

const Heading = styled.div`
  margin-top: 4em;
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

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [dataMovies, setDataMovies] = useState<any[]>([]);
  const APIKEY = '94f4de38164eb56347167c727bb8cde3';

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${search}`)
      .then(response => (setDataMovies(response.data.results)))
      .catch(error => console.log(error))
  },[search]);

  const renderMovies = dataMovies.map((movie) => {
    return (
      <div key={`${movie}:${movie.title}`}>
       <MoviesCard 
       id={movie.id}
       title={movie.title}
       poster={movie.poster_path}
       release={movie.release_date}
       />
      </div>
    );
  });


  
  return (
    <PageLayout>
      <Heading>
        <h1>KATANA</h1>
        <p>Retrouvez dès maintenant les details de tout vos films préférés</p>
      </Heading>
      <SearchInput
        type="text"
        id="search"
        placeholder="Entrez le nom d'un film (ex: Spider-Man)"
        handleChange={(e) => setSearch((search) => e.target.value)}
      />

<>
{renderMovies}
</>

    </PageLayout>
  );
}
