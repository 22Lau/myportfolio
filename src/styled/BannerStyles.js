import styled from "styled-components";
import Banner from "../components/Banner";

export const MacContainer = styled.div`
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0 0 50px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 10px auto;
  height: 80vh;
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #242424;
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 30px;
  box-shadow: 0 0 0 10px #fff, 0 0 0 15px #333;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0ff, 0 0 70px #0ff, 0 0 80px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;
`;

export const Subtitle = styled.h2`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: normal;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0ff, 0 0 70px #0ff, 0 0 80px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Circle = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  height: 20px;
  margin-right: 5px;
  width: 20px;
`;

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const TitleBar = styled.div`
  background-color: #333;
  border-radius: 5px;
  color: #0ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  font-weight: bold;
  margin: 10px 0;
  padding: 5px;
  width: 80%;
  text-align: center;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0ff, 0
`;

export default Banner;