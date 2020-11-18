import React from "react";
import styled from "styled-components";
import { MoviesList } from "../Component/index";
import PageLayout from "../Layout/PageLayout";
import device from "../theme/device";
import { InputComponent } from "../Component/index";

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
  return (
    <PageLayout>
      <Heading>
        <h1>KATANA</h1>
        <p>Retrouvez dès maintenant les details de tout vos films préférés</p>
      </Heading>
      <SearchInput
        id="search"
        placeholder="Entrez le nom d'un film (ex: Spider-Man)"
      />
    </PageLayout>
  );
}
