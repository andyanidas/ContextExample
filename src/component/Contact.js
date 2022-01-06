import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

function Contact() {
  const [theme, setTheme] = useTheme();
  return (
    <div className="App">
      <h1>This is the contact page</h1>
      <h2>Theme: {theme}</h2>
      <Link to="/">
        <button>Go To Home Pages</button>
      </Link>
    </div>
  );
}

export default Contact;
