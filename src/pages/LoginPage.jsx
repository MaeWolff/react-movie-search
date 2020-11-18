import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "../Component/index";

const FlexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  ${FlexCenter};
`;

const FormCard = styled.div`
  width: 50%;
  ${FlexCenter};
`;

export default function LoginPage() {
  const [username, setUsername] = useState();

  const history = useHistory();

  function handleConnexion() {
    localStorage.setItem("username", username);
    history.push("/home");
  }

  return (
    <Layout>
      <FormCard>
        <>
          <label htmlFor="username">Inscris ton pseudo ici</label>
          <input
            type="text"
            onChange={(e) => setUsername((username) => e.target.value)}
          />
        </>
        <Button handleClick={handleConnexion} label="Se connecter" />
      </FormCard>
    </Layout>
  );
}
