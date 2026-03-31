// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import { UserContext } from "../context/UserContext";


// function Navbar() {
//     const { theme, toggleTheme } = useContext(ThemeContext);
//     const { logout } = useContext(UserContext);

//   return (
//     <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//       <Link to="/user/1">UserDetial1</Link>
//       <Link to="/user/2">UserDetial2</Link>
//       <button onClick={toggleTheme}>
//         Switch to {theme === "light" ? "Dark" : "Light"} Mode
//       </button>
//       <button onClick={logout}>Logout</button>
//     </nav>
//   );
// }

// export default Navbar;