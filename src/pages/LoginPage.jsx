import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button } from "../Component/index";
import device from "../theme/device";

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

const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    color: ${(props) => props.theme.colors.grey};
  }

  input {
    margin: 1em 0 2em 0;
    border: 1px solid #bfbebe;
    padding: 0.5em 1em;
    border-radius: 4px;
    min-height: 2em;

    @media ${device.tablet} {
      min-width: 20em;
    }

    ::placeholder {
      opacity: 0.5;
    }
  }
`;

const Logo = styled.p`
  margin-bottom: 5em;
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
      <Logo>LOGO</Logo>
      <FormCard>
        <InputLayout>
          <label htmlFor="username">Inscris ton pseudo ici</label>
          <input
            type="text"
            placeholder="Bogoss54"
            onChange={(e) => setUsername((username) => e.target.value)}
          />
        </InputLayout>
        <Button handleClick={handleConnexion} label="Se connecter" />
      </FormCard>
    </Layout>
  );
}
