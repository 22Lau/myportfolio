import React, { useState } from 'react';
import {
  FormContainer,
  InputContainer,
  Input,
  TextArea,
  SubmitButton,
  Message, 
} from '../styled/ContactStyle';
import { MacContainer, TopBar, Circle, CircleContainer,TitleBar } from '../styled/BannerStyles';
const Contacto = () => {
  const [isSent, setIsSent] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío de formulario
    setIsSent(true); // Actualiza el estado para mostrar el mensaje de confirmación
    setNombre(''); // Reinicia los valores de los campos del formulario
    setCorreo('');
    setMensaje('');
  };

  return (
    <MacContainer>
      <TopBar>
          <CircleContainer>
          <Circle color="#FF5F57" />
          <Circle color="#FFBD2E" />
          <Circle color="#28C748" />
        </CircleContainer>
        <TitleBar>$ Contact Me</TitleBar>
      </TopBar>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="nombre">Nombre:</label>
          <Input type="text" id="nombre" placeholder="Name"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="correo">Correo electrónico:</label>
          <Input
            type="email"
            id="correo"
            placeholder="Email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="mensaje">Mensaje:</label>
          <TextArea id="mensaje" rows="5" placeholder="Enter your message"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)} />
        </InputContainer>
        <SubmitButton type="submit">Enter</SubmitButton>
        {isSent && <Message>Thanks for contacting me!</Message>}
      </FormContainer>
    </MacContainer>
  );
};

export default Contacto;
