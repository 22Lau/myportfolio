import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';



const AudioContainer = styled.div`
  display: block;
`;

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContainer>
      <audio controls={isPlaying}>
        <source src="/assets/Vikings.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento audio.
      </audio>
      <button className="MusicButton" onClick={toggleAudio}>
        {isPlaying ? <FaVolumeMute /> : <FaMusic />}
      </button>
    </AudioContainer>
  );
};

export default Audio;

