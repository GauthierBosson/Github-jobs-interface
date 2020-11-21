import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Switch from "../../elements/switch/Switch";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12rem;
`;

const AppTitle = styled.h1`
  color: var(--primary-btn-text);
  text-decoration: none;
`;

const Navbar = () => {
  const [mode, setMode] = useState(() => {
    const theme = window.localStorage.getItem("theme");
    return theme ? theme : "light";
  });

  useEffect(() => {
    window.localStorage.setItem("theme", mode);

    if (mode === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [mode]);

  function toggleTheme() {
    const currTheme = window.localStorage.getItem("theme");

    if (currTheme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  return (
    <NavbarContainer>
      <Link style={{ textDecoration: "none" }} to="/">
        <AppTitle>devjobs</AppTitle>
      </Link>
      <Switch isDarkMode={mode} toggleMode={() => toggleTheme()} />
    </NavbarContainer>
  );
};

export default Navbar;
