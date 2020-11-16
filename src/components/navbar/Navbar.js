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

const Navbar = () => (
  <NavbarContainer>
    <AppTitle>devjobs</AppTitle>
    <Switch />
  </NavbarContainer>
);

export default Navbar;
