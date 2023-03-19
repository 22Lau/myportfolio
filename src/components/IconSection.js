import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaSymfony,
  FaPhp,
  FaGit,
  FaGithub,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";

const Section = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const Icon = styled.div`
  font-size: 40px;
  color: #FF5F57;
  animation: ${rotate} 10s linear infinite;
`;


const IconSection = () => {
  return (
    <Section>
      <Icon>
        <FaHtml5 />
      </Icon>
      <Icon>
        <FaCss3Alt />
      </Icon>
      <Icon>
        <FaSass />
      </Icon>
      <Icon>
        <FaJsSquare />
      </Icon>
      <Icon>
        <FaReact />
      </Icon>
      <Icon>
        <FaSymfony />
      </Icon>
      <Icon>
        <FaPhp />
      </Icon>
      <Icon>
        <FaGit />
      </Icon>
      <Icon>
        <FaGithub />
      </Icon>
      <Icon>
        <FaBootstrap />
      </Icon>
      <Icon>
        <FaFigma />
      </Icon>
    </Section>
  );
};

export default IconSection;
