import React from 'react';
import {
  BannerContainer,
  Title,
  Subtitle,
  MacContainer,
  TopBar,
  Circle,
  CircleContainer,
  TitleBar,
} from '../styled/BannerStyles';
import { Image } from "../styled/BannerStyles";



const Banner = () => {
  return (
    <div className="BannerWrapper">  
      <MacContainer>
        <TopBar>
          <CircleContainer>
          <Circle color="#FF5F57" />
          <Circle color="#FFBD2E" />
          <Circle color="#28C748" />
        </CircleContainer>
        <TitleBar>$ npm install Lau</TitleBar>
      </TopBar>
      <BannerContainer>
      <Image src={"https://i.postimg.cc/SR8MyVR3/IMG-6950.jpg"} alt="Tela de araña" />

        <Title>Laura Cristiano Sánchez</Title>
        <Subtitle>Welcome to my portfolio!</Subtitle>
      </BannerContainer>
    </MacContainer>
  </div>
  );
};

export default Banner;
