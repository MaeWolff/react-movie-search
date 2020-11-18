import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  padding: 1em 2em;
  justify-content: space-between;
  align-items: center;
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
`;

const UserIcon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 3em;
  background-color: ${(props) => props.theme.colors.primary};
  margin-left: 1em;
  border-radius: 50%;
`;

const Header = () => {
  const username = localStorage?.getItem("username");

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
      </UserContainer>
    </HeaderContainer>
  );
};

export default Header;
