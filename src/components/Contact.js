import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import { lightTheme } from "./Themes";

const float = keyframes`
  0% { transform: translateY(-10px); }
  50% { transform: translateY(15px) translateX(15px); }
  100% { transform: translateY(-10px); }
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  /* animation: ${float} 4s ease infinite; */
  @media (max-width: 769px) {
    padding-top: 50px;
  }
`;

const Wrapper = styled.div`
  width: 50vw;
  height: 70vh;
  border: 2px solid ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  backdrop-filter: blur(4px);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 200px;
  @media (max-width: 1250px) {
    gap: 50px;
  }
  @media (max-width: 769px) {
    gap: 16px;
    flex-direction: column;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.text};
  background-color: transparent;
  color: ${(props) => props.theme.text};
  font-size: 16px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accent};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.text};
  background-color: transparent;
  color: ${(props) => props.theme.text};
  font-size: 16px;
  border-radius: 5px;
  resize: none;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accent};
  }
`;

const Button = styled.button`
  padding: 12px 32px;
  border: none;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme.accent};
  }
`;

const Contact = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <LogoComponent theme="light" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Wrapper>
          <Form action="">
            <InputGroup>
              <div>
                <Label>Name</Label>
                <Input type="text" placeholder="Name" />
              </div>
              <div>
                <Label>Lastname</Label>
                <Input type="text" placeholder="Lastname" />
              </div>
            </InputGroup>
            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Label>Message</Label>
              <TextArea cols="30" rows="10" placeholder="Message"></TextArea>
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
