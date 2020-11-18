import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState();

  const history = useHistory();

  function handleConnexion() {
    localStorage.setItem("username", username);
    history.push("/home");
  }

  return (
    <div>
      Login page
      <input
        type="text"
        onChange={(e) => setUsername((username) => e.target.value)}
      />
      <button onClick={handleConnexion}>Se connecter</button>
    </div>
  );
}
