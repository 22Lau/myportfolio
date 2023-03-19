import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 400px;
  width: 60%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 60px auto;
  background-color: black;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin: 0 auto;
  margin-top: -15px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 1px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: none;
  background-color: #212121;
  color: #0ff;
  font-size: 16px;
  width: 100%;

  &::placeholder {
    color: #0ff;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  background-color: #212121;
  color: #0ff;
  font-size: 16px;
  resize: none;
  width: 100%;

  &::placeholder {
    color: #0ff;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  background-color: #0ff;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  width: 80%;

  &:hover {
    background-color: #64b5f6;
  }
`;

const Message = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;


export {
  FormContainer,
  InputContainer,
  Input,
  TextArea,
  SubmitButton,
  Message,
};
