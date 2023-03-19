import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #7b1fa2;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin-right: 1rem;

  &:hover {
    color: #3f51b5;
  }
`;
