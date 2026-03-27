import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/user/1">UserDetial1</Link>
      <Link to="/user/2">UserDetial2</Link>
    </nav>
  );
}

export default Navbar;