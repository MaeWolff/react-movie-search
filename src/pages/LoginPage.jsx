import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState();

  const history = useHistory();

  function handleConnexion() {
    localStorage.setItem("username", username);
    history.push("/home");
  }

  //   useEffect(() => {
  //     if (localStorage.getItem("username").length > 1) {
  //       history.push("/home");
  //     }
  //   }, [history]);

  return (
    <div>
      Login page
      <input
        type="text"
        onChange={(e) => setUsername((username) => e.target.value)}
      />
      <p>{localStorage.getItem("username")}</p>
      <button onClick={handleConnexion}>Se connecter</button>
    </div>
  );
}
