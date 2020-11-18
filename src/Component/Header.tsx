import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const username = localStorage?.getItem("username");

  return (
    <div>
      <div>
        <Link to="/home">Mammy Searching</Link>
      </div>
      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/">film</NavLink>
        <NavLink to="/">Nouveautés</NavLink>
        <NavLink to="/">Ma Liste</NavLink>
      </div>
      <div>
        <span>{username}</span>
        <span>{username?.substr(0, 1)}</span>
      </div>
    </div>
  );
};

export default Header;
