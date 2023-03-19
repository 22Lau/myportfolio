import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #7b1fa2;
  margin: 10px auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;

  @media screen and (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: center;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
`;

export const Li = styled.li`
  margin-left: 2rem;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const AudioContainer = styled.li`
  position: absolute;
  top: 10px;
  right: 0;
  `;


export const HamburgerButton = styled.button`
    display: none;
  
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 2rem;
      height: 2rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
  
      span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: #fff;
        margin-bottom: 0.5rem;
        transition: transform 0.3s ease-in-out;
  
        &:nth-child(1) {
          transform: ${({ isOpen }) =>
            isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
        }
  
        &:nth-child(2) {
          opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
        }
  
        &:nth-child(3) {
          transform: ${({ isOpen }) =>
            isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
        }
      }
    }
  `;
  