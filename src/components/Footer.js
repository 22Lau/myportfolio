import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FooterContainer, SocialIcons, SocialIconLink } from '../styled/FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <SocialIconLink href="https://www.linkedin.com/in/laura-crissanch-femcoder/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIconLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
