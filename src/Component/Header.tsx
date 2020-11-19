import React, { useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import LogoutSVG from "../assets/LogoutSVG";

const HeaderContainer = styled.header`
  z-index: 6;
  position: sticky;
  width: 100vw;
  top: 0;
  display: flex;
  flex-direction: row;
  padding: 1em 2em;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(6em);
  background-color: rgba(29, 27, 27, 0.4);
`;

const LinksContainer = styled.div`
  a {
    margin-right: 2em;
  }
`;

const Logo = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 900;
  font-size: 1.5em;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const UserIcon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 3em;
  background-color: ${(props) => props.theme.colors.primary};
  margin: 0 1em;
  border-radius: 50%;
`;

const LogOut = styled.div`
  cursor: pointer;

  svg {
    fill: ${(props) => props.theme.colors.grey};

    &:hover {
      fill: ${(props) => props.theme.colors.primary};
    }
  }
`;

const Header = () => {
  const username = localStorage?.getItem("username");
  const history = useHistory();

  function handleLogout() {
    localStorage.setItem("username", "");
    history.push("/");
  }

  useEffect(() => {
    if (username?.length === 0) {
      history.push("/");
    }
  }, [history, username]);

  return (
    <HeaderContainer>
      <Link to="/home">
        <Logo>KATANA</Logo>
      </Link>

      <UserContainer>
        <LinksContainer>
          <NavLink to="/">Ma Liste</NavLink>
        </LinksContainer>
        <p>{username}</p>
        <UserIcon>{username?.substr(0, 1)}</UserIcon>
        <LogOut onClick={handleLogout}>
          <LogoutSVG />
        </LogOut>
      </UserContainer>
    </HeaderContainer>
  );
};

export default Header;
