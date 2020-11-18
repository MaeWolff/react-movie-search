import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button, InputComponent } from "../Component/index";

const FlexCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  ${FlexCenter};
  align-items: center;
`;

const FormCard = styled.div`
  padding: 2em 4em;
  ${FlexCenter};
  align-items: flex-start;
  /* box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.25); */
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 5em;

  span {
    letter-spacing: 0.25em;
  }
`;

const Logo = styled.p`
  font-weight: 900;
  font-size: 3rem;
`;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [errorStatusMessage, setErrorStatusMessage] = useState("");

  const user = localStorage.getItem("username");
  const history = useHistory();

  function handleConnexion() {
    localStorage.setItem("username", username);

    if (user?.length === 0) {
      setErrorMessage(true);
      setErrorStatusMessage("Veuillez entrez votre pseudo");
    } else {
      history.push("/home");
    }
  }

  return (
    <Layout>
      <LogoContainer>
        <Logo>KATANA</Logo>
        <span>movies searching</span>
      </LogoContainer>

      <FormCard>
        <InputComponent
          label="Inscris ton pseudo ici"
          id="username"
          type="text"
          placeholder="Bogoss54 "
          handleChange={(e) => setUsername((username) => e.target.value)}
        />

        {errorMessage && (
          <p style={{ color: "red", marginBottom: "1em" }}>
            {errorStatusMessage}
          </p>
        )}

        <Button handleClick={handleConnexion} label="Se connecter" />
      </FormCard>
    </Layout>
  );
}
