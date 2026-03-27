import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const { login } = useContext(UserContext);

  const handleLogin = () => {
    if (name.trim() !== "") {
      login(name);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🔐 Login</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;