import styled from 'styled-components';

export const AboutContainer = styled.div`
  max-width: 700px;
  margin:80px auto;
  box-shadow: 0 0 50px #0ff, 0 0 100px #0ff, 0 0 150px #0ff;
  border-radius: 10px;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  font-size: 16px;
  padding: 80px;

  line-height: 1.8;

  &::before {
    content: "$ ";
    color:#FFBD2E;
  }

  &::after {
    content: "|";
    color:#FFBD2E;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export const Title = styled.h2`
  color: #28C748;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Subtitle = styled.p`
  color: #b3b3b3;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  overflow: hidden;
  display: inline-block;
  max-width: 100%;
  animation: typing 5s steps(25) forwards;
  animation-delay: 1s;

  @keyframes typing {
    from {
      width: 0;
      text-shadow: none;
    }
    to {
      width: 100%;
      text-shadow: none;
    }
  }
`;


export const SkillsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Skill = styled.li`
  background-color: #fff;
  border-radius: 10px;
  display: inline-block;
  font-size: 14px;
  margin: 5px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
`;
