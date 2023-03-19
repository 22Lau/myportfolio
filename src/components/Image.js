import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: url("https://images.unsplash.com/photo-1573497490672-26f0f244dd94") center/cover;
`;

const Image = () => {
  return <StyledImage />;
};

export default Image;
