import React from 'react';
import { AboutContainer, Title, Subtitle, SkillsList } from '../styled/AboutStyles';
import IconSection from '../components/IconSection';

const About = () => {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Subtitle>As a female FullStack Web Developer, I am in the final stages of my training, and I am eager to bring my skills and passion to a new team. I am a Junior Developer with a deep desire to learn, grow and tackle every challenge with a fresh perspective. My experience working in collaborative teams has honed my ability to adapt to new environments quickly and work efficiently towards shared goals. I am excited to take the next step in my career and look forward to contributing my technical expertise to a dynamic organization.</Subtitle>
      <Title>Skills</Title>
      <SkillsList>
        <IconSection />
      </SkillsList>
    </AboutContainer>
  );
};

export default About;
