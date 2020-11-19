import { useState, useEffect } from 'react';
import styled from "styled-components";

import Switch from "../../elements/switch/Switch";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12rem;
`;

const AppTitle = styled.h1`
  color: var(--primary-btn-text);
`;

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }, [darkMode])

  return (
    <NavbarContainer>
      <AppTitle>devjobs</AppTitle>
      <Switch toggleMode={() => setDarkMode(!darkMode)} />
    </NavbarContainer>
  );
};

export default Navbar;
