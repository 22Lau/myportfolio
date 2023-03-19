import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  border: 3px solid #000;
  border-color: #333;
  box-shadow: 0 0 50px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;
  margin: 20px;
  padding: 20px;
  text-align: center;
  width: 300px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #555;
    font-size: 24px;
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
    margin-bottom: 20px;
  }

  p {
    color: #999;
    font-size: 16px;
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  a {
    display: block;
    background-color: #555;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
    padding: 10px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #333;
    }
  }
`;

export const PortfolioTitle = styled.h1`
  color: #555;
  font-size: 36px;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  text-align: center;
  margin-bottom: 50px;
  margin-top:90px;
`;
