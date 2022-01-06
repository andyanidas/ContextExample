import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
function Home() {
  const [theme, setTheme] = useTheme();

  const setDark = () => {
    setTheme("DARK");
    // localStorage.setItem("theme", "dark");
  };
  const setWhite = () => {
    setTheme("WHITE");
    // localStorage.setItem("theme", "white");
  };
  return (
    <div className="App">
      <h1>Theme: {theme}</h1>
      <button onClick={setWhite}>white</button>
      <button onClick={setDark}>dark</button>
      <br />
      <br />
      <br />
      <Link to="about">
        <button>Go To About Page</button>
      </Link>
      <br />
      <br />
      <Link to="contact">
        <button>Go To Contact Pages</button>
      </Link>
    </div>
  );
}

export default Home;
