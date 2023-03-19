import React, { useState } from 'react';
import { Nav, Ul, Li,AudioContainer, HamburgerButton } from '../styled/NavbarStyles';
import Audio from './Audio';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <HamburgerButton onClick={toggleNav} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
      <Ul isOpen={isOpen}>
        <Li>Home</Li>
        <Li>About</Li>
        <Li>Portfolio</Li>
        <Li>Contact</Li>
        <AudioContainer>
          <Audio />
        </AudioContainer>        
      </Ul>
    </Nav>
  );
};

export default Navbar;
