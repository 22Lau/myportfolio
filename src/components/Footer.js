import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FooterContainer, SocialIcons, SocialIconLink } from '../styled/FooterStyles';
import PdfButton from '../components/Pdf'


const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
      <p>Derechos reservados © 2023</p>
        <SocialIconLink href="https://www.linkedin.com/in/laura-crissanch-femcoder/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIconLink>
      </SocialIcons>
      <PdfButton />
    </FooterContainer>
  );
};

export default Footer;
