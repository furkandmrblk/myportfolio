import React, { useState } from 'react';
import styled from 'styled-components';

import { mindevice } from './theme/mediaQueries';
import LogoImg from './images/Logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav id="home">
      <Logo href="/">
        <LogoLogo src={LogoImg} alt="logoimg" />
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu open={open}>
        <MenuLink href="#project">Projects</MenuLink>
        <MenuLink href="/">About Me</MenuLink>
        <MenuLink href="#contactme">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 3.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: #5b56f4;
    margin-bottom: 4px;
    border-radius: 1px;
  }

  @media (max-width: 920px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 920px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => (open ? '300px' : '0')};
    transition: all 700ms ease-in-out;
  }
`;

const MenuLink = styled.a`
  font-size: 1rem;
  padding: 1rem 4.375rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:visited {
    color: ${(props) => props.theme.colors.white};
  }

  &:hover {
    color: ${(props) => props.theme.colors.purple};
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;

  @media ${mindevice.laptop} {
    margin-left: 70px;
  }
`;

const LogoLogo = styled.img`
  height: 31px;
  width: 39px;
`;

export default Navbar;
